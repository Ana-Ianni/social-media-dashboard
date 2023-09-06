/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'hsl(0, 0%, 100%)',
      'lime-green': 'hsl(163, 72%, 41%)',
      'bright-red': 'hsl(356, 69%, 56%)',
      'very-dark-blue': 'hsl(230, 17%, 14%)',
      'very-dark-blue-2': 'hsl(232, 19%, 15%)',
      'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
      'desaturated-blue': 'hsl(228, 34%, 66%)',
      'desaturated-purple': 'hsl(243, 51%, 70%)',
      'pale-blue': 'hsl(225, 100%, 98%)',
      'light-grayish-blue': 'hsl(227, 47%, 96%)',
      'dark-grayish-blue': 'hsl(228, 12%, 44%)'
    },
  },
  darkMode: 'class',
  plugins: [],
}