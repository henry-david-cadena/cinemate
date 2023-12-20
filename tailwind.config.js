export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '90vh': '50rem'
      },
      screens: {
        'other': {'min': '340px', 'max': '1200px'},
        'md': '850px',
      },
      colors: {
        darkbg: '#7c3aed',
        blue: {
          850: '#3b0764'
        }
      }
    },
  },
  plugins: [],
}