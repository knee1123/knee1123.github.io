import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          '"Helvetica Neue"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          DEFAULT: '#1d1d1f',
          soft: '#86868b',
          inverse: '#f5f5f7',
          'inverse-soft': '#a1a1a6',
        },
        canvas: {
          DEFAULT: '#fbfbfd',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#0071e3',
          dark: '#2997ff',
        },
      },
      boxShadow: {
        card: '0 6px 20px -8px rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.04)',
        cardHover:
          '0 24px 60px -20px rgb(0 0 0 / 0.18), 0 8px 24px -8px rgb(0 0 0 / 0.10)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60rem 30rem at 50% -10%, rgba(0,113,227,0.18), transparent 60%)',
        'hero-glow-dark':
          'radial-gradient(60rem 30rem at 50% -10%, rgba(41,151,255,0.20), transparent 60%)',
      },
    },
  },
  plugins: [],
} satisfies Config
