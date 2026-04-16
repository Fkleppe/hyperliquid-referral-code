const rows = [
  { name: 'Hyperliquid · AWD', taker: '0.0432%', maker: '0.0144%', kyc: 'No', custody: 'Self', highlight: true },
  { name: 'Binance', taker: '0.02 – 0.04%', maker: '0.01 – 0.02%', kyc: 'Yes', custody: 'Exchange' },
  { name: 'Bybit', taker: '0.02 – 0.055%', maker: '0.01 – 0.02%', kyc: 'Yes', custody: 'Exchange' },
  { name: 'dYdX', taker: '0.02 – 0.05%', maker: '0.00 – 0.02%', kyc: 'No', custody: 'Self' },
  { name: 'GMX', taker: '0.05 – 0.07%', maker: '—', kyc: 'No', custody: 'Self' },
  { name: 'Jupiter Perps', taker: '0.06 – 0.09%', maker: '—', kyc: 'No', custody: 'Self' },
];

export function Compare() {
  return (
    <div className="glass rounded-3xl overflow-hidden">
      <table className="hl-table">
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Taker</th>
            <th>Maker</th>
            <th>KYC</th>
            <th>Custody</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className={r.highlight ? 'bg-mint-300/[0.05]' : ''}>
              <td className={`font-medium ${r.highlight ? 'text-mint-100' : 'text-white/85'}`}>
                {r.highlight && (
                  <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-mint-300 mr-2 align-middle" />
                )}
                {r.name}
              </td>
              <td className={`font-mono ${r.highlight ? 'text-mint-200' : 'text-white/70'}`}>{r.taker}</td>
              <td className="font-mono text-white/70">{r.maker}</td>
              <td className="text-white/70">{r.kyc}</td>
              <td className="text-white/70">{r.custody}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
