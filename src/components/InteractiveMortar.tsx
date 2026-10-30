import React, { useState } from 'react';
import { Sparkles, RefreshCw, AlertOctagon, Flame, Droplets } from 'lucide-react';
import { calculateMortarStatus, MortarState } from '../utils/abbeyLogic';
import { abbeyAudio } from '../utils/abbeyAudio';

export const InteractiveMortar: React.FC = () => {
  const [mortarState, setMortarState] = useState<MortarState>({
    persimmons: 2,
    figs: 1,
    pomegranates: 1,
    grindCount: 2,
  });

  const [isGrinding, setIsGrinding] = useState(false);
  const [pestleAngle, setPestleAngle] = useState(15);
  const [showVacuumAlert, setShowVacuumAlert] = useState(false);

  const status = calculateMortarStatus(mortarState);

  const handleAddFruit = (type: 'persimmons' | 'figs' | 'pomegranates') => {
    setMortarState(prev => ({
      ...prev,
      [type]: Math.min(prev[type] + 1, 5),
    }));
    setShowVacuumAlert(false);
  };

  const handleGrind = () => {
    setIsGrinding(true);
    setPestleAngle(prev => (prev === 15 ? -25 : 15));
    abbeyAudio.playGrindSound();

    setMortarState(prev => ({
      ...prev,
      grindCount: prev.grindCount + 1,
    }));

    setTimeout(() => {
      setIsGrinding(false);
    }, 280);
  };

  const handleEmptyMortar = () => {
    // Triggers the infamous Vacuum Blenderus!
    setMortarState({
      persimmons: 0,
      figs: 0,
      pomegranates: 0,
      grindCount: 0,
    });
    setShowVacuumAlert(true);
  };

  const handleReset = () => {
    setMortarState({
      persimmons: 2,
      figs: 1,
      pomegranates: 1,
      grindCount: 2,
    });
    setShowVacuumAlert(false);
  };

  return (
    <section id="mortar-section" className="py-20 bg-[#0a0708] border-b border-[#2d1b1d] relative overflow-hidden">
      {/* Background mood glow */}
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-80 w-80 rounded-full crimson-glow opacity-30 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4af37] uppercase mb-2">
            <Flame className="h-3.5 w-3.5 text-[#e11d48]" />
            <span>Алхимический Эксперимент Ордена</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#fbf7f2]">
            Ступка Искушения: Создание Густого Зелья
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#a89a8c] font-serif-prose max-w-xl mx-auto italic">
            Разотрите плоды дикой хурмы, ощутите вяжущую силу танинов или опустошите чашу, 
            чтобы испытать истинный ужас Vacuum Blenderus.
          </p>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Mortar Canvas & Physical Representation */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The Stone Mortar Bowl */}
            <div className={`relative flex h-72 w-72 sm:h-80 sm:w-80 items-center justify-center rounded-full border-4 ${status.isBlenderEmpty ? 'border-[#e11d48] animate-pulse bg-[#120508]' : 'border-[#4a242c] bg-[#160a0d]'} shadow-2xl transition-all duration-300`}>
              
              {/* Outer rim of ancient carved stone */}
              <div className="absolute inset-2 rounded-full border border-[#d4af37]/20" />

              {/* Liquid / Pulp Simulation inside Mortar */}
              {status.isBlenderEmpty ? (
                /* Empty Cold Bowl with Vacuum effect */
                <div className="text-center p-6">
                  <AlertOctagon className="h-14 w-14 text-[#e11d48] mx-auto mb-2 animate-bounce" />
                  <div className="text-sm font-mono text-[#f43f5e] uppercase tracking-wider font-bold">
                    VACUUM BLENDERUS
                  </div>
                  <div className="text-xs text-[#a89a8c] mt-1 font-serif-prose italic">
                    Чаша пуста! Ломка разума и навязчивые образы доярок неизбежны.
                  </div>
                </div>
              ) : (
                /* Rich voluptuous pulp bath */
                <div 
                  className="relative flex h-52 w-52 sm:h-60 sm:w-60 items-center justify-center rounded-full overflow-hidden transition-all duration-500 shadow-inner"
                  style={{
                    backgroundColor: status.viscosityPercent > 60 ? '#540f1a' : '#852b1b',
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.85)',
                  }}
                >
                  {/* Swirling fruit pulp layers */}
                  <div 
                    className="absolute inset-0 opacity-70 transition-transform duration-700"
                    style={{
                      background: `radial-gradient(circle at 40% 40%, rgba(217, 107, 39, 0.9) 0%, rgba(131, 24, 40, 0.95) 60%, rgba(30, 8, 12, 1) 100%)`,
                      transform: `rotate(${mortarState.grindCount * 45}deg) scale(${1 + status.viscosityPercent / 300})`,
                    }}
                  />

                  {/* Bubbles and seeds */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {Array.from({ length: Math.min(mortarState.grindCount + 4, 12) }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full bg-[#fcd34d]/70 shadow-sm"
                          style={{
                            width: `${4 + (i % 3) * 3}px`,
                            height: `${4 + (i % 3) * 3}px`,
                            top: `${20 + ((i * 37) % 60)}%`,
                            left: `${20 + ((i * 53) % 60)}%`,
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Centered Liquid Viscosity readout */}
                  <div className="relative z-10 text-center bg-[#0d0406]/75 px-3 py-1.5 rounded-full border border-[#d4af37]/40 backdrop-blur-sm">
                    <span className="text-xs font-mono text-[#fef3c7] font-bold">
                      Густота: {status.viscosityPercent}%
                    </span>
                  </div>
                </div>
              )}

              {/* The Pestle (Stone Grinder) */}
              {!status.isBlenderEmpty && (
                <div
                  className="absolute pointer-events-none transition-transform duration-200 ease-out z-20"
                  style={{
                    transform: `rotate(${pestleAngle}deg) translateY(${isGrinding ? '15px' : '-20px'})`,
                    transformOrigin: 'top center',
                  }}
                >
                  <div className="h-44 w-10 sm:h-52 sm:w-12 rounded-t-full rounded-b-2xl bg-gradient-to-r from-[#5a524c] via-[#8c827a] to-[#453e39] border border-[#a89a8c]/50 shadow-2xl flex flex-col justify-end items-center pb-3">
                    <div className="h-3 w-8 rounded-full bg-[#d96b27]/80 blur-[1px]" />
                  </div>
                </div>
              )}
            </div>

            {/* Mortar Action Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleGrind}
                disabled={status.isBlenderEmpty}
                className="flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#fef2f2] bg-[#831828] hover:bg-[#991b1b] active:scale-95 disabled:opacity-40 disabled:pointer-events-none rounded border border-[#be123c]/50 shadow-md font-display transition-all"
              >
                <Droplets className="h-4 w-4" />
                <span>Тереть пестиком ({mortarState.grindCount})</span>
              </button>

              <button
                type="button"
                onClick={handleEmptyMortar}
                disabled={status.isBlenderEmpty}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#fca5a5] bg-[#2a0e14] hover:bg-[#3d141d] active:scale-95 disabled:opacity-30 disabled:pointer-events-none rounded border border-[#831828] transition-all"
                title="Опустошить чашу и вызвать синдром Vacuum Blenderus"
              >
                <AlertOctagon className="h-4 w-4" />
                <span>Опустошить (Vacuum)</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2.5 text-xs text-[#a89a8c] bg-[#160d10] hover:text-[#f4ece1] rounded border border-[#3b1c22] transition-colors"
                title="Сбросить чашу к изначальному состоянию"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Сброс</span>
              </button>
            </div>
          </div>

          {/* Controls & Gauges Panel */}
          <div className="lg:col-span-5 rounded-xl border border-[#3b1c22] bg-[#140b0e] p-6 shadow-xl space-y-6">
            
            {/* Stage Title */}
            <div>
              <div className="text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-1">
                Состояние субстанции:
              </div>
              <h3 className="text-lg font-bold font-display text-[#fbf7f2]">
                {status.stageTitle}
              </h3>
              <p className="mt-1 text-xs text-[#cdc1b4] font-serif-prose italic leading-relaxed">
                {status.sensoryQuote}
              </p>
            </div>

            {/* Gauges */}
            <div className="space-y-4 border-t border-[#2a1317] pt-4">
              {/* Viscosity Bar */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#a89a8c]">Сладострастная густота:</span>
                  <span className="text-[#f4ece1] font-bold">{status.viscosityPercent}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#200d12] overflow-hidden border border-[#3b1a20]">
                  <div
                    className="h-full bg-gradient-to-r from-[#d96b27] via-[#e11d48] to-[#be123c] transition-all duration-300"
                    style={{ width: `${status.viscosityPercent}%` }}
                  />
                </div>
              </div>

              {/* Tannin Potency */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-[#a89a8c]">Концентрация танинов (хурма):</span>
                  <span className="text-[#d96b27] font-bold">{status.tanninPotency}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#200d12] overflow-hidden border border-[#3b1a20]">
                  <div
                    className="h-full bg-gradient-to-r from-[#ca8a04] to-[#ea580c] transition-all duration-300"
                    style={{ width: `${status.tanninPotency}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Add Ingredients Grid */}
            <div className="border-t border-[#2a1317] pt-4">
              <div className="text-xs font-mono text-[#a89a8c] uppercase tracking-wider mb-3">
                Бросить плоды в чашу:
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleAddFruit('persimmons')}
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#1f0e13] hover:bg-[#2c131a] border border-[#52202a] text-center active:scale-95 transition-all"
                >
                  <span className="text-lg">🍑</span>
                  <span className="text-[11px] font-medium text-[#e6ded5] mt-1">Хурма</span>
                  <span className="text-[10px] font-mono text-[#d96b27]">{mortarState.persimmons} шт.</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddFruit('figs')}
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#1f0e13] hover:bg-[#2c131a] border border-[#52202a] text-center active:scale-95 transition-all"
                >
                  <span className="text-lg">🍯</span>
                  <span className="text-[11px] font-medium text-[#e6ded5] mt-1">Инжир</span>
                  <span className="text-[10px] font-mono text-[#d4af37]">{mortarState.figs} шт.</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddFruit('pomegranates')}
                  className="flex flex-col items-center justify-center p-2.5 rounded bg-[#1f0e13] hover:bg-[#2c131a] border border-[#52202a] text-center active:scale-95 transition-all"
                >
                  <span className="text-lg">🫐</span>
                  <span className="text-[11px] font-medium text-[#e6ded5] mt-1">Гранат</span>
                  <span className="text-[10px] font-mono text-[#e11d48]">{mortarState.pomegranates} шт.</span>
                </button>
              </div>
            </div>

            {/* Vacuum Alert Popup Warning */}
            {showVacuumAlert && (
              <div className="rounded border border-[#e11d48] bg-[#2b0c13] p-3 text-xs text-[#fecdd3] animate-fadeIn">
                <strong className="block text-[#f43f5e] font-mono mb-1">
                  ⚠️ СИМПТОМ VACUUM BLENDERUS АКТИВИРОВАН:
                </strong>
                Внимание! Вы полностью лишены смузи. Добавьте хурму обратно в ступку, пока 
                в вашем сознании не материализовались доярки скотного двора!
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
