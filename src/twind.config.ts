import { css } from 'twind/css'

const defaultTheme = {
  theme: {
    extend: {
      colors: {
        whiteAlpha: {
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
        },
        blackAlpha: {
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
      },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      keyframes: {
        shimmer: {
          to: {
            backgroundPosition: 'right -2em top 0',
          },
        },
        fadeIn: {
          from: { transform: 'scale(0.2)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
        fadeOut: {
          from: { transform: 'scale(1)', opacity: 1 },
          to: { transform: 'scale(0.2)', opacity: 0 },
        },
      },
      boxShadow: {
        'card-sm': '0 0 3px #a3abbd69',
        'card-md': '0 0 5px 1px #a3abbd69',
        'card-lg': '0 0 7px 3px #a3abbd69',
      },
      animation: {
        'skeleton-loader': 'shimmer 1.3s ease infinite',
      },
    },
  },
  plugins: {
    'line-clamp': (parts: string[]) => css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${parts[0]};
    `,
  },
}
export default defaultTheme

