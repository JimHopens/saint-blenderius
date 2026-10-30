import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#2d1b1d] bg-[#080506] py-14 text-xs text-[#8f7e71]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1f0e12]">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[#831828]/50 bg-[#16080b] font-serif text-[#d4af37]">
              ✠
            </span>
            <div>
              <div className="font-display font-bold text-sm text-[#f5eee6]">
                Abbatia Sancti Blenderii
              </div>
              <div className="text-[11px] text-[#716053]">
                Секретный Архив Братьев-Фрутарианцев (1243–2026)
              </div>
            </div>
          </div>

          <div className="text-center md:text-right font-serif-prose italic text-sm text-[#d4af37]/80">
            «In fructu veritas, in pulpa voluptas, in vacuo furor»
            <span className="block text-[11px] text-[#716053] font-mono not-italic mt-0.5">
              В плодах — истина, в мякоти — сладострастие, в пустой чаше — безумие
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6d5d51]">
          <p>
            Рассекречено Конклавом Натурфилософов в октябре 2026 года. Все совпадения с реальными доярками случайны.
          </p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-[#d4af37] transition-colors">
              К началу свитка ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
