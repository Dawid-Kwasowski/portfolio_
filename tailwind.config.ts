import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-right': {
          '0%, 100%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(50%)',
          }
        }
      },
      animation: {
        'move-right': 'move-right 2s ease-in-out infinite',
      },
      colors: {
        primary: "#040403",
        secondary: "#C03221",
        tertiary: "#F7F7FF",
      },
      fontFamily: {
        custom: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
} satisfies Config

