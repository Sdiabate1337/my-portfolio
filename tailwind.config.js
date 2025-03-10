/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FE5F00',
        'custom-blue': '#1E3A8A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(254, 95, 0, 0.08) 0%, rgba(160, 215, 255, 0.12) 100%)',
      },
      boxShadow: {
        'soft': '0 10px 50px rgba(0, 0, 0, 0.05)',
        'medium': '0 15px 50px rgba(0, 0, 0, 0.1)',
        'intense': '0 20px 60px rgba(0, 0, 0, 0.18)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
