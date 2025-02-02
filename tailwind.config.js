/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "/src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        patternLg: `url(/images/pattern.jpg)`,
        patternSm: `url(/images/pattern1.jpg)`,
        patternXs: `url(/images/pattern2.jpg)`,
      },
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#222222',
          hover: '#2f2f2f',
        },
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#d6001c',
        },
      },
    },
  },
  plugins: [],
}

