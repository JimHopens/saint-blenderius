import React from 'react';
import { CHAPTER_ONE } from '../utils/treatiseData';

export const NordicChapterOne: React.FC = () => {
  return (
    <article id="hypotesen" className="border-b border-white/[0.08] bg-[#0d0e11] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header Deck */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#ea580c] mb-2">
            <span>01</span>
            <span aria-hidden="true">—</span>
            <span>{CHAPTER_ONE.classification}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
            {CHAPTER_ONE.titleRu}
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
            {CHAPTER_ONE.titleNo}
          </p>
        </div>

        {/* 2-Column Asymmetric Grid: Text & Art Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Reading Column (Verbatim Chapter 1) */}
          <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
            <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#ea580c] first-letter:mr-4 first-letter:leading-none">
              {CHAPTER_ONE.content[0]}
            </p>

            <p>
              {CHAPTER_ONE.content[1]}
            </p>

            {/* Stark Nordic Pull Quote */}
            <div className="my-8 py-6 border-y border-white/[0.08] text-[#f5f5f7]">
              <p className="text-lg sm:text-xl font-serif-nordic italic leading-relaxed text-[#fef2f2]">
                {CHAPTER_ONE.keyQuote}
              </p>
              <span className="block mt-3 text-xs font-mono uppercase tracking-wider text-[#8b919a]">
                — {CHAPTER_ONE.quoteAuthor}
              </span>
            </div>

            <p>
              {CHAPTER_ONE.content[2]}
            </p>
          </div>

          {/* Sensual Art Plate II: The Erotic Fibers of Lust */}
          <div className="lg:col-span-5 space-y-3">
            <div className="nordic-plate p-4 sm:p-5 rounded-none">
              
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="fiberBackdrop" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#181a1f" />
                      <stop offset="100%" stopColor="#0b0c0e" />
                    </linearGradient>
                    <radialGradient id="tanninCore" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.7" />
                      <stop offset="70%" stopColor="#881337" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect width="320" height="400" fill="url(#fiberBackdrop)" />
                  <circle cx="160" cy="200" r="140" fill="url(#tanninCore)" />

                  {/* Intertwined sensual botanical curves and fluid dripping pulp */}
                  {/* Organic sensual lines resembling human curvature and fruit flesh */}
                  <path 
                    d="M 100 80 Q 200 120 160 220 Q 120 320 220 340" 
                    fill="none" 
                    stroke="#ea580c" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 120 90 Q 220 130 180 230 Q 140 330 240 350" 
                    fill="none" 
                    stroke="#881337" 
                    strokeWidth="1.5" 
                  />
                  <path 
                    d="M 80 140 Q 150 180 140 260 Q 130 340 180 360" 
                    fill="none" 
                    stroke="#fb923c" 
                    strokeWidth="1.2" 
                    strokeDasharray="4 2" 
                  />

                  {/* Crushed persimmon pulp mass / abstract sensuality */}
                  <ellipse cx="160" cy="210" rx="45" ry="60" fill="#9f1239" opacity="0.6" />
                  <ellipse cx="165" cy="215" rx="30" ry="40" fill="#ea580c" opacity="0.8" />
                  <circle cx="170" cy="210" r="14" fill="#fb923c" />

                  {/* Dripping nectar dots down the stem */}
                  <circle cx="165" cy="285" r="4" fill="#fb923c" />
                  <circle cx="170" cy="310" r="3" fill="#ea580c" />
                  <circle cx="178" cy="335" r="2.5" fill="#f97316" />

                  {/* Micro label */}
                  <text x="40" y="45" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
                    PLANSJE 02 · FRUCTUS LIBIDO
                  </text>
                  <text x="280" y="370" textAnchor="end" fill="#8b919a" fontSize="8" fontFamily="monospace">
                    BERGEN KLOSTERARKIV · 1243
                  </text>
                </svg>
              </div>

              <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                <span>{CHAPTER_ONE.figure.captionRu}</span>
                <span>{CHAPTER_ONE.figure.number}</span>
              </div>

            </div>

            {/* Curatorial Annotation */}
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-[#8b919a] space-y-1">
              <span className="text-[#ea580c] block">Munkedokument 1243:</span>
              <p className="leading-relaxed">
                Танины хурмы и перетёртая клетчатка активировали в мужском организме гиперфиксацию на соках, стирая грань между утолением голода и эротическим безумием.
              </p>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
};
