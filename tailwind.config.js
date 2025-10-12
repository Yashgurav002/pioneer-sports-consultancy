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
        primary: '#f59e0b',
        secondary: '#059669',
        accent: '#fbbf24',
        energy: '#f59e0b',
        power: '#059669',
        gold: '#fbbf24',
        'green-600': '#16A34A',
        'green-700': '#15803D',
        'green-800': '#166534',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        tech: ['Orbitron', 'monospace'],
      },
    },
  },
  plugins: [],
}
