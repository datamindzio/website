/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'dm-bg': '#070B16',
        'dm-bg2': '#0B1124',
        'dm-panel': '#0E1630',
        'dm-panel2': '#111B3A',
        'dm-text': '#E6ECFB',
        'dm-muted': '#9FB0D4',
        'dm-muted2': '#7184AE',
        'dm-cyan': '#33C6E0',
        'dm-cyan2': '#21E6C1',
        'dm-blue': '#4F8DFF',
      },
    },
  },
}
