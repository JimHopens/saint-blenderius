import React from 'react';
import { CHAPTER_TWO } from '../utils/treatiseData';

export const NordicChapterTwo: React.FC = () => {
  return (
    <article id="tom-blender" className="border-b border-white/[0.08] bg-[#0b0c0e] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header Deck */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e11d48] mb-2">
            <span>02</span>
            <span aria-hidden="true">—</span>
            <span>{CHAPTER_TWO.classification}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
            {CHAPTER_TWO.titleRu}
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
            {CHAPTER_TWO.titleNo}
          </p>
        </div>

        {/* 2-Column Asymmetric Grid: Text & Art Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Reading Column (Verbatim Chapter 2) */}
          <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
            <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#e11d48] first-letter:mr-4 first-letter:leading-none">
              {CHAPTER_TWO.content[0]}
            </p>

            <p>
              {CHAPTER_TWO.content[1]}
            </p>

            {/* Stark Nordic Highlight Callout */}
            <div className="my-8 py-8 px-6 bg-[#140b0e] border-l-2 border-[#e11d48] text-[#f5f5f7]">
              <p className="text-xl sm:text-2xl font-serif-nordic italic leading-relaxed text-[#fff1f2]">
                {CHAPTER_TWO.keyQuote}
              </p>
              <span className="block mt-4 text-xs font-mono uppercase tracking-wider text-[#a89a8c]">
                — {CHAPTER_TWO.quoteAuthor}
              </span>
            </div>

            <p>
              {CHAPTER_TWO.content[2]}
            </p>

            {/* Editorial postscript */}
            <div className="pt-6 border-t border-white/[0.06] text-xs font-mono text-[#8b919a] space-y-2">
              <span className="text-[#ea580c] block uppercase">Medisinsk merknad (Oslo, 2026):</span>
              <p className="leading-relaxed">
                Современный анализ подтверждает: синдром отмены густой перетёртой клетчатки хурмы 
                вызывает резкий дофаминовый голод. Лишение чаши провоцировало галлюцинаторное проецирование 
                сексуальных образов на любые бытовые сосуды и проходящих мимо женщин.
              </p>
            </div>
          </div>

          {/* Sensual Art Plate III: Vacuum Blenderus & The Phantom Milkmaid */}
          <div className="lg:col-span-5 space-y-3">
            <div className="nordic-plate p-4 sm:p-5 rounded-none">
              
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="noirBackdrop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a0f12" />
                      <stop offset="60%" stopColor="#0f090b" />
                      <stop offset="100%" stopColor="#070405" />
                    </linearGradient>
                    <radialGradient id="vacuumAura" cx="50%" cy="65%" r="60%">
                      <stop offset="0%" stopColor="#be123c" stopOpacity="0.5" />
                      <stop offset="70%" stopColor="#4c0519" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#070405" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="320" height="400" fill="url(#noirBackdrop)" />
                  <circle cx="160" cy="240" r="130" fill="url(#vacuumAura)" />

                  {/* Empty Vessel Base (Vacuum Blenderus cold basin) */}
                  <ellipse cx="160" cy="300" rx="90" ry="32" fill="#0c0507" stroke="#881337" strokeWidth="2" />
                  <ellipse cx="160" cy="300" rx="70" ry="22" fill="#040203" stroke="#e11d48" strokeWidth="1" strokeDasharray="4 2" />

                  {/* Erotic Phantom of the Milkmaid (Nordic sensual curves rising from empty basin) */}
                  {/* Subtle graceful female silhouette curves */}
                  <path 
                    d="M 120 180 C 105 130 130 90 160 85 C 190 90 215 130 200 180 C 190 210 215 250 205 290 C 195 285 170 295 160 295 C 150 295 125 285 115 290 C 105 250 130 210 120 180 Z" 
                    fill="#3b0f19" 
                    opacity="0.8" 
                    stroke="#be123c" 
                    strokeWidth="1.2" 
                  />

                  {/* Sensual bust and hip curvature highlights */}
                  <path 
                    d="M 135 150 Q 160 170 145 200" 
                    fill="none" 
                    stroke="#f43f5e" 
                    strokeWidth="1.5" 
                    opacity="0.75" 
                  />
                  <path 
                    d="M 185 150 Q 160 170 175 200" 
                    fill="none" 
                    stroke="#f43f5e" 
                    strokeWidth="1.5" 
                    opacity="0.75" 
                  />
                  <path 
                    d="M 140 220 Q 125 250 135 280" 
                    fill="none" 
                    stroke="#ea580c" 
                    strokeWidth="1.5" 
                    opacity="0.8" 
                  />
                  <path 
                    d="M 180 220 Q 195 250 185 280" 
                    fill="none" 
                    stroke="#ea580c" 
                    strokeWidth="1.5" 
                    opacity="0.8" 
                  />

                  {/* Pouring milk stream blending with crimson pulp juice (The "Diabolical Cocktail") */}
                  <path 
                    d="M 160 70 Q 165 140 155 220 Q 150 260 160 300" 
                    fill="none" 
                    stroke="#f8fafc" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    opacity="0.9" 
                  />
                  <path 
                    d="M 163 120 Q 170 190 160 270" 
                    fill="none" 
                    stroke="#fb7185" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    opacity="0.7" 
                  />

                  {/* Drops splashing into the empty cold vessel */}
                  <circle cx="160" cy="300" r="3" fill="#ffffff" />
                  <circle cx="150" cy="303" r="2.5" fill="#e11d48" />
                  <circle cx="170" cy="302" r="2" fill="#ea580c" />

                  {/* Architectural caption inside plate */}
                  <text x="40" y="45" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
                    PLANSJE 03 · VACUUM BLENDERUS
                  </text>
                  <text x="280" y="370" textAnchor="end" fill="#be123c" fontSize="8" fontFamily="monospace">
                    MELKEKVINNEN & BEGJÆRET
                  </text>
                </svg>
              </div>

              <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                <span>{CHAPTER_TWO.figure.captionRu}</span>
                <span>{CHAPTER_TWO.figure.number}</span>
              </div>

            </div>

            {/* Historical Inquest Quote */}
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-[#8b919a] space-y-1">
              <span className="text-[#e11d48] block">Inquisitor Bartholomeus:</span>
              <p className="leading-relaxed">
                «Пот, фруктовые соки и телесные жидкости смешивались в единый дьявольский коктейль... Обычный подойник казался братии вратами сладострастия».
              </p>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
};
