/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Text"', 'Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        night: '#050505',
      },
      boxShadow: {
        glow: '0 35px 120px -60px rgba(255, 255, 255, 0.55)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(99, 102, 241, 0.45) 0%, rgba(24, 24, 27, 0) 55%)',
        'hero-soft':
          'radial-gradient(150% 150% at 80% 20%, rgba(244, 114, 182, 0.25) 0%, rgba(15, 15, 15, 0) 60%), radial-gradient(120% 120% at 20% 20%, rgba(96, 165, 250, 0.22) 0%, rgba(24, 24, 27, 0) 65%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
