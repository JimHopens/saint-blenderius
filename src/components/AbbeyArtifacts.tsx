import React from 'react';
import { Archive, ShieldCheck, Flame } from 'lucide-react';

interface Artifact {
  title: string;
  latinTag: string;
  year: string;
  description: string;
  confiscationReason: string;
}

const ARTIFACTS: Artifact[] = [
  {
    title: 'Каменная Ступка Братства № 7',
    latinTag: 'Mortarium Carnale',
    year: '1243 г.',
    description: 'Массивная гранитная чаша со следами глубокого износа от непрерывного кругового трения. На внутренних стенках обнаружены окаменевшие танины дикой хурмы.',
    confiscationReason: 'Использовалась для круглосуточного приготовления дурманящего смузи.',
  },
  {
    title: 'Свинцовый Флакон «Слеза Фрутарианца»',
    latinTag: 'Extractum Persimmonis',
    year: '1245 г.',
    description: 'Герметичный сосуд с перетёртым концентратом вяжущих плодов. Даже запах паров вызывал у монахов повышенное слюноотделение и эротическое помутнение рассудка.',
    confiscationReason: 'Приравнен к сильнодействующему афродизиаку высшего порядка.',
  },
  {
    title: 'Подойник Доярки Марфы',
    latinTag: 'Vas Mulieris Rusticae',
    year: '1247 г.',
    description: 'Обычное дубовое ведро для молока, превратившееся в предмет массового поклонения обезумевших от синдрома Vacuum Blenderus послушников.',
    confiscationReason: 'Монахи отказывались отдавать ведро, утверждая, что в нём живёт дух плодородия.',
  },
];

export const AbbeyArtifacts: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0a0b] border-b border-[#2d1b1d] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d96b27] uppercase mb-2">
            <Archive className="h-3.5 w-3.5" />
            <span>Спецхран Инквизиции · Вещественные Улики</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#fbf7f2]">
            Реликвии Плодового Безумия
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#a89a8c] font-serif-prose max-w-xl mx-auto italic">
            Вещи и сосуды, изъятые инквизицией в кельях Аббатства после разоблачения тайной секты любителей хурмового смузи.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTIFACTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#3b1c22] bg-[#140b0e] p-6 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#d4af37] mb-2">
                  <span>{item.latinTag}</span>
                  <span className="text-[#8f7e71]">{item.year}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-[#fbf7f2] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#cdc1b4] font-serif-prose leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="rounded border border-[#4a1c24] bg-[#1d0b10] p-3 text-xs text-[#fecdd3]">
                <div className="flex items-center gap-1.5 font-bold text-[#f43f5e] mb-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Причина изъятия:</span>
                </div>
                {item.confiscationReason}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
