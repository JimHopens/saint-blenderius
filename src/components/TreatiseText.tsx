import React, { useState } from 'react';
import { Volume2, VolumeX, Eye, BookOpen, Quote, ShieldAlert } from 'lucide-react';

export const TreatiseText: React.FC = () => {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [isReadingAloud, setIsReadingAloud] = useState(false);

  // Web Speech API for reading the erotic medieval treatise with a solemn monastic voice
  const handleReadAloud = (textToRead: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.88; // Slow, solemn medieval pace
    utterance.pitch = 0.85; // Deep ecclesiastical timbre

    utterance.onend = () => setIsReadingAloud(false);
    utterance.onerror = () => setIsReadingAloud(false);

    window.speechSynthesis.speak(utterance);
    setIsReadingAloud(true);
  };

  const chapter1FullText = `Глава 1. Происхождение древней хурмовой гипотезы. В 1243 году, задолго до изобретения электрических измельчителей, монахи-натурфилософы ордена Фрутарианцев обратили внимание на странную категорию мужчин. Эти одержимые часами перетирали ягоды и коренья в каменных ступках, чтобы получить густую жижу, попутно поглощая невероятные объемы дикой хурмы. Алхимики назвали этот недуг Fructus Libido — Плодовая похоть. Вымышленная гипотеза того времени гласила: комбинация перетёртой клетчатки и вяжущих танинов вызывает в мужском мозгу необратимые алхимические реакции. Смузи, хурма и сексуальные фантазии сливались в единый порочный круг, где потребление напитка становилось триггером для формирования в сознании пациента совершенно абсурдных, навязчивых эротических образов, граничащих с клиническим безумием.`;

  const chapter2FullText = `Глава 2. Синдром пустого блендера и усиление сексуальных фантазий. Главным симптомом этой древней хурмовой чумы являлась невозможность прожить без смузи ни дня. Как только субъект лишался доступа к своему густому фруктовому зелью, наступал Vacuum Blenderus — Ужас пустой чаши. В трактатах описывается, что в этот период абстиненции в голове больного начиналось неконтролируемое брожение мыслей. Обычные предметы обихода начинали казаться ему эротическими объектами, а непристойные размышления о женщинах принимали маниакальный характер. Пациент представлял себе соитие с каждой встречной дояркой, наделяя процесс гиперболизированными, почти звериными чертами, где пот, фруктовые соки и телесные жидкости смешивались в единый дьявольский коктейль.`;

  return (
    <section id="treatise" className="relative py-20 bg-[#0e0a0b] text-[#e6ded5] border-b border-[#2d1b1d]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d96b27] uppercase mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Манускрипт № Codex-1243-FL · Канонический свиток</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#f7f2ea]">
            Свиток Прегрешений Ордена Фрутарианцев
          </h2>
          <p className="mt-2 text-sm text-[#a89a8c] font-serif-prose italic">
            Текст воспроизведён с сохранением стилистики тайных дознаний и натурфилософских свидетельств XIII века
          </p>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => handleReadAloud(`${chapter1FullText} ${chapter2FullText}`)}
              className="inline-flex items-center gap-2 rounded border border-[#5a222c] bg-[#1a0e11] px-4 py-2 text-xs font-medium text-[#f3e8e2] hover:border-[#831828] hover:text-[#d4af37] transition-colors"
            >
              {isReadingAloud ? (
                <>
                  <VolumeX className="h-4 w-4 text-[#e11d48]" />
                  <span>Прервать чтение архивариуса</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 text-[#d96b27]" />
                  <span>Огласить трактат голосом архивариуса (Аудио)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================= CHAPTER 1 ================= */}
        <article className="relative mb-16 rounded-xl border border-[#3b1d22] bg-[#140b0e] p-6 sm:p-10 shadow-2xl">
          {/* Chapter header ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2d171b] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block mb-1">
                Capitulum Primum · Год 1243 от Р.Х.
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#fbf7f2]">
                Глава 1. Происхождение древней хурмовой гипотезы
              </h3>
            </div>
            
            <span className="text-xs font-mono text-[#a89a8c]">
              Патология: <span className="text-[#d96b27] font-semibold">Fructus Libido</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main manuscript prose */}
            <div className="lg:col-span-8 space-y-6 text-[#ded2c4] font-serif-prose text-lg sm:text-xl leading-relaxed">
              <p>
                <span className="float-left mr-3 mt-1 text-5xl sm:text-6xl font-display font-bold text-[#d96b27] leading-none border-b-2 border-[#831828]">
                  В
                </span>
                1243 году, задолго до изобретения электрических измельчителей, монахи-натурфилософы 
                ордена Фрутарианцев обратили внимание на странную категорию мужчин. Эти одержимые 
                часами перетирали ягоды и коренья в каменных ступках, чтобы получить густую жижу, 
                попутно поглощая невероятные объемы дикой хурмы.
              </p>

              <p>
                Алхимики назвали этот недуг{' '}
                <button
                  type="button"
                  onClick={() => setActiveNote(activeNote === 'libido' ? null : 'libido')}
                  className="font-bold text-[#e11d48] underline decoration-[#831828] decoration-2 underline-offset-4 hover:text-[#fb7185] transition-colors cursor-pointer"
                  title="Нажмите, чтобы прочесть примечание инквизиции"
                >
                  Fructus Libido
                </button>{' '}
                (Плодовая похоть). Вымышленная гипотеза того времени гласила: комбинация перетёртой 
                клетчатки и вяжущих танинов вызывает в мужском мозгу необратимые алхимические реакции.
              </p>

              <div className="my-6 rounded border border-[#4d1f27] bg-[#1b0b10] p-5 shadow-inner">
                <Quote className="h-6 w-6 text-[#d4af37]/60 mb-2" />
                <p className="text-base sm:text-lg italic text-[#f4ece1] leading-relaxed">
                  «Смузи, хурма и сексуальные фантазии сливались в единый порочный круг, где 
                  потребление напитка становилось триггером для формирования в сознании пациента 
                  совершенно абсурдных, навязчивых эротических образов, граничащих с клиническим безумием.»
                </p>
                <div className="mt-3 text-right text-xs tracking-wider text-[#a89988] font-mono">
                  — Записи брата Цельсия, лекаря Аббатства
                </div>
              </div>
            </div>

            {/* Sensual Scholastic Sidebar / Woodcut Illustration */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-lg border border-[#3d1e23] bg-[#1a0e12] p-4 text-xs">
                {/* SVG Woodcut: Persimmon Anatomy of Lust */}
                <div className="mb-3 overflow-hidden rounded border border-[#54212a] bg-[#110709] p-2 text-center">
                  <svg viewBox="0 0 200 160" className="mx-auto h-36 w-full text-[#d96b27]">
                    {/* Alchemical background rays */}
                    <circle cx="100" cy="80" r="70" fill="none" stroke="#3b161c" strokeWidth="1" strokeDasharray="4 2" />
                    
                    {/* Voluptuous Persimmon fruit slice showing inner chambers */}
                    <path d="M 60 70 C 60 30 140 30 140 70 C 140 120 100 135 100 135 C 100 135 60 120 60 70 Z" fill="#2d1016" stroke="#d96b27" strokeWidth="2" />
                    
                    {/* Inner sensual carpels (seed chambers) shaped like drops of nectar */}
                    <path d="M 100 55 C 92 65 92 85 100 95 C 108 85 108 65 100 55 Z" fill="#831828" stroke="#d4af37" strokeWidth="1" />
                    <path d="M 85 65 C 78 72 82 90 92 92 C 90 82 86 70 85 65 Z" fill="#831828" stroke="#d4af37" strokeWidth="1" />
                    <path d="M 115 65 C 122 72 118 90 108 92 C 110 82 114 70 115 65 Z" fill="#831828" stroke="#d4af37" strokeWidth="1" />
                    
                    {/* Calyx (leaves on top) */}
                    <path d="M 90 42 C 80 32 95 24 100 35 C 105 24 120 32 110 42 C 118 48 108 52 100 48 C 92 52 82 48 90 42 Z" fill="#15803d" stroke="#22c55e" strokeWidth="1" />
                    
                    {/* Dripping nectar drops */}
                    <circle cx="100" cy="142" r="3" fill="#e11d48" />
                    <circle cx="100" cy="152" r="2" fill="#d96b27" />

                    {/* Latin engraving */}
                    <text x="100" y="15" textAnchor="middle" fill="#d4af37" fontSize="9" fontFamily="Cinzel, serif">
                      FIG. I · ANATOMIA DIOSPYRI
                    </text>
                  </svg>
                  <span className="text-[11px] text-[#a89a8c] italic block mt-1">
                    Гравюра I: Анатомия плоти хурмы с капающим вяжущим соком
                  </span>
                </div>

                <div className="font-mono text-[#d4af37] font-semibold mb-1">
                  Глоссарий № 41:
                </div>
                <p className="text-[#b5a799] leading-relaxed">
                  <strong className="text-[#f4ece1]">Fructus Libido</strong> — патологическое состояние, 
                  при котором субъект перестает разделять гастрономический и репродуктивный аппетиты. 
                  Особенно обостряется в осенний сбор хурмы.
                </p>
              </div>

              {activeNote === 'libido' && (
                <div className="rounded border border-[#831828] bg-[#2a0e14] p-3 text-xs text-[#fecdd3] animate-fadeIn">
                  <div className="font-bold flex items-center gap-1 text-[#f43f5e] mb-1">
                    <ShieldAlert className="h-3.5 w-3.5" />
                    Особое предписание Архиепископа:
                  </div>
                  Монахам запрещалось употреблять хурму в темноте келий, дабы не предаваться осязательному грехопадению.
                </div>
              )}
            </div>
          </div>
        </article>

        {/* ================= CHAPTER 2 ================= */}
        <article className="relative rounded-xl border border-[#3b1d22] bg-[#140b0e] p-6 sm:p-10 shadow-2xl">
          {/* Chapter header ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2d171b] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase block mb-1">
                Capitulum Secundum · Тьма пустой чаши
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#fbf7f2]">
                Глава 2. Синдром пустого блендера и усиление сексуальных фантазий
              </h3>
            </div>
            
            <span className="text-xs font-mono text-[#a89a8c]">
              Синдром: <span className="text-[#e11d48] font-semibold">Vacuum Blenderus</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main manuscript prose */}
            <div className="lg:col-span-8 space-y-6 text-[#ded2c4] font-serif-prose text-lg sm:text-xl leading-relaxed">
              <p>
                <span className="float-left mr-3 mt-1 text-5xl sm:text-6xl font-display font-bold text-[#e11d48] leading-none border-b-2 border-[#831828]">
                  Г
                </span>
                лавным симптомом этой древней хурмовой чумы являлась невозможность прожить без смузи ни дня. 
                Как только субъект лишался доступа к своему густому фруктовому зелью, наступал{' '}
                <button
                  type="button"
                  onClick={() => setActiveNote(activeNote === 'vacuum' ? null : 'vacuum')}
                  className="font-bold text-[#d4af37] underline decoration-[#78350f] decoration-2 underline-offset-4 hover:text-[#fef08a] transition-colors cursor-pointer"
                  title="Нажмите, чтобы раскрыть симптоматику"
                >
                  Vacuum Blenderus
                </button>{' '}
                (Ужас пустой чаши).
              </p>

              <p>
                В трактатах описывается, что в этот период абстиненции в голове больного начиналось 
                неконтролируемое брожение мыслей. Обычные предметы обихода начинали казаться ему эротическими 
                объектами, а непристойные размышления о женщинах принимали маниакальный характер.
              </p>

              <div className="my-6 rounded border border-[#6b1e28] bg-gradient-to-r from-[#220c12] via-[#1a0a0e] to-[#220c12] p-5 shadow-inner">
                <Quote className="h-6 w-6 text-[#e11d48]/70 mb-2" />
                <p className="text-base sm:text-lg italic text-[#fce7f3] leading-relaxed">
                  «Пациент представлял себе соитие с каждой встречной дояркой, наделяя процесс 
                  гиперболизированными, почти звериными чертами, где пот, фруктовые соки и телесные 
                  жидкости смешивались в единый дьявольский коктейль.»
                </p>
                <div className="mt-3 text-right text-xs tracking-wider text-[#d4af37] font-mono">
                  — Из протокола дознания инквизитора отца Варфоломея
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#a89a8c] italic">
                Примечание исследователей 2026 г.: Современная неврология подтверждает, что 
                внезапный дефицит фруктозы в сочетании с психологической фиксацией на ритуале 
                перетирания вызывает мощный дофаминовый шторм и гиперсексуализацию восприятия.
              </p>
            </div>

            {/* Sidebar with Woodcut 2: The Empty Mortar & Delirium */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-lg border border-[#3d1e23] bg-[#1a0e12] p-4 text-xs">
                {/* SVG Woodcut: Vacuum Blenderus & Phantom Milkmaid */}
                <div className="mb-3 overflow-hidden rounded border border-[#54212a] bg-[#110709] p-2 text-center">
                  <svg viewBox="0 0 200 160" className="mx-auto h-36 w-full text-[#e11d48]">
                    {/* Alchemical dark vortex inside empty mortar */}
                    <ellipse cx="100" cy="110" rx="60" ry="25" fill="#1b080d" stroke="#5c1d27" strokeWidth="2" />
                    <ellipse cx="100" cy="110" rx="42" ry="16" fill="#080305" stroke="#be123c" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Whirling spiral of erotic delirium (phantom curves) */}
                    <path d="M 100 110 Q 75 70 100 45 Q 125 70 100 110" fill="none" stroke="#d4af37" strokeWidth="1.2" opacity="0.8" />
                    
                    {/* Phantom milk bucket & silhouette curves */}
                    <path d="M 65 50 Q 80 35 100 35 Q 120 35 135 50 Q 120 75 100 68 Q 80 75 65 50 Z" fill="#2d1016" stroke="#f43f5e" strokeWidth="1" opacity="0.7" />
                    <circle cx="85" cy="52" r="5" fill="#e11d48" opacity="0.6" />
                    <circle cx="115" cy="52" r="5" fill="#e11d48" opacity="0.6" />
                    
                    {/* Emptiness indicator lines */}
                    <line x1="88" y1="110" x2="112" y2="110" stroke="#f43f5e" strokeWidth="1" />
                    <line x1="100" y1="98" x2="100" y2="122" stroke="#f43f5e" strokeWidth="1" />

                    <text x="100" y="18" textAnchor="middle" fill="#d4af37" fontSize="9" fontFamily="Cinzel, serif">
                      FIG. II · VACUUM ET DELIRIUM
                    </text>
                  </svg>
                  <span className="text-[11px] text-[#a89a8c] italic block mt-1">
                    Гравюра II: Пустая чаша и призрак знойной доярки в бреду монаха
                  </span>
                </div>

                <div className="font-mono text-[#e11d48] font-semibold mb-1">
                  Диагностический маркер:
                </div>
                <p className="text-[#b5a799] leading-relaxed">
                  <strong className="text-[#f4ece1]">Vacuum Blenderus</strong> — критическая фаза 
                  ломки, при которой деревянная ступка, подойник или глиняная кринка вызывают у больного 
                  неудержимые видения неистового плотского соединения.
                </p>
              </div>

              {activeNote === 'vacuum' && (
                <div className="rounded border border-[#d4af37] bg-[#22180c] p-3 text-xs text-[#fef08a] animate-fadeIn">
                  <div className="font-bold flex items-center gap-1 text-[#f59e0b] mb-1">
                    <Eye className="h-3.5 w-3.5" />
                    Исторический факт:
                  </div>
                  В 1249 году в окрестностях аббатства все доярки были переведены на ношение глухих монашеских ряс, так как фрутарианцы бросались на ведра с молоком.
                </div>
              )}
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};
