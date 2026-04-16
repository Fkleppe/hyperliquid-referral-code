import { Logo } from './Logo';

const links = [
  { href: '#calculator', label: 'Calculator' },
  { href: '#fees', label: 'Fees' },
  { href: '#stacking', label: 'Stacking' },
  { href: '#faq', label: 'FAQ' },
];

export function Nav() {
  return (
    <header className="fixed top-4 md:top-5 inset-x-0 z-50 px-4">
      <nav className="pill-nav mx-auto max-w-5xl flex items-center justify-between px-3 md:px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 pl-2 group">
          <Logo size={22} />
          <span className="text-[15px] md:text-base font-medium tracking-tight">
            Hyper<em className="not-italic font-serif text-ink-900">liquid</em>
            <span className="hidden sm:inline text-ink-700/70"> · Code AWD</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-ink-800/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink-950 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://app.hyperliquid.xyz/join/AWD"
          target="_blank"
          rel="noopener"
          className="btn-mint px-4 md:px-5 py-2 text-sm font-medium"
        >
          Activate AWD
        </a>
      </nav>
    </header>
  );
}
