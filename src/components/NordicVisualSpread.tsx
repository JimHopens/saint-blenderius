import React from 'react';

export const NordicVisualSpread: React.FC = () => {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#090a0c] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Full-bleed Scandinavian Art Panel */}
        <div className="relative border border-white/[0.08] bg-[#101216] p-8 sm:p-16 lg:p-20 overflow-hidden">
          
          {/* Background Duotone Art SVG */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <svg viewBox="0 0 1200 400" className="w-full h-full object-cover">
              <path d="M 0 300 Q 300 100 600 250 T 1200 150 L 1200 400 L 0 400 Z" fill="#881337" />
              <path d="M 0 350 Q 400 200 800 300 T 1200 200 L 1200 400 L 0 400 Z" fill="#ea580c" />
              <circle cx="950" cy="120" r="180" fill="#f97316" opacity="0.3" filter="blur(40px)" />
            </svg>
          </div>

          <div className="relative max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ea580c] block">
              Interludium · Den Mørke Gjæringen
            </span>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif-nordic font-normal text-[#f5f5f7] leading-snug">
              «Смузи, хурма и сексуальные фантазии сливались в единый порочный круг, 
              где потребление напитка становилось триггером для клинического безумия.»
            </blockquote>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#8b919a]">
              <span>Записки монахов ордена Фрутарианцев, 1243 г.</span>
              <span aria-hidden="true">/</span>
              <span>Offentliggjort i Oslo, 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
