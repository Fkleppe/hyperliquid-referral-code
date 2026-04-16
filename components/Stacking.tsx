const rows = [
  { hype: '10+', staking: 5, combined: 9 },
  { hype: '100+', staking: 10, combined: 14 },
  { hype: '1,000+', staking: 15, combined: 19 },
  { hype: '10,000+', staking: 20, combined: 24 },
  { hype: '100,000+', staking: 30, combined: 34 },
  { hype: '500,000+', staking: 40, combined: 44 },
];

export function Stacking() {
  return (
    <div className="glass rounded-3xl p-6 md:p-10">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
        <div>
          <div className="section-label mb-4">Stack the savings</div>
          <h3 className="serif-tight text-3xl md:text-5xl text-white leading-[1]">
            AWD + HYPE staking = deeper discounts.
          </h3>
          <p className="mt-5 text-white/70 leading-relaxed">
            The 4% referral discount <span className="text-mint-100">stacks on top</span> of HYPE staking tiers. At 1,000 HYPE staked you reach ~19% off. At 500k+ HYPE, you cut ~44% off the base rate.
          </p>
          <div className="mt-6 rounded-2xl bg-ink-900/60 border border-mint-200/10 p-5 font-mono text-xs leading-6 text-white/70">
            <div className="text-mint-200">Example · 1,000 HYPE staked</div>
            <div>base taker . . . . . . . . . . . <span className="text-white">0.045%</span></div>
            <div>after AWD (−4%) . . . . . . . . . <span className="text-white">0.0432%</span></div>
            <div>after staking (−15%) . . . . . . . <span className="text-mint-100">0.0367%</span></div>
            <div className="mt-2 text-mint-100">≈ 18.4% off the base fee</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-mint-200/10 bg-ink-900/40">
          <table className="hl-table">
            <thead>
              <tr>
                <th>HYPE staked</th>
                <th>Staking</th>
                <th>AWD</th>
                <th>Combined</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.hype}>
                  <td className="text-white/80 font-medium">{r.hype}</td>
                  <td className="text-white/70 font-mono">{r.staking}%</td>
                  <td className="text-mint-200 font-mono">4%</td>
                  <td>
                    <div className="relative h-7 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          width: `${(r.combined / 44) * 100}%`,
                          background: 'linear-gradient(90deg,#2FE5B8,#97FCE4)',
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-end pr-3 text-[12px] font-mono text-ink-950 font-semibold">
                        ~{r.combined}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
