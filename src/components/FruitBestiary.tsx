import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface FruitBestiaryProps {
  onQuickGrind: () => void;
}

interface ForbiddenFruit {
  id: string;
  latinName: string;
  russianName: string;
  sinLevel: string;
  tanninFactor: string;
  effectOnMonk: string;
  quote: string;
  svgIcon: React.ReactNode;
}

const FRUITS: ForbiddenFruit[] = [
  {
    id: 'persimmon',
    latinName: 'Diospyros Libidinosa',
    russianName: 'Дикая Хурма Страсти',
    sinLevel: 'Предельный (Анафема)',
    tanninFactor: '99% Вяжущей смолы',
    effectOnMonk: 'Стягивает полость рта в судороге наслаждения, вызывая непреодолимое желание соития с доярками и перетирания волокон.',
    quote: '«Один укус — и взор затуманился, а руки сами потянулись к тяжелому пестику...»',
    svgIcon: (
      <svg viewBox="0 0 80 80" className="h-16 w-16 text-[#d96b27]">
        <circle cx="40" cy="45" r="26" fill="#831828" stroke="#d96b27" strokeWidth="2" />
        <path d="M 32 24 C 36 16 44 16 48 24 C 54 26 55 32 50 35 C 45 37 35 37 30 35 C 25 32 26 26 32 24 Z" fill="#15803d" stroke="#4ade80" strokeWidth="1" />
        <ellipse cx="40" cy="46" rx="10" ry="16" fill="#d96b27" opacity="0.8" />
        <circle cx="40" cy="72" r="3" fill="#ea580c" />
      </svg>
    ),
  },
  {
    id: 'fig',
    latinName: 'Ficus Carnalis',
    russianName: 'Искусительный Инжир',
    sinLevel: 'Тяжкий (Блуд)',
    tanninFactor: '82% Медовой густоты',
    effectOnMonk: 'Истекает густым млечным соком. Братья-фрутарианцы считали его анатомическим отражением женского естества.',
    quote: '«Мякоть его податлива и влажна, словно греховные ласки в полуденный зной...»',
    svgIcon: (
      <svg viewBox="0 0 80 80" className="h-16 w-16 text-[#e11d48]">
        <path d="M 40 20 C 50 20 62 35 60 55 C 58 70 40 75 40 75 C 40 75 22 70 20 55 C 18 35 30 20 40 20 Z" fill="#3b0f19" stroke="#be123c" strokeWidth="2" />
        <path d="M 40 35 Q 48 50 40 65 Q 32 50 40 35 Z" fill="#d4af37" opacity="0.75" />
        <line x1="40" y1="12" x2="40" y2="20" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'pomegranate',
    latinName: 'Punica Diabolica',
    russianName: 'Рубиновый Гранат',
    sinLevel: 'Опасный (Искушение)',
    tanninFactor: '64% Кислой пены',
    effectOnMonk: 'Сотни мелких семян под пестиком лопаются с влажным хрустом, напоминая шепот дьяволиц на ухо.',
    quote: '«Кровавые брызги окропляют рясу, пробуждая первобытный звериный инстинкт...»',
    svgIcon: (
      <svg viewBox="0 0 80 80" className="h-16 w-16 text-[#f43f5e]">
        <circle cx="40" cy="46" r="25" fill="#4a0f1d" stroke="#f43f5e" strokeWidth="2" />
        <path d="M 34 22 L 40 14 L 46 22 L 52 14 L 48 24 L 32 24 Z" fill="#9f1239" stroke="#d4af37" strokeWidth="1" />
        <circle cx="34" cy="44" r="3.5" fill="#e11d48" />
        <circle cx="44" cy="40" r="4" fill="#fb7185" />
        <circle cx="42" cy="52" r="3.5" fill="#e11d48" />
      </svg>
    ),
  },
  {
    id: 'ginger',
    latinName: 'Zingiber Fervens',
    russianName: 'Жгучий Корень Блуда',
    sinLevel: 'Разжигающий (Лихорадка)',
    tanninFactor: '45% Острой желчи',
    effectOnMonk: 'Разгоняет кровь в тазовой области, заставляя монаха срывать власяницу и бежать в сторону коровника.',
    quote: '«Огонь в чреслах не угасал ни от ледяной воды, ни от семичасовых коленопреклонений...»',
    svgIcon: (
      <svg viewBox="0 0 80 80" className="h-16 w-16 text-[#ca8a04]">
        <path d="M 25 35 C 30 25 45 30 50 25 C 55 20 65 30 60 40 C 55 50 65 60 55 65 C 45 70 35 55 30 65 C 20 60 20 45 25 35 Z" fill="#2d1c0b" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="38" cy="42" r="2" fill="#facc15" />
        <circle cx="48" cy="50" r="2" fill="#facc15" />
      </svg>
    ),
  },
];

export const FruitBestiary: React.FC<FruitBestiaryProps> = ({ onQuickGrind }) => {
  return (
    <section id="bestiary" className="py-20 bg-[#0a0708] border-b border-[#2d1b1d] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4af37] uppercase mb-2">
            <Compass className="h-3.5 w-3.5 text-[#d96b27]" />
            <span>Гербарий Грехопадения · 1243 г.</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#fbf7f2]">
            Бестиарий Сладострастных Плодов
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#a89a8c] font-serif-prose max-w-xl mx-auto italic">
            Четыре запретных ингредиента, из-за которых в Аббатстве Святого Блендерия 
            были опечатаны все фруктовые погреба и запрещены каменные измельчители.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FRUITS.map(fruit => (
            <div
              key={fruit.id}
              className="group rounded-xl border border-[#3b1c22] bg-[#140b0e] p-6 shadow-xl hover:border-[#6b222f] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
                      {fruit.latinName}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#fbf7f2] mt-0.5">
                      {fruit.russianName}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-lg border border-[#4a1c24] bg-[#1d0b10] p-2">
                    {fruit.svgIcon}
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#cdc1b4] font-serif-prose leading-relaxed">
                  <p>{fruit.effectOnMonk}</p>

                  <div className="rounded border border-[#3a161d] bg-[#1b0a0e] p-3 text-xs italic text-[#f4ece1]">
                    {fruit.quote}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2d1419] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#8f7e71]">Уровень греха: </span>
                  <span className="text-[#e11d48] font-bold">{fruit.sinLevel}</span>
                </div>
                <button
                  type="button"
                  onClick={onQuickGrind}
                  className="text-xs font-medium text-[#d4af37] hover:text-[#fde047] transition-colors"
                >
                  Перетереть в ступке →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
