'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/lib/faq-data';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQ_DATA.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`rounded-2xl border transition ${isOpen ? 'border-mint-300/40 bg-mint-300/[0.04]' : 'border-mint-200/10 bg-ink-900/30 hover:border-mint-200/25'}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`serif-tight text-xl md:text-2xl ${isOpen ? 'text-mint-100' : 'text-white'}`}>{f.q}</span>
              <span aria-hidden className={`shrink-0 w-8 h-8 rounded-full grid place-items-center text-mint-200 transition ${isOpen ? 'rotate-45 bg-mint-200/10' : 'bg-white/[0.03]'}`}>
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
            </button>
            <div className={`grid transition-all duration-400 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 text-white/70 leading-relaxed max-w-3xl">{f.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
