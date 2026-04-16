export function BigCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[50rem] h-[30rem] rounded-full blur-3xl animate-blob-slow"
             style={{ background: 'radial-gradient(closest-side, rgba(47,229,184,0.28), transparent 70%)' }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <div className="section-label mb-6">Ready?</div>
        <h2 className="serif-tight text-white text-5xl md:text-7xl leading-[0.95]">
          Start trading with
          <br />
          <span className="shimmer-text">code AWD applied.</span>
        </h2>
        <p className="mt-6 text-white/65 max-w-xl mx-auto text-lg">
          One click. 4% off every trade for your first $25M in volume. No KYC, no minimum deposit, no catch.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.hyperliquid.xyz/join/AWD"
            target="_blank" rel="noopener"
            className="btn-mint px-8 py-4 text-base font-medium"
          >
            Activate code AWD on Hyperliquid →
          </a>
          <span className="text-white/40 text-sm">
            or go to <span className="font-mono text-mint-200">app.hyperliquid.xyz/join/AWD</span>
          </span>
        </div>
      </div>
    </section>
  );
}
