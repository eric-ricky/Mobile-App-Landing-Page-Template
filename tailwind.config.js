/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#308a87',
          DEFAULT: '#196461',
          dark: '#104746',
        },
      },
      fontSize: {
        headinglg: [
          '4.8rem',
          { lineHeight: '1.1' },
          { letterSpacing: '-0.02em' },
        ],
        headingmd: [
          '2.88rem',
          { lineHeight: '1.2' },
          { letterSpacing: '-0.02em' },
        ],
        headingsm: [
          '1.8rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        headingxs: [
          '1.08rem',
          { lineHeight: '1.4' },
          { letterSpacing: '-0.02em' },
        ],
        subheading: ['1.44rem', { lineHeight: '1.35' }],
        body: ['16px', { lineHeight: '1.4' }, { letterSpacing: '0' }],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
