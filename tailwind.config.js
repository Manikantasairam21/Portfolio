module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set as default
      },
      colors: {
        primary: '#0F172A',   // Navy
        accent: '#38BDF8',    // Light Blue
        soft: '#F1F5F9',      // Light gray
      },
    },
  },
  plugins: [],
}
