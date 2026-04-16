export function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2FE5B8" />
          <stop offset="1" stopColor="#97FCE4" />
        </linearGradient>
      </defs>
      <path
        d="M14 20 Q32 6 50 20 Q38 32 50 44 Q32 58 14 44 Q26 32 14 20 Z"
        fill="url(#logo-g)"
      />
    </svg>
  );
}
