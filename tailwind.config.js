export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#38BDF8',
        darkText: '#0F172A',
        bg: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
