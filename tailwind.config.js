module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: '#FCA728',
        navGray: '#343A40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
