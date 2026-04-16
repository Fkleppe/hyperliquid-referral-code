import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const SITE = 'https://hyperliquid-referral-code.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Hyperliquid Referral Code AWD — Save 4% on Every Trade (Max Discount)',
  description:
    'Use Hyperliquid referral code AWD to lock in the maximum 4% trading fee discount. Works on perps and spot, stacks with HYPE staking, never expires.',
  keywords: [
    'hyperliquid referral code',
    'hyperliquid referral code AWD',
    'hyperliquid discount',
    'hyperliquid fee discount',
    'hyperliquid 4% off',
    'AWD hyperliquid',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hyperliquid Referral Code AWD — 4% Off Fees',
    description: 'Lock in the maximum 4% fee discount on Hyperliquid with code AWD.',
    url: SITE,
    siteName: 'Hyperliquid Referral Code AWD',
    images: [{ url: '/hyperliquid-referral-code-awd.jpg', width: 1200, height: 630, alt: 'Hyperliquid Referral Code AWD' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyperliquid Referral Code AWD — 4% Off',
    description: 'Maximum Hyperliquid fee discount with code AWD.',
    images: ['/hyperliquid-referral-code-awd.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#03110E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
