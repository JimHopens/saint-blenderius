/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NordicHeader } from './components/NordicHeader';
import { NordicHero } from './components/NordicHero';
import { NordicMonograph } from './components/NordicMonograph';
import { NordicNotes } from './components/NordicNotes';
import { NordicColophon } from './components/NordicColophon';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0b0c0e] text-[#dedede] flex flex-col font-nordic-sans selection:bg-[#881337] selection:text-[#fff1f2]">
      {/* Minimalist Norwegian Header (3-zone Top Bar Contract) */}
      <NordicHeader />

      <main className="flex-1">
        {/* Editorial Magazine Hero: Full title, translation, declassification stamp, Planche 01 */}
        <NordicHero />

        {/* Complete 8-Chapter Monograph with sensual Scandinavian art plates & Inquisition Index Table */}
        <NordicMonograph />

        {/* Context: History of the Fruitarian order, tannin neurochemistry, 2026 declassification */}
        <NordicNotes />
      </main>

      {/* Scandinavian Minimalist Publication Colophon */}
      <NordicColophon />
    </div>
  );
}
