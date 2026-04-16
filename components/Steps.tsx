const steps = [
  {
    n: '01',
    title: 'Open the AWD link',
    body: 'Click the button to open Hyperliquid with the code AWD pre-attached. No typing.',
  },
  {
    n: '02',
    title: 'Connect any EVM wallet',
    body: 'MetaMask, Rabby, Coinbase Wallet, WalletConnect. No KYC, no email.',
  },
  {
    n: '03',
    title: 'Deposit USDC',
    body: 'Bridge from Arbitrum in ~1–2 minutes, or direct from a CEX via Arbitrum.',
  },
  {
    n: '04',
    title: 'Trade with 4% off',
    body: 'Discount is live from trade #1. Verify anytime at /referrals on the app.',
  },
];

export function Steps() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <div
          key={s.n}
          className="relative rounded-2xl border border-mint-200/10 bg-ink-900/40 p-6 overflow-hidden group hover:border-mint-300/30 transition"
        >
          <div aria-hidden className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"
               style={{ background: 'radial-gradient(closest-side, rgba(47,229,184,0.35), transparent 70%)' }} />
          <div className="font-mono text-xs text-mint-300 tracking-[0.2em]">{s.n}</div>
          <div className="serif-tight text-2xl text-white mt-4">{s.title}</div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.body}</p>
          {i < steps.length - 1 && (
            <div aria-hidden className="hidden lg:block absolute top-8 -right-2 text-mint-300/40 font-mono">→</div>
          )}
        </div>
      ))}
    </div>
  );
}
