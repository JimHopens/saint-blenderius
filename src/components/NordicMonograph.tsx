import React from 'react';
import { CHAPTERS_DATA, INQUISITION_TABLE } from '../utils/treatiseData';

export const NordicMonograph: React.FC = () => {
  const [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8] = CHAPTERS_DATA;

  return (
    <div className="bg-[#0b0c0e] text-[#d8dadf]">
      
      {/* ========================================================
          DEL I: FRUKTENS RUS & ABSTINENS (KAPITTEL 1 & 2)
          ======================================================== */}
      
      {/* CHAPTER 1 */}
      <article id="kapittel-1" className="border-b border-white/[0.08] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#ea580c] mb-2">
              <span>Kapittel 01</span>
              <span aria-hidden="true">—</span>
              <span>{ch1.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 1. {ch1.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch1.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#ea580c] first-letter:mr-4 first-letter:leading-none">
                {ch1.content[0]}
              </p>
              <p>{ch1.content[1]}</p>

              <div className="my-8 py-6 border-y border-white/[0.08] text-[#f5f5f7]">
                <p className="text-lg sm:text-xl font-serif-nordic italic leading-relaxed text-[#fef2f2]">
                  {ch1.keyQuote}
                </p>
                <span className="block mt-3 text-xs font-mono uppercase tracking-wider text-[#8b919a]">
                  — {ch1.quoteAuthor}
                </span>
              </div>

              <p>{ch1.content[2]}</p>
            </div>

            {/* Sensual Art Plate I */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#181a1f" />
                        <stop offset="100%" stopColor="#0b0c0e" />
                      </linearGradient>
                      <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#881337" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="320" height="400" fill="url(#bg1)" />
                    <circle cx="160" cy="200" r="140" fill="url(#glow1)" />
                    
                    {/* Sliced ripe persimmon with carnal flesh curves */}
                    <path d="M 90 170 C 80 100 240 100 230 170 C 220 250 160 280 160 280 C 160 280 100 250 90 170 Z" fill="#9f1239" stroke="#ea580c" strokeWidth="2" />
                    <path d="M 160 140 C 145 160 145 200 160 220 C 175 200 175 160 160 140 Z" fill="#4c0519" stroke="#fb923c" strokeWidth="1.5" />
                    <circle cx="160" cy="295" r="4" fill="#fb923c" />
                    <circle cx="160" cy="315" r="3" fill="#ea580c" />
                    <circle cx="160" cy="330" r="2" fill="#f97316" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
                      PLANSJE 01 · FRUCTUS LIBIDO
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#ea580c" fontSize="8.5" fontFamily="monospace">
                      1243 · OSLO
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 01 — Дикая хурма и вскрытые плоти ягод</span>
                  <span>Fig. 01</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CHAPTER 2 */}
      <article id="kapittel-2" className="border-b border-white/[0.08] py-20 sm:py-28 bg-[#0d0e11]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#e11d48] mb-2">
              <span>Kapittel 02</span>
              <span aria-hidden="true">—</span>
              <span>{ch2.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 2. {ch2.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch2.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#e11d48] first-letter:mr-4 first-letter:leading-none">
                {ch2.content[0]}
              </p>
              <p>{ch2.content[1]}</p>

              <div className="my-8 py-8 px-6 bg-[#140b0e] border-l-2 border-[#e11d48] text-[#f5f5f7]">
                <p className="text-xl sm:text-2xl font-serif-nordic italic leading-relaxed text-[#fff1f2]">
                  {ch2.keyQuote}
                </p>
                <span className="block mt-4 text-xs font-mono uppercase tracking-wider text-[#a89a8c]">
                  — {ch2.quoteAuthor}
                </span>
              </div>

              <p>{ch2.content[2]}</p>
            </div>

            {/* Sensual Art Plate II: Milkmaid & Vacuum Blenderus */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="vortex2" cx="50%" cy="65%" r="60%">
                        <stop offset="0%" stopColor="#be123c" stopOpacity="0.6" />
                        <stop offset="80%" stopColor="#070405" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="320" height="400" fill="#0c0709" />
                    <circle cx="160" cy="240" r="140" fill="url(#vortex2)" />
                    
                    {/* Empty cold basin */}
                    <ellipse cx="160" cy="300" rx="90" ry="32" fill="#040203" stroke="#881337" strokeWidth="2" />
                    <ellipse cx="160" cy="300" rx="70" ry="22" fill="#000000" stroke="#e11d48" strokeWidth="1" strokeDasharray="4 2" />

                    {/* Phantom milkmaid silhouette curves */}
                    <path d="M 120 180 C 105 130 130 90 160 85 C 190 90 215 130 200 180 C 190 210 215 250 205 290 C 195 285 170 295 160 295 C 150 295 125 285 115 290 C 105 250 130 210 120 180 Z" fill="#3b0f19" opacity="0.85" stroke="#be123c" strokeWidth="1.2" />
                    
                    {/* Pouring milk stream mixing with dark fruit juices */}
                    <path d="M 160 70 Q 165 140 155 220 Q 150 260 160 300" fill="none" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
                    <path d="M 163 120 Q 170 190 160 270" fill="none" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
                      PLANSJE 02 · VACUUM BLENDERUS
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#be123c" fontSize="8.5" fontFamily="monospace">
                      MELKEKVINNEN
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 02 — Фантом доярки и дьявольский коктейль</span>
                  <span>Fig. 02</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* ========================================================
          DEL II: RITUALENE & KJØDETS SMERTE (KAPITTEL 3 & 4)
          ======================================================== */}

      {/* CHAPTER 3 */}
      <article id="kapittel-3" className="border-b border-white/[0.08] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#d97706] mb-2">
              <span>Kapittel 03</span>
              <span aria-hidden="true">—</span>
              <span>{ch3.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 3. {ch3.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch3.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#d97706] first-letter:mr-4 first-letter:leading-none">
                {ch3.content[0]}
              </p>
              <p>{ch3.content[1]}</p>

              <div className="my-8 py-6 border-y border-white/[0.08] text-[#f5f5f7]">
                <p className="text-lg sm:text-xl font-serif-nordic italic leading-relaxed text-[#fef2f2]">
                  {ch3.keyQuote}
                </p>
                <span className="block mt-3 text-xs font-mono uppercase tracking-wider text-[#8b919a]">
                  — {ch3.quoteAuthor}
                </span>
              </div>

              <p>{ch3.content[2]}</p>
            </div>

            {/* Sensual Art Plate III: Manus Agitatoris & Millstone Friction */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="320" height="400" fill="#110d0f" />
                    <circle cx="160" cy="200" r="120" fill="none" stroke="#881337" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Vertical shaft and rhythmic churning hand arcs (Manus Agitatoris) */}
                    <rect x="150" y="70" width="20" height="260" rx="10" fill="#2d151c" stroke="#ea580c" strokeWidth="1.5" />
                    <ellipse cx="160" cy="80" rx="16" ry="10" fill="#881337" />
                    
                    {/* Rhythmic friction lines radiating outward */}
                    <path d="M 120 180 Q 140 190 120 200" stroke="#f43f5e" strokeWidth="2" fill="none" />
                    <path d="M 200 180 Q 180 190 200 200" stroke="#f43f5e" strokeWidth="2" fill="none" />
                    <path d="M 110 220 Q 135 230 110 240" stroke="#d97706" strokeWidth="2" fill="none" />
                    <path d="M 210 220 Q 185 230 210 240" stroke="#d97706" strokeWidth="2" fill="none" />

                    {/* Droplets of extracted nectar */}
                    <circle cx="160" cy="60" r="3.5" fill="#facc15" />
                    <circle cx="160" cy="45" r="2.5" fill="#ea580c" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
                      PLANSJE 03
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#d97706" fontSize="8.5" fontFamily="monospace">
                      MANUS AGITATORIS
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 03 — Длань-взбиватель и мельничный ритуал</span>
                  <span>Fig. 03</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CHAPTER 4 */}
      <article id="kapittel-4" className="border-b border-white/[0.08] py-20 sm:py-28 bg-[#0d0e11]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#f43f5e] mb-2">
              <span>Kapittel 04</span>
              <span aria-hidden="true">—</span>
              <span>{ch4.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 4. {ch4.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch4.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#f43f5e] first-letter:mr-4 first-letter:leading-none">
                {ch4.content[0]}
              </p>
              <p>{ch4.content[1]}</p>

              <div className="my-8 py-8 px-6 bg-[#1a0c10] border-l-2 border-[#f43f5e] text-[#f5f5f7]">
                <p className="text-xl sm:text-2xl font-serif-nordic italic leading-relaxed text-[#ffe4e6]">
                  {ch4.keyQuote}
                </p>
                <span className="block mt-4 text-xs font-mono uppercase tracking-wider text-[#a89a8c]">
                  — {ch4.quoteAuthor}
                </span>
              </div>

              <p>{ch4.content[2]}</p>
            </div>

            {/* Sensual Art Plate IV: Sacred Vessel of Mango Puree */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="320" height="400" fill="#13080b" />
                    
                    {/* The Sacred Vessel (Curvature of the chalice / female pelvis) */}
                    <path d="M 80 120 Q 160 80 240 120 Q 230 240 160 270 Q 90 240 80 120 Z" fill="#2d0a14" stroke="#f43f5e" strokeWidth="2" />
                    
                    {/* Lingua Piscatoris (Tongue exploring the depth like weaving fishing nets) */}
                    <path d="M 160 160 Q 140 210 160 260 Q 180 210 160 160 Z" fill="#e11d48" opacity="0.9" stroke="#fb7185" strokeWidth="1.5" />
                    
                    {/* Rich golden mango puree coating the base */}
                    <ellipse cx="160" cy="245" rx="35" ry="12" fill="#d97706" opacity="0.85" />
                    <ellipse cx="160" cy="248" rx="22" ry="7" fill="#facc15" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
                      PLANSJE 04 · CULTUS VULVAE
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#f43f5e" fontSize="8.5" fontFamily="monospace">
                      VAS SACRUM
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 04 — Священный сосуд и оральная фиксация</span>
                  <span>Fig. 04</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* ========================================================
          DEL III: DET MØRKESTE TABU (KAPITTEL 5 & 6)
          ======================================================== */}

      {/* CHAPTER 5 */}
      <article id="kapittel-5" className="border-b border-white/[0.08] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#ea580c] mb-2">
              <span>Kapittel 05</span>
              <span aria-hidden="true">—</span>
              <span>{ch5.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 5. {ch5.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch5.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#ea580c] first-letter:mr-4 first-letter:leading-none">
                {ch5.content[0]}
              </p>
              <p>{ch5.content[1]}</p>

              <div className="my-8 py-6 border-y border-white/[0.08] text-[#f5f5f7]">
                <p className="text-lg sm:text-xl font-serif-nordic italic leading-relaxed text-[#fef2f2]">
                  {ch5.keyQuote}
                </p>
                <span className="block mt-3 text-xs font-mono uppercase tracking-wider text-[#8b919a]">
                  — {ch5.quoteAuthor}
                </span>
              </div>

              <p>{ch5.content[2]}</p>
            </div>

            {/* Sensual Art Plate V: Thesaurus Analis & Subterranean Tree */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="320" height="400" fill="#0d090b" />
                    
                    {/* Subterranean chamber / pelvis darkness */}
                    <circle cx="160" cy="220" r="110" fill="#1e0b12" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 2" />
                    
                    {/* The hidden persimmon seed in warm darkness */}
                    <ellipse cx="160" cy="220" rx="30" ry="48" fill="#78350f" stroke="#ea580c" strokeWidth="2" />
                    <ellipse cx="160" cy="220" rx="14" ry="28" fill="#d97706" />

                    {/* Sprouting roots of the Tree of Knowledge extending downwards */}
                    <path d="M 160 268 Q 130 310 110 350" stroke="#f97316" strokeWidth="1.5" fill="none" />
                    <path d="M 160 268 Q 170 315 190 360" stroke="#f97316" strokeWidth="1.5" fill="none" />
                    <path d="M 160 268 Q 150 320 150 370" stroke="#f97316" strokeWidth="1.2" fill="none" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
                      PLANSJE 05
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#ea580c" fontSize="8.5" fontFamily="monospace">
                      THESAURUS ANALIS
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 05 — Хурмовая копилка и семя Древа Познания</span>
                  <span>Fig. 05</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CHAPTER 6 */}
      <article id="kapittel-6" className="border-b border-white/[0.08] py-20 sm:py-28 bg-[#0d0e11]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#be123c] mb-2">
              <span>Kapittel 06</span>
              <span aria-hidden="true">—</span>
              <span>{ch6.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 6. {ch6.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch6.titleNo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-serif-nordic first-letter:text-[#be123c] first-letter:mr-4 first-letter:leading-none">
                {ch6.content[0]}
              </p>
              <p>{ch6.content[1]}</p>

              <div className="my-8 py-8 px-6 bg-[#16080d] border-l-2 border-[#be123c] text-[#f5f5f7]">
                <p className="text-xl sm:text-2xl font-serif-nordic italic leading-relaxed text-[#ffe4e6]">
                  {ch6.keyQuote}
                </p>
                <span className="block mt-4 text-xs font-mono uppercase tracking-wider text-[#a89a8c]">
                  — {ch6.quoteAuthor}
                </span>
              </div>

              <p>{ch6.content[2]}</p>
            </div>

            {/* Sensual Art Plate VI: Mechanical Pressure & Blacksmith Hammers */}
            <div className="lg:col-span-5 space-y-3">
              <div className="nordic-plate p-4 sm:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#121418] border border-white/[0.06] flex items-center justify-center">
                  <svg viewBox="0 0 320 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <rect width="320" height="400" fill="#0c0709" />
                    
                    {/* The Monastic Pillar / Mechanical Pestle / Blacksmith Hammer */}
                    <line x1="160" y1="40" x2="160" y2="340" stroke="#be123c" strokeWidth="4" strokeLinecap="round" />
                    <rect x="135" y="80" width="50" height="70" fill="#3b0f19" stroke="#ea580c" strokeWidth="1.5" />
                    
                    {/* Shockwaves of crushing friction grinding seeds into puree */}
                    <ellipse cx="160" cy="280" rx="70" ry="25" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
                    <ellipse cx="160" cy="300" rx="90" ry="32" fill="none" stroke="#ea580c" strokeWidth="1.2" strokeDasharray="4 2" />
                    
                    <circle cx="140" cy="275" r="4" fill="#fb7185" />
                    <circle cx="180" cy="275" r="4" fill="#fb7185" />
                    <circle cx="160" cy="310" r="3" fill="#ea580c" />

                    <text x="35" y="45" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.15em">
                      PLANSJE 06 · MALLEUS FABRORUM
                    </text>
                    <text x="285" y="45" textAnchor="end" fill="#be123c" fontSize="8.5" fontFamily="monospace">
                      KLOSTERSTOLPEN
                    </text>
                  </svg>
                </div>
                <div className="mt-3 flex items-baseline justify-between text-[11px] font-mono text-[#8b919a]">
                  <span>Planche 06 — Молот кузнеца и механическое давление</span>
                  <span>Fig. 06</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* ========================================================
          DEL IV: INNKVISISJON & DOM (KAPITTEL 7 & 8)
          ======================================================== */}

      {/* CHAPTER 7: INDEX PERVERSIONIS FRUCTUOSAE TABLE */}
      <article id="kapittel-7" className="border-b border-white/[0.08] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#ea580c] mb-2">
              <span>Kapittel 07 · Anno 1380</span>
              <span aria-hidden="true">—</span>
              <span>{ch7.latinSubtitle}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
              Глава 7. {ch7.titleRu}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
              {ch7.titleNo}
            </p>
          </div>

          <div className="max-w-4xl space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85] mb-12">
            <p>{ch7.content[0]}</p>
            <p>{ch7.content[1]}</p>
          </div>

          {/* Museum-Grade Scandinavian Table */}
          <div className="max-w-4xl overflow-hidden border border-white/[0.1] bg-[#121418]">
            <div className="p-4 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#ea580c] block">
                  Innkvisisjonens Tabell · 1380
                </span>
                <h3 className="text-lg font-serif-nordic text-[#f5f5f7]">
                  Index Perversionis Fructuosae (Шкала фруктового извращения)
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8b919a] hidden sm:inline">
                Sankt Blenderius Arkiv
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02] text-[#8b919a] font-mono uppercase tracking-wider">
                    <th scope="col" className="py-4 px-6 font-semibold">Симптом / Поведение</th>
                    <th scope="col" className="py-4 px-6 font-semibold whitespace-nowrap text-right">Баллы</th>
                    <th scope="col" className="py-4 px-6 font-semibold">Клиническое значение</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] font-nordic-sans text-[#dedede]">
                  {INQUISITION_TABLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-medium text-[#f5f5f7]">
                        {row.symptom}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-right tabular-nums text-[#ea580c]">
                        {row.points}
                      </td>
                      <td className="py-4 px-6 text-[#a2a6af]">
                        {row.clinicalMeaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] text-xs font-mono text-[#8b919a]">
              * Категория 100 баллов влечет немедленную изоляцию в хранилище перезрелых плодов.
            </div>
          </div>

        </div>
      </article>

      {/* CHAPTER 8: FINAL VERDICT AND INITIATION */}
      <article id="kapittel-8" className="py-24 sm:py-32 bg-[#090a0c]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="border border-white/[0.1] bg-[#121418] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
            
            {/* Background Seal Emblem Watermark */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-10">
              <svg viewBox="0 0 200 200" className="w-96 h-96 -mr-20 -mt-20 text-[#ea580c]">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" />
                <path d="M 60 140 Q 100 170 140 140 L 130 90 Q 100 100 70 90 Z" fill="currentColor" />
              </svg>
            </div>

            <div className="relative space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#ea580c] block mb-2">
                  Kapittel 08 · {ch8.latinSubtitle}
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-nordic font-normal text-[#f5f5f7]">
                  Глава 8. {ch8.titleRu}
                </h2>
                <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a] italic">
                  {ch8.titleNo}
                </p>
              </div>

              <div className="space-y-6 text-[#d8dadf] font-nordic-sans text-base sm:text-lg leading-[1.85]">
                <p>{ch8.content[0]}</p>
                <p>{ch8.content[1]}</p>
              </div>

              {/* Ceremonial Induction Decree Box */}
              <div className="border border-[#ea580c]/50 bg-gradient-to-r from-[#200e12] via-[#160c10] to-[#200e12] p-6 sm:p-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#facc15] block">
                  Høytidelig Utnvnelse · Окончательный Вердикт Конклава
                </span>

                <h3 className="text-xl sm:text-3xl font-serif-nordic font-bold text-[#fff1f2]">
                  Великий магистр Ордена Спелой Хурмы
                </h3>

                <p className="text-base sm:text-lg font-serif-nordic italic text-[#fecdd3] leading-relaxed">
                  {ch8.content[2]}
                </p>

                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8b919a]">
                  <span>Решение консилиума древних алхимиков и исследователей 2026 г.</span>
                  <span className="text-[#ea580c]">Sigillum Ordinis Diospyri</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </article>

    </div>
  );
};
