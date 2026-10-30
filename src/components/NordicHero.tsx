import React from 'react';
import { TREATISE_ARCHIVE } from '../utils/treatiseData';

export const NordicHero: React.FC = () => {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#0b0c0e] pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-12 text-xs font-mono tracking-widest text-[#8b919a] uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#ea580c]">●</span>
            <span>{TREATISE_ARCHIVE.institutionRu}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Рассекречено: {TREATISE_ARCHIVE.declassificationDate}</span>
            <span aria-hidden="true">/</span>
            <span>{TREATISE_ARCHIVE.documentCode}</span>
          </div>
        </div>

        {/* 2-Column Split: Bold Editorial Typography + Sensual Art Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Title Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[#ea580c]">
              Norwegian Archival Release · {TREATISE_ARCHIVE.institutionNo}
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif-nordic text-[#f5f5f7] leading-[1.1] text-balance">
              Трактат: «О природе перетёртых плодов и вяжущем семени, или Анатомия порока»
            </h1>

            <p className="text-sm sm:text-base font-serif-nordic italic text-[#9ba1a6] leading-relaxed">
              {TREATISE_ARCHIVE.fullTitleNo}
            </p>

            <p className="text-base sm:text-lg text-[#c8cbd0] font-nordic-sans leading-relaxed pt-4 border-t border-white/[0.06]">
              {TREATISE_ARCHIVE.curatorialIntro} Публикация рассекреченных манускриптов ордена 
              Фрутарианцев XIII века об алхимии плоти, похоти и синдроме пустой чаши.
            </p>

            {/* Quick reading links */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-xs font-mono uppercase tracking-wider text-[#9ba1a6]">
              <a href="#hypotesen" className="text-white hover:text-[#ea580c] transition-colors underline underline-offset-4 decoration-white/20">
                01. Древняя хурмовая гипотеза →
              </a>
              <a href="#tom-blender" className="text-white hover:text-[#ea580c] transition-colors underline underline-offset-4 decoration-white/20">
                02. Синдром пустого блендера →
              </a>
            </div>
          </div>

          {/* Erotic Art Plate I: Minimalist Nordic Persimmon & Nectar */}
          <div className="lg:col-span-5">
            <div className="nordic-plate p-4 sm:p-6 rounded-none">
              
              {/* Art Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                
                {/* Sensual Scandinavian Art Artwork SVG */}
                <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="nordicBackdrop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14171d" />
                      <stop offset="100%" stopColor="#0a0b0d" />
                    </linearGradient>
                    <radialGradient id="persimmonGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#881337" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#14171d" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="pulpGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#c2410c" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                  </defs>

                  <rect width="320" height="400" fill="url(#nordicBackdrop)" />
                  
                  {/* Subtle architectural grid lines */}
                  <line x1="40" y1="0" x2="40" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="280" y1="0" x2="280" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="200" x2="320" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Soft sensual aura */}
                  <circle cx="160" cy="190" r="130" fill="url(#persimmonGlow)" />

                  {/* Voluptuous sliced persimmon / erotic fruit anatomy */}
                  {/* Outer luscious curve */}
                  <path 
                    d="M 90 170 C 80 100 240 100 230 170 C 220 250 160 280 160 280 C 160 280 100 250 90 170 Z" 
                    fill="url(#pulpGrad)" 
                    stroke="#fb923c" 
                    strokeWidth="1.5" 
                  />

                  {/* Sensual inner pulp chambers (evoking carnal anatomy) */}
                  <path 
                    d="M 160 140 C 145 160 145 200 160 220 C 175 200 175 160 160 140 Z" 
                    fill="#4c0519" 
                    stroke="#ea580c" 
                    strokeWidth="1.5" 
                  />
                  <path 
                    d="M 130 155 C 115 170 125 205 145 210 C 140 190 135 170 130 155 Z" 
                    fill="#4c0519" 
                    stroke="#ea580c" 
                    strokeWidth="1" 
                  />
                  <path 
                    d="M 190 155 C 205 170 195 205 175 210 C 180 190 185 170 190 155 Z" 
                    fill="#4c0519" 
                    stroke="#ea580c" 
                    strokeWidth="1" 
                  />

                  {/* Green star calyx at top */}
                  <path 
                    d="M 140 120 C 120 105 145 90 160 108 C 175 90 200 105 180 120 C 190 130 175 135 160 128 C 145 135 130 130 140 120 Z" 
                    fill="#1e293b" 
                    stroke="#475569" 
                    strokeWidth="1" 
                  />

                  {/* Glistening dripping nectar beads (sensual viscous drops) */}
                  <circle cx="160" cy="295" r="4" fill="#fb923c" />
                  <path d="M 160 280 Q 160 290 160 295" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="160" cy="315" r="3" fill="#ea580c" />
                  <circle cx="160" cy="330" r="1.5" fill="#f97316" />

                  {/* Raw stone slab texture beneath */}
                  <rect x="40" y="340" width="240" height="2" fill="rgba(255,255,255,0.15)" />

                  {/* Editorial typography inside plate */}
                  <text x="35" y="45" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
                    PLANSJE 01 · KJØDETS LYST
                  </text>
                  <text x="285" y="45" textAnchor="end" fill="#ea580c" fontSize="8.5" fontFamily="monospace">
                    1243/2026
                  </text>
                </svg>

              </div>

              {/* Museum caption below plate */}
              <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                <span>Planche 01 — Fruktkjøtt og snerpende nektar</span>
                <span>Oslo Arkiv · Ref. 01/A</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
