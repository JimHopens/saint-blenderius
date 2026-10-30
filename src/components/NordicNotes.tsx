import React from 'react';

export const NordicNotes: React.FC = () => {
  return (
    <section id="kontekst" className="border-b border-white/[0.08] bg-[#0d0e11] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#ea580c] mb-2">
            <span>03</span>
            <span aria-hidden="true">—</span>
            <span>Historisk og nevrologisk kontekst</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-nordic font-normal text-[#f5f5f7]">
            Архивный контекст и природа явления
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono text-[#8b919a]">
            Три ключевых аспекта феномена, зафиксированные в монастырских записях XIII века
          </p>
        </div>

        {/* 3-Column Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border border-white/[0.06] bg-[#121418] p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ea580c]">
              01 · Ordenen
            </span>
            <h3 className="text-lg font-serif-nordic text-[#f5f5f7]">
              Орден Фрутарианцев (1243 г.)
            </h3>
            <p className="text-sm font-nordic-sans text-[#a2a6af] leading-relaxed">
              Монахи-натурфилософы вели затворнический образ жизни, заменяя молитвы многочасовым 
              растиранием лесных ягод и дикой хурмы в каменных ступках. Этот ритуал стал прототипом 
              современной смузи-культуры за 750 лет до появления электрических измельчителей.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-white/[0.06] bg-[#121418] p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e11d48]">
              02 · Kjemien
            </span>
            <h3 className="text-lg font-serif-nordic text-[#f5f5f7]">
              Танины и Fructus Libido
            </h3>
            <p className="text-sm font-nordic-sans text-[#a2a6af] leading-relaxed">
              Вяжущий эффект незрелой хурмы обусловлен растворимыми танинами, коагулирующими белки слюны. 
              В условиях сенсорной депривации монастыря резкое сжатие вкусовых рецепторов в сочетании 
              с фруктозой вызывало мощный дофаминовый всплеск и сексуальное возбуждение.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-white/[0.06] bg-[#121418] p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d97706]">
              03 · Avgraderingen
            </span>
            <h3 className="text-lg font-serif-nordic text-[#f5f5f7]">
              Рассекречено: Октябрь 2026
            </h3>
            <p className="text-sm font-nordic-sans text-[#a2a6af] leading-relaxed">
              Трактат хранился под грифом церковной тайны более семи столетий из-за откровенных 
              свидетельств плотских фантазий братии. В октябре 2026 года текст был опубликован 
              в первозданном виде для исследователей истории гастрономических пороков.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
