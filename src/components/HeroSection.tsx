import React from 'react';
import { BookOpen, Sparkles, AlertTriangle, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStartQuiz: () => void;
  onExploreMortar: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz, onExploreMortar }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#2d1b1d] bg-gradient-to-b from-[#14080b] via-[#0e0708] to-[#0c0908] py-16 sm:py-24">
      {/* Subtle crimson and amber radial atmosphere */}
      <div className="pointer-events-none absolute inset-0 parchment-glow opacity-80" />
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full crimson-glow blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Archival Classification Banner */}
        <div className="inline-flex items-center gap-2 border border-[#831828]/50 bg-[#1e0a0e]/80 px-4 py-1.5 text-xs tracking-widest text-[#d96b27] uppercase font-mono mb-8 rounded">
          <AlertTriangle className="h-3.5 w-3.5 text-[#e11d48]" />
          <span>Секретные архивы Аббатства Святого Блендерия · Рассекречено: октябрь 2026 г.</span>
        </div>

        {/* Heraldic Alchemical Seal Illustration */}
        <div className="mx-auto mb-8 flex items-center justify-center">
          <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-[#d4af37]/60 bg-[#18090d] shadow-2xl shadow-[#831828]/30">
            {/* SVG Crest: Pestle, Cross, Bladed Petals & Ripe Persimmon */}
            <svg viewBox="0 0 100 100" className="h-20 w-20 sm:h-24 sm:w-24 text-[#d4af37]">
              {/* Ornate heraldic circle with notches */}
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Medieval Mortar base */}
              <path d="M 28 65 Q 50 82 72 65 L 68 52 Q 50 56 32 52 Z" fill="#78350f" stroke="#d4af37" strokeWidth="1.5" />
              
              {/* Ripe bursting Persimmon inside mortar */}
              <circle cx="50" cy="46" r="14" fill="#d96b27" stroke="#9a3412" strokeWidth="1.5" />
              <path d="M 46 34 C 48 30 52 30 54 34 C 58 35 59 39 56 41 C 53 43 47 43 44 41 C 41 39 42 35 46 34 Z" fill="#15803d" />
              
              {/* Crossing mortar pestle and blade */}
              <line x1="30" y1="26" x2="66" y2="62" stroke="#e6ded5" strokeWidth="3" strokeLinecap="round" />
              <line x1="68" y1="26" x2="32" y2="62" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Top tiny gothic cross */}
              <path d="M 50 12 L 50 20 M 46 15 L 54 15" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Red wax seal accent */}
            <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#831828] border border-[#f43f5e]/50 text-[10px] font-serif font-bold text-[#fef2f2] shadow-md">
              1243
            </div>
          </div>
        </div>

        {/* Latin Incipit */}
        <p className="text-xs sm:text-sm tracking-widest text-[#a89988] uppercase font-serif italic mb-3">
          Tractatus De Fructu Trito et Semine Astringenti, Sive Anatomia Vitii
        </p>

        {/* Main Sensual Treatise Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf7f2] font-display text-balance mb-6">
          Трактат: «О природе перетёртых плодов и вяжущем семени, или Анатомия порока»
        </h1>

        {/* Sensual Monastic Teaser */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#cdc1b4] font-serif-prose leading-relaxed italic mb-10">
          «И вздымалась пена фруктовая в чаше каменной, и плоть возжелала яростно. 
          Ибо танины дикой хурмы, смешавшись с соком страсти, лишают мужей покоя 
          и обращают взор их к дояркам в порыве звериного упоения...»
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#treatise"
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#fef2f2] bg-[#831828] hover:bg-[#9f1239] active:scale-95 rounded border border-[#e11d48]/40 shadow-lg shadow-[#831828]/25 transition-all font-display"
          >
            <BookOpen className="h-4 w-4" />
            <span>Вскрыть Трактат</span>
          </a>

          <button
            type="button"
            onClick={onStartQuiz}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#e6ded5] bg-[#1a0e11] hover:bg-[#281419] hover:text-[#d4af37] active:scale-95 rounded border border-[#5c242e] transition-all font-display"
          >
            <Sparkles className="h-4 w-4 text-[#d96b27]" />
            <span>Тест: Уровень Плодовой Похоти</span>
          </button>

          <button
            type="button"
            onClick={onExploreMortar}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#d4af37] bg-[#18110b] hover:bg-[#251a10] active:scale-95 rounded border border-[#78350f]/60 transition-all font-display"
          >
            <span>Ступка Искушения</span>
          </button>
        </div>

        {/* Archive Metadata Strip */}
        <div className="mt-14 pt-8 border-t border-[#261517] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#9c8e80]">
          <div>
            <span className="text-[#6d5e52]">Источник:</span> Скрипторий Братьев-Фрутарианцев
          </div>
          <span aria-hidden="true" className="text-[#453730]">·</span>
          <div>
            <span className="text-[#6d5e52]">Гриф:</span> Anathema & Libido
          </div>
          <span aria-hidden="true" className="text-[#453730]">·</span>
          <div>
            <span className="text-[#6d5e52]">Диагноз:</span> Fructus Libido & Vacuum Blenderus
          </div>
        </div>

      </div>

      <div className="mt-8 flex justify-center text-[#5c4a40]">
        <a href="#treatise" aria-label="Прокрутить к трактату" className="animate-bounce p-2 hover:text-[#d96b27] transition-colors">
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
