import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#03110E',
          900: '#061A16',
          800: '#0A2721',
          700: '#0F362E',
          600: '#14463C',
        },
        mint: {
          50: '#E9FFF8',
          100: '#C7FDEC',
          200: '#97FCE4',
          300: '#5EF5D1',
          400: '#2FE5B8',
          500: '#14C89E',
          600: '#0AA382',
        },
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(47,229,184,0.18), transparent 55%)',
      },
      animation: {
        'blob-slow': 'blob 22s ease-in-out infinite',
        'blob-mid': 'blob 16s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.215,0.61,0.355,1) infinite',
        shimmer: 'shimmer 3.5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(3%,-4%) scale(1.08)' },
          '66%': { transform: 'translate(-4%,3%) scale(0.94)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
