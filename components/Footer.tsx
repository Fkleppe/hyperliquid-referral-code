import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-mint-200/10 mt-16">
      <div className="mx-auto max-w-6xl px-5 py-12 grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Logo size={22} />
            <span className="text-base font-medium">
              Hyper<em className="not-italic font-serif">liquid</em>
              <span className="text-white/50"> · Code AWD</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-sm">
            Unofficial referral landing for the AWD code. Not affiliated with Hyperliquid Labs or the Hyperliquid Foundation.
          </p>
        </div>
        <div>
          <div className="section-label mb-4">Product</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="https://app.hyperliquid.xyz/join/AWD" className="hover:text-mint-200">Launch app</a></li>
            <li><a href="https://app.hyperliquid.xyz/trade" className="hover:text-mint-200">Trade perps</a></li>
            <li><a href="https://app.hyperliquid.xyz/staking" className="hover:text-mint-200">Stake HYPE</a></li>
            <li><a href="https://app.hyperliquid.xyz/referrals" className="hover:text-mint-200">Verify code</a></li>
          </ul>
        </div>
        <div>
          <div className="section-label mb-4">Resources</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#calculator" className="hover:text-mint-200">Savings calculator</a></li>
            <li><a href="#fees" className="hover:text-mint-200">Full fee tables</a></li>
            <li><a href="#stacking" className="hover:text-mint-200">Stack with staking</a></li>
            <li><a href="#faq" className="hover:text-mint-200">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mint-200/10">
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} · Referral code landing · Not financial advice.</div>
          <div className="font-mono tracking-widest">CODE · AWD · MAX · 4%</div>
        </div>
      </div>
    </footer>
  );
}
