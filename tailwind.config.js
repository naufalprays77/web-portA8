module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        44: 'repeat(4, minmax(0, 1fr))',
      },
      gridAutoRows: {
        '2fr': 'minmax(60px, auto)',
      },
    },
  },
  plugins: [],
};
