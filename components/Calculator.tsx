'use client';

import { useMemo, useState } from 'react';

const TIER_FEES = [
  { label: 'Tier 0 · Base', taker: 0.00045 },
  { label: 'Tier 1 · >$5M', taker: 0.0004 },
  { label: 'Tier 2 · >$25M', taker: 0.00035 },
  { label: 'Tier 3 · >$100M', taker: 0.0003 },
];

const DISCOUNT = 0.04;

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

export function Calculator() {
  const [volume, setVolume] = useState(50000);
  const [tradesPerDay, setTrades] = useState(10);
  const [tier, setTier] = useState(0);

  const { daily, monthly, annual, perTrade } = useMemo(() => {
    const fee = TIER_FEES[tier].taker;
    const saved = volume * fee * DISCOUNT;
    return {
      perTrade: saved,
      daily: saved * tradesPerDay,
      monthly: saved * tradesPerDay * 30,
      annual: saved * tradesPerDay * 365,
    };
  }, [volume, tradesPerDay, tier]);

  return (
    <div className="glass rounded-3xl p-6 md:p-10 shadow-2xl">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-7">
          <Control
            label="Average position size"
            value={`$${volume.toLocaleString()}`}
            sub={volume < 10000 ? 'retail' : volume < 50000 ? 'active trader' : 'size'}
          >
            <input
              type="range" min={100} max={500000} step={100}
              value={volume} onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-mint-300"
            />
          </Control>

          <Control
            label="Trades per day"
            value={String(tradesPerDay)}
            sub={tradesPerDay <= 3 ? 'swing' : tradesPerDay <= 15 ? 'active' : 'degen'}
          >
            <input
              type="range" min={1} max={100} step={1}
              value={tradesPerDay} onChange={(e) => setTrades(Number(e.target.value))}
              className="w-full accent-mint-300"
            />
          </Control>

          <div>
            <div className="section-label mb-3">Your volume tier</div>
            <div className="grid grid-cols-2 gap-2">
              {TIER_FEES.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTier(i)}
                  className={`text-left rounded-xl border px-3 py-2 text-[13px] transition ${
                    i === tier
                      ? 'border-mint-300 bg-mint-300/10 text-mint-100'
                      : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-mint-200/30'
                  }`}
                >
                  <div className="font-medium">{t.label}</div>
                  <div className="font-mono text-[11px] opacity-70">
                    {(t.taker * 100).toFixed(3)}% taker
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-ink-900/60 border border-mint-200/10 p-6 md:p-8 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
               style={{ background: 'radial-gradient(closest-side, rgba(47,229,184,0.25), transparent 70%)' }} />
          <div className="section-label mb-4 relative">Your savings with AWD</div>

          <div className="relative space-y-5">
            <Result label="Per trade" value={fmt(perTrade)} big />
            <div className="divider-glow" />
            <Result label="Per day" value={fmt(daily)} />
            <Result label="Per month" value={fmt(monthly)} />
            <Result label="Per year" value={fmt(annual)} accent />
          </div>

          <a
            href="https://app.hyperliquid.xyz/join/AWD"
            target="_blank" rel="noopener"
            className="btn-mint mt-7 w-full inline-flex justify-center px-5 py-3 text-sm font-medium"
          >
            Lock in 4% with code AWD →
          </a>
          <p className="mt-3 text-[11px] text-white/40 text-center">
            Estimates use taker-fee assumptions. Stacks with HYPE staking discounts.
          </p>
        </div>
      </div>
    </div>
  );
}

function Control({ label, value, sub, children }: { label: string; value: string; sub?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <div className="section-label">{label}</div>
        <div className="font-mono text-mint-200 text-lg">
          {value}
          {sub && <span className="ml-2 text-[10px] uppercase tracking-widest text-white/40">{sub}</span>}
        </div>
      </div>
      {children}
    </div>
  );
}

function Result({ label, value, big, accent }: { label: string; value: string; big?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between">
      <div className="text-[11px] uppercase tracking-[0.2em] font-mono text-white/50">{label}</div>
      <div
        className={`font-serif tabular-nums ${big ? 'text-5xl' : accent ? 'text-3xl' : 'text-2xl'} ${
          accent ? 'shimmer-text' : 'text-white'
        }`}
      >
        {value}
      </div>
    </div>
  );
}
