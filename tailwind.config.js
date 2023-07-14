/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      flexBasis: {
        '1/4-gap-4': 'calc(25% - 2rem)',
      },
    },
  },
  plugins: [],
};
