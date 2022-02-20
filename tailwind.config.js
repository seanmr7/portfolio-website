module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    minWidth: {
      '1/2': '50%',
      '1/4': '25%',
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
