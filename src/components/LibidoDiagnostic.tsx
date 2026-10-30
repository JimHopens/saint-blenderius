import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, Award, FileText, AlertTriangle } from 'lucide-react';
import { QUIZ_QUESTIONS, calculateDiagnosis, DiagnosisResult } from '../utils/abbeyLogic';
import { abbeyAudio } from '../utils/abbeyAudio';

export const LibidoDiagnostic: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({
    1: 15,
    2: 15,
    3: 15,
    4: 15,
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const handleSelect = (questionId: number, score: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: score,
    }));
  };

  const handleDiagnose = () => {
    const total = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
    const diagnosis = calculateDiagnosis(total);
    setResult(diagnosis);
    setHasSubmitted(true);
    abbeyAudio.playSealChime();
  };

  const handleReset = () => {
    setSelectedAnswers({ 1: 15, 2: 15, 3: 15, 4: 15 });
    setHasSubmitted(false);
    setResult(null);
  };

  return (
    <section id="test-section" className="py-20 bg-[#0d090a] border-b border-[#2d1b1d] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d96b27] uppercase mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Дознание Инквизиции Аббатства</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#fbf7f2]">
            Тест: Степень Поражения «Fructus Libido»
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#a89a8c] font-serif-prose max-w-xl mx-auto italic">
            Ответьте на четыре вопроса святых натурфилософов, чтобы определить, 
            насколько глубоко хурмовая чума и соковые фантазии проникли в ваши помыслы.
          </p>
        </div>

        {!hasSubmitted ? (
          /* Question Form */
          <div className="space-y-8">
            {QUIZ_QUESTIONS.map((q, idx) => (
              <div 
                key={q.id}
                className="rounded-xl border border-[#381a20] bg-[#140b0e] p-6 shadow-md transition-all hover:border-[#54212a]"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#270f14] border border-[#78350f] text-xs font-mono text-[#d4af37]">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold font-display text-[#f5eee6]">
                      {q.question}
                    </h3>
                    <p className="text-xs text-[#8f7e71] font-mono mt-0.5">
                      {q.subtext}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {q.options.map(opt => {
                    const isSelected = selectedAnswers[q.id] === opt.score;
                    return (
                      <button
                        key={opt.score}
                        type="button"
                        onClick={() => handleSelect(q.id, opt.score)}
                        className={`flex flex-col justify-between p-3.5 rounded-lg border text-left transition-all text-xs sm:text-sm ${
                          isSelected
                            ? 'border-[#e11d48] bg-[#2a0e14] text-[#fef2f2] shadow-sm ring-1 ring-[#e11d48]'
                            : 'border-[#2e151a] bg-[#110709] text-[#c9bdb1] hover:border-[#4d1f27] hover:text-[#f4ece1]'
                        }`}
                      >
                        <span className="font-serif-prose leading-snug">{opt.text}</span>
                        <span className="mt-3 text-[10px] font-mono text-[#d4af37]/80 italic">
                          {opt.latinRemark}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Submit Bar */}
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={handleDiagnose}
                className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wider text-[#fef2f2] bg-[#831828] hover:bg-[#9f1239] active:scale-95 rounded border border-[#be123c]/50 shadow-xl shadow-[#831828]/30 font-display transition-all"
              >
                <Award className="h-4 w-4 text-[#d4af37]" />
                <span>Получить Вердикт Инквизиции</span>
              </button>
            </div>
          </div>
        ) : (
          /* Official Inquisitorial Scroll Certificate */
          result && (
            <div className="relative rounded-2xl border-2 border-[#d4af37]/70 bg-gradient-to-b from-[#1c0d12] via-[#14080b] to-[#120609] p-6 sm:p-10 shadow-2xl animate-fadeIn">
              
              {/* Heraldic Stamp in top right */}
              <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#831828] border-2 border-[#d4af37] text-white shadow-xl">
                  <span className="font-serif font-black text-xs text-[#fef3c7]">INQ.</span>
                </div>
                <span className="text-[10px] font-mono text-[#a89a8c] mt-1 uppercase tracking-wider">
                  ПЕЧАТЬ 1243
                </span>
              </div>

              {/* Title & Seal Header */}
              <div className="border-b border-[#3d1a22] pb-6 mb-6">
                <div className="text-xs font-mono text-[#d4af37] uppercase tracking-widest mb-1">
                  Грамота Судилища Святого Блендерия
                </div>
                <h3 className="text-xl sm:text-3xl font-bold font-display text-[#fbf7f2]">
                  {result.stageName}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#e11d48] italic mt-1">
                  Диагноз: {result.latinDiagnosis} (Балл похоти: {result.score}/100)
                </div>
              </div>

              {/* Diagnosis Details */}
              <div className="space-y-6 text-[#ded2c4] font-serif-prose text-base sm:text-lg leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#a89a8c] tracking-wider mb-1">
                    Свидетельство о помрачении:
                  </h4>
                  <p className="bg-[#120609] p-4 rounded border border-[#3b1a20] italic text-[#f4ece1]">
                    «{result.description}»
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="rounded bg-[#1a0a0f] p-3 border border-[#3b171e]">
                    <span className="text-[#a89a8c] block mb-1">Заражённость танинами:</span>
                    <span className="text-[#d96b27] font-bold text-sm">{result.tanninLevel}</span>
                  </div>
                  <div className="rounded bg-[#1a0a0f] p-3 border border-[#3b171e]">
                    <span className="text-[#a89a8c] block mb-1">Риск синдрома Vacuum Blenderus:</span>
                    <span className={`font-bold text-sm ${result.riskOfVacuumBlenderus === 'Неизлечимый' ? 'text-[#f43f5e]' : 'text-[#facc15]'}`}>
                      {result.riskOfVacuumBlenderus}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#d4af37] tracking-wider mb-1">
                    Назначенная епитимья:
                  </h4>
                  <p className="text-sm text-[#e6ded5] bg-[#220d13] p-3.5 rounded border border-[#6b1e2a]">
                    {result.recommendedPenance}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#3d1a22] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#c9bdb1] hover:text-white bg-[#1c0d12] hover:bg-[#28131a] rounded border border-[#4d1f27] transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Пройти дознание заново</span>
                </button>

                <div className="text-xs font-mono text-[#8f7e71] italic">
                  Хранить при келейной свече. Не разглашать крестьянам.
                </div>
              </div>

            </div>
          )
        )}

      </div>
    </section>
  );
};
