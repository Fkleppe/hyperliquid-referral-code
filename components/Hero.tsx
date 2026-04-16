'use client';

import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText('AWD');
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70rem] h-[50rem] rounded-full blur-3xl animate-blob-slow"
             style={{ background: 'radial-gradient(closest-side, rgba(47,229,184,0.28), transparent 70%)' }} />
        <div className="absolute top-40 -left-40 w-[34rem] h-[34rem] rounded-full blur-3xl animate-blob-mid"
             style={{ background: 'radial-gradient(closest-side, rgba(151,252,228,0.20), transparent 70%)' }} />
        <div className="absolute top-20 -right-32 w-[30rem] h-[30rem] rounded-full blur-3xl animate-blob-slow"
             style={{ background: 'radial-gradient(closest-side, rgba(20,200,158,0.22), transparent 70%)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        {/* eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 rounded-full border border-mint-200/25 bg-mint-200/5 px-3 py-1.5 text-xs font-medium text-mint-100 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint-200 opacity-70 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-300" />
            </span>
            <span className="font-mono tracking-[0.15em] text-[11px] text-mint-200/90">MAX DISCOUNT · 4% OFF · FIRST $25M VOLUME</span>
          </div>
        </div>

        {/* mark */}
        <div className="flex justify-center mb-10">
          <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden>
            <defs>
              <linearGradient id="h-mark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#97FCE4" />
                <stop offset="1" stopColor="#2FE5B8" />
              </linearGradient>
              <filter id="h-glow"><feGaussianBlur stdDeviation="3" /></filter>
            </defs>
            <g filter="url(#h-glow)" opacity="0.6">
              <path d="M16 22 Q36 8 56 22 Q42 36 56 50 Q36 64 16 50 Q30 36 16 22 Z" fill="url(#h-mark)" />
            </g>
            <path d="M16 22 Q36 8 56 22 Q42 36 56 50 Q36 64 16 50 Q30 36 16 22 Z" fill="url(#h-mark)" />
          </svg>
        </div>

        {/* headline */}
        <h1 className="serif-tight text-center text-[14vw] sm:text-7xl md:text-[92px] leading-[0.92] text-white">
          4% Off Every Trade
          <br />
          <span className="shimmer-text">on Hyperliquid.</span>
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-center text-base md:text-lg text-white/70 leading-relaxed">
          The referral code <span className="code-badge text-[0.95em]">AWD</span> locks in the maximum fee discount Hyperliquid offers — applied automatically, forever, on both perps and spot.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.hyperliquid.xyz/join/AWD"
            target="_blank"
            rel="noopener"
            className="btn-mint px-7 py-3.5 text-[15px] font-medium"
          >
            Start Trading with 4% Off →
          </a>
          <button onClick={copy} className="btn-ghost px-6 py-3.5 text-[15px] font-medium inline-flex items-center gap-2">
            <span className="font-mono text-mint-200">AWD</span>
            <span className="text-white/60">·</span>
            <span>{copied ? 'Copied' : 'Copy code'}</span>
          </button>
        </div>

        {/* trust row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-mint-200/10 bg-mint-200/[0.02]">
          {[
            { k: '4%', v: 'Fee discount' },
            { k: '$25M', v: 'Volume cap' },
            { k: '0', v: 'KYC required' },
            { k: '∞', v: 'Never expires' },
          ].map((s) => (
            <div key={s.v} className="bg-ink-900/40 backdrop-blur px-5 py-5 text-center">
              <div className="serif-tight text-3xl md:text-4xl text-mint-200">{s.k}</div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white/50">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
