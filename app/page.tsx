import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Calculator } from '@/components/Calculator';
import { FeeTables } from '@/components/FeeTables';
import { Stacking } from '@/components/Stacking';
import { Steps } from '@/components/Steps';
import { Compare } from '@/components/Compare';
import { Bridge } from '@/components/Bridge';
import { Faq } from '@/components/Faq';
import { FAQ_DATA } from '@/lib/faq-data';
import { BigCta } from '@/components/BigCta';
import { Footer } from '@/components/Footer';

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Hyperliquid Referral Code AWD',
    description: 'AWD grants the maximum 4% trading fee discount on Hyperliquid, the leading on-chain perp DEX.',
    brand: { '@type': 'Brand', name: 'Hyperliquid' },
    offers: {
      '@type': 'Offer',
      url: 'https://app.hyperliquid.xyz/join/AWD',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1284' },
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <Nav />
      <Hero />

      <Section
        id="how"
        label="Activate in 4 steps"
        title={<>From zero to <em className="italic shimmer-text">4% off</em> in 30 seconds.</>}
        lede="No accounts, no KYC, no email. The AWD code attaches itself to your wallet the first time you connect."
      >
        <Steps />
      </Section>

      <Section
        id="calculator"
        label="Savings calculator"
        title={<>See what AWD <em className="italic">actually</em> saves you.</>}
        lede="Drag the sliders. The more you trade, the more the 4% compounds — and it stacks with every tier and every HYPE staking discount."
      >
        <Calculator />
      </Section>

      <Section
        id="fees"
        label="Fee structure"
        title={<>Every tier. Both markets. Minus 4%.</>}
        lede="Hyperliquid uses tiered fees based on your rolling 14-day trading volume. AWD stacks on top — reducing whichever tier you land on by an additional 4%."
      >
        <FeeTables />
      </Section>

      <Section
        id="stacking"
        label="Stack it"
        title={<>AWD is <em className="italic">additive</em>. Not a swap.</>}
        lede="Stack the referral discount on top of HYPE staking tiers and volume-based discounts. Every reduction compounds."
      >
        <Stacking />
      </Section>

      <Section
        id="compare"
        label="Vs. the world"
        title={<>Lower fees than most CEXs. Without the CEX.</>}
        lede="Non-custodial, no KYC, on-chain order book, sub-second execution — and fees that stay competitive with Binance once AWD is applied."
      >
        <Compare />
      </Section>

      <Section
        id="bridge"
        label="Funding it"
        title={<>Three clean ways to get USDC in.</>}
        lede="Hyperliquid runs on its own L1. You bridge USDC once — after that, trades are gasless and settlement is instant."
      >
        <Bridge />
      </Section>

      <Section
        id="faq"
        label="FAQ"
        title={<>Everything about the code AWD.</>}
      >
        <Faq />
      </Section>

      <BigCta />
      <Footer />
    </main>
  );
}
