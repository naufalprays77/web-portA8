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
      backgroundImage: {
        // 'bg-linear': 'linear-gradient(to right, #32637A, #E4BD50, #32637A);',
        home: 'linear-gradient(to right, #045256, #139880, #045256);',
        todo: 'linear-gradient(to right, #1F1F1F, #32637A, #1F1F1F);',

        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
