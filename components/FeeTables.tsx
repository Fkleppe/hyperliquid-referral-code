const perps = [
  ['0 · Base', '$0+', '0.045%', '0.015%'],
  ['1', '>$5M', '0.040%', '0.012%'],
  ['2', '>$25M', '0.035%', '0.008%'],
  ['3', '>$100M', '0.030%', '0.004%'],
  ['4', '>$500M', '0.028%', '0.000%'],
  ['5', '>$2B', '0.026%', '0.000%'],
  ['6', '>$7B', '0.024%', '0.000%'],
];

const spot = [
  ['0 · Base', '$0+', '0.070%', '0.040%'],
  ['1', '>$5M', '0.060%', '0.030%'],
  ['2', '>$25M', '0.050%', '0.020%'],
  ['3', '>$100M', '0.040%', '0.010%'],
  ['4', '>$500M', '0.035%', '0.000%'],
  ['5', '>$2B', '0.030%', '0.000%'],
  ['6', '>$7B', '0.025%', '0.000%'],
];

export function FeeTables() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FeeCard title="Perpetuals" rows={perps} />
      <FeeCard title="Spot" rows={spot} />
    </div>
  );
}

function FeeCard({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <h3 className="serif-tight text-3xl text-white">{title}</h3>
        <span className="code-badge text-xs">with AWD · −4%</span>
      </div>
      <table className="hl-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>14-day volume</th>
            <th>Taker</th>
            <th>Maker</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="text-white/80 font-medium">{r[0]}</td>
              <td className="text-white/60 font-mono text-xs">{r[1]}</td>
              <td className="text-mint-100 font-mono">{r[2]}</td>
              <td className="text-white/70 font-mono">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-6 py-4 text-xs text-white/45 border-t border-mint-200/10">
        AWD reduces these fees by an additional 4% for your first $25M in volume.
      </p>
    </div>
  );
}
