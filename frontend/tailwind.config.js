/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#13100A',
        foreground:  '#F0EBE0',
        primary:     '#D4A853',
        'primary-fg':'#13100A',
        card:        '#1C170F',
        border:      '#2E2619',
        muted:       '#1C170F',
        'muted-fg':  '#8A7E68',
      },
      fontFamily: {
        display: ['"Cormorant Garant"', 'serif'],
        sans:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};