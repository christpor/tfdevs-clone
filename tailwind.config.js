/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tfd: {
          amber: '#FE6E00',
          amberHover: '#E05D00',
          amberLight: '#FFF3E8',
          dark: '#0B1120',
          slate: '#111827',
          card: '#1E293B',
          border: 'rgba(255, 255, 255, 0.08)',
          lightBorder: 'rgba(0, 0, 0, 0.08)',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Google Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'pill': '9999px',
        'xl': '20px',
        '2xl': '28px',
      }
    },
  },
  plugins: [],
};
