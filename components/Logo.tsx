export function Logo({ size = 22, monochrome = false }: { size?: number; monochrome?: boolean }) {
  const fill = monochrome ? 'currentColor' : 'url(#hl-logo-g)';
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      {!monochrome && (
        <defs>
          <linearGradient id="hl-logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#97FCE4" />
            <stop offset="1" stopColor="#2FE5B8" />
          </linearGradient>
        </defs>
      )}
      {/* Hyperliquid mark — two tapered pillows pinched at the waist */}
      <path
        d="M14 8 L50 8 Q58 8 58 16 Q58 30 32 30 Q6 30 6 16 Q6 8 14 8 Z"
        fill={fill}
      />
      <path
        d="M14 56 L50 56 Q58 56 58 48 Q58 34 32 34 Q6 34 6 48 Q6 56 14 56 Z"
        fill={fill}
      />
    </svg>
  );
}
