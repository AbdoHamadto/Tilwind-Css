/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin3D-slow': 'spin3D 2.5s linear infinite',
        'spin3D-fast': 'spin3D 2s linear infinite',
      },
      keyframes: {
        spin3D: {
          '0%': {transform: 'rotate3d(0.5, 1, 0.5, 360deg)'},
          '100%': {transform: 'rotate3d(0deg)'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

