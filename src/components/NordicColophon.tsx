import React from 'react';

export const NordicColophon: React.FC = () => {
  return (
    <footer id="kolofon" className="bg-[#08090b] py-16 sm:py-20 text-xs font-mono text-[#767c85]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Colophon Line */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/[0.06]">
          <div>
            <span className="text-white block uppercase tracking-wider mb-2 font-semibold">
              Dokument
            </span>
            <p className="leading-relaxed">
              Архивы Аббатства Святого Блендерия (1243–2026). Рассекречено в октябре 2026 года.
            </p>
          </div>

          <div>
            <span className="text-white block uppercase tracking-wider mb-2 font-semibold">
              Arkiv & Kilde
            </span>
            <p className="leading-relaxed">
              Sankt Blenderius Klosterarkiv, Seksjon for Naturfilosofi og Manuskripter, Oslo / Bergen.
            </p>
          </div>

          <div>
            <span className="text-white block uppercase tracking-wider mb-2 font-semibold">
              Klassifisering
            </span>
            <p className="leading-relaxed">
              Fructus Libido & Vacuum Blenderus. Tidligere gradert som kjettersk skrift.
            </p>
          </div>

          <div>
            <span className="text-white block uppercase tracking-wider mb-2 font-semibold">
              Typografi & Papir
            </span>
            <p className="leading-relaxed">
              Playfair Display & Plus Jakarta Sans. Digital utgave i henhold til nordisk arkivstandard.
            </p>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-[#a2a6af]">
            «In fructu veritas, in pulpa voluptas, in vacuo furor» — Октябрь 2026
          </div>
          <div className="flex items-center gap-6">
            <a href="#top" className="text-white hover:text-[#ea580c] transition-colors uppercase tracking-wider">
              Til toppen ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
