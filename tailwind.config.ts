import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        osu: {
          pink: '#FF66AB',
          purple: '#7E5BEF',
          dark: '#1a1a2e',
          darker: '#0f0f1a',
          blue: '#66CCFF',
          yellow: '#FFCC22',
          green: '#88CC00',
        }
      },
      fontFamily: {
        osu: ['Torus', 'Century Gothic', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-small': 'bounceSmall 0.6s ease-in-out infinite',
        'hit-circle': 'hitCircle 0.8s ease-out forwards',
        'approach': 'approach 1s linear forwards',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'combo-pop': 'comboPop 0.2s ease-out',
      },
      keyframes: {
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        hitCircle: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        approach: {
          '0%': { transform: 'scale(3)', opacity: '0.3' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        comboPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'osu': '0 0 20px rgba(255, 102, 171, 0.5)',
        'osu-blue': '0 0 20px rgba(102, 204, 255, 0.5)',
        'osu-glow': '0 0 40px rgba(255, 102, 171, 0.3), 0 0 80px rgba(126, 91, 239, 0.2)',
      }
    },
  },
  plugins: [],
}
export default config
