/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 15s ease infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'floating-shapes': 'floating-shapes 25s linear infinite',
        'float-random': 'float-random 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateY(-100vh) scale(2)',
            opacity: 0.8,
          }
        },
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'floating-shapes': {
          '0%': {
            transform: 'rotate(0deg) translate(100px) rotate(0deg) scale(1)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(100px) rotate(-360deg) scale(1.5)',
          },
        },
        'float-random': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: 0,
          },
          '50%': {
            transform: 'translate(var(--random-x, 100px), var(--random-y, -100px)) scale(2)',
            opacity: 0.8,
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 0.5,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.5)',
          },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-12': '12deg',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M10 10h80v80H10z' stroke='rgba(255,255,255,0.1)' fill='none' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='2' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 