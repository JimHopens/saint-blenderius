import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { abbeyAudio } from '../utils/abbeyAudio';

interface NavigationProps {
  onOpenTest: () => void;
  onOpenMortar: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenTest, onOpenMortar }) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const handleToggleSound = () => {
    const active = abbeyAudio.toggleDrone();
    setIsPlayingSound(active);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d1b1d] bg-[#0c0908]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#top" 
          className="group flex items-center gap-2 text-xs sm:text-base font-semibold tracking-wider text-[#e6ded5] whitespace-nowrap shrink-0 hover:text-[#d96b27] transition-colors"
        >
          <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded border border-[#831828]/60 bg-[#1f0b10] text-xs font-serif text-[#d4af37]">
            ✠
          </span>
          <span className="font-display">
            <span className="hidden sm:inline">Abbatia </span>Sancti Blenderii
          </span>
        </a>

        {/* Zone 2: 4 single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium tracking-wide text-[#b5a799]">
          <a href="#treatise" className="hover:text-[#f4ece1] transition-colors whitespace-nowrap shrink-0">
            Трактат 1243 г.
          </a>
          <a href="#mortar-section" className="hover:text-[#f4ece1] transition-colors whitespace-nowrap shrink-0">
            Ступка Искушения
          </a>
          <a href="#test-section" className="hover:text-[#f4ece1] transition-colors whitespace-nowrap shrink-0">
            Диагностика Похоти
          </a>
          <a href="#bestiary" className="hover:text-[#f4ece1] transition-colors whitespace-nowrap shrink-0">
            Бестиарий Плодов
          </a>
        </nav>

        {/* Zone 3: 1 primary action & ambient audio toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={handleToggleSound}
            title={isPlayingSound ? 'Выключить монастырский дрон' : 'Включить атмосферный хорал Аббатства'}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded border border-[#3d2125] bg-[#160a0d] text-[#b5a799] hover:border-[#831828] hover:text-[#d4af37] transition-colors"
            aria-label="Включить или выключить монастырский хорал"
          >
            {isPlayingSound ? (
              <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#d96b27]" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#786c63]" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenMortar}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium tracking-wider text-[#fef2f2] bg-[#831828] hover:bg-[#991b1b] active:scale-95 border border-[#be123c]/40 rounded transition-all whitespace-nowrap shrink-0 font-display"
          >
            <span className="sm:hidden">Ступка</span>
            <span className="hidden sm:inline">Растереть плод</span>
          </button>
        </div>

      </div>
    </header>
  );
};
