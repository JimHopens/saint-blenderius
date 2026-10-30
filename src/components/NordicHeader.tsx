import React from 'react';
import { Printer } from 'lucide-react';

export const NordicHeader: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0b0c0e]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#top" 
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#ededed] hover:text-[#ea580c] transition-colors whitespace-nowrap shrink-0"
        >
          Sankt Blenderius Klosterarkiv
        </a>

        {/* Zone 2: 4 single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[#9ba1a6]">
          <a href="#kapittel-1" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            01. Hypotesen
          </a>
          <a href="#kapittel-3" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            02. Manus Agitatoris
          </a>
          <a href="#kapittel-5" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            03. Thesaurus Analis
          </a>
          <a href="#kapittel-7" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            04. Indeks & Dom
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#dcdcdc] bg-[#17191d] hover:bg-[#22252b] hover:text-white border border-white/10 rounded-none transition-all whitespace-nowrap shrink-0"
          >
            <Printer className="h-3.5 w-3.5 text-[#ea580c]" />
            <span className="hidden sm:inline">Utskrift / PDF</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>

      </div>
    </header>
  );
};
