/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#17A8BE',
        'teal-light': '#87C4D8',
        'teal-dark': '#0F6F7E',
        navy: '#083344',
        'navy-deep': '#062430',
        'navy-foot': '#062735',
        cloud: '#F4FAFC',
        line: '#DCEDF2',
        orange: '#F07810',
        ink: '#083344',
        'ink-soft': '#4E7382',
        muted: '#9BB6C0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        p26float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        p26rise: { from: { transform: 'translateY(20px)', opacity: '.3' }, to: { transform: 'translateY(0)', opacity: '1' } },
        p26marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'p26marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};
