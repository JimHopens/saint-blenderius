/**
 * Monastic synthesizer and ASMR sound effects using pure Web Audio API.
 * Provides authentic gothic monastic drone chords and mortar stone grinding squelch sounds.
 */

class AbbeyAudioEngine {
  private ctx: AudioContext | null = null;
  private droneGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  public isPlayingDrone = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Toggles the mysterious monastic organ/choir drone (D minor gothic drone: D2, A2, D3, F3).
   */
  public toggleDrone(): boolean {
    this.initCtx();
    if (!this.ctx) return false;

    if (this.isPlayingDrone) {
      this.stopDrone();
      return false;
    } else {
      this.startDrone();
      return true;
    }
  }

  private startDrone() {
    if (!this.ctx) return;
    this.stopDrone();

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 2.5);

    // Warm low-pass filter to sound like an ancient stone crypt
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    masterGain.connect(filter);
    filter.connect(this.ctx.destination);
    this.droneGain = masterGain;

    // D minor sacred monastic chord: D2 (73.4Hz), A2 (110Hz), D3 (146.8Hz), F3 (174.6Hz)
    const freqs = [73.42, 110.0, 146.83, 174.61];

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle vibrato (monk breath modulation)
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.05, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(1.2, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    this.isPlayingDrone = true;
  }

  public stopDrone() {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        this.oscillators = [];
      }, 1300);
    }
    this.isPlayingDrone = false;
  }

  /**
   * Sound effect for stone mortar grinding luscious fruit pulp.
   */
  public playGrindSound() {
    this.initCtx();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    
    // Stone friction noise
    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(650, t);
    bandpass.frequency.exponentialRampToValueAtTime(250, t + 0.3);
    bandpass.Q.setValueAtTime(4.0, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.ctx.destination);

    // Wet pulp squelch harmonic tone
    const squelch = this.ctx.createOscillator();
    squelch.type = 'triangle';
    squelch.frequency.setValueAtTime(180, t);
    squelch.frequency.linearRampToValueAtTime(90, t + 0.25);

    const squelchGain = this.ctx.createGain();
    squelchGain.gain.setValueAtTime(0.12, t);
    squelchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    squelch.connect(squelchGain);
    squelchGain.connect(this.ctx.destination);

    noise.start(t);
    squelch.start(t);
    noise.stop(t + 0.36);
    squelch.stop(t + 0.26);
  }

  /**
   * Chime when wax seal is inspected or diagnosis completed.
   */
  public playSealChime() {
    this.initCtx();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, t); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, t + 0.15); // E5

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 1.25);
  }
}

export const abbeyAudio = new AbbeyAudioEngine();
