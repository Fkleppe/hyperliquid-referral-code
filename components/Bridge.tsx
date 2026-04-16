const options = [
  {
    tag: 'Recommended',
    title: 'Bridge from Arbitrum',
    body: 'Deposit in the Hyperliquid app — pick Arbitrum as the source, approve once, funds land in ~1–2 minutes. Cheapest route.',
  },
  {
    tag: 'CEX direct',
    title: 'Withdraw from an exchange',
    body: 'Coinbase, Binance, Bybit, Kraken all support Arbitrum USDC withdrawals. Send to your wallet, then bridge from inside the app.',
  },
  {
    tag: 'Cross-chain',
    title: 'Use Stargate / Synapse / Across',
    body: 'Already have USDC on Ethereum, Base, Polygon, or Solana? Route through a bridge to Arbitrum, then into Hyperliquid.',
  },
];

export function Bridge() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {options.map((o) => (
        <div key={o.title} className="glass rounded-3xl p-6 md:p-7 flex flex-col">
          <div className="inline-flex self-start code-badge text-[10px]">{o.tag}</div>
          <h3 className="serif-tight text-2xl text-white mt-5">{o.title}</h3>
          <p className="mt-3 text-white/65 text-[15px] leading-relaxed">{o.body}</p>
        </div>
      ))}
    </div>
  );
}
