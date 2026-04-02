/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#FFFFFF',
        "border":"#F5F5F5",
        "text-color-black":"#414651",
        "gold-main":"#F2AC0C",
        "bg-black-main":"#161718;",
        "text-tertiary":"#94979C",
        "pink":"#FEE4E2",
        "green":"#095C37",
        "light-yellow":"#fff8ea",
        "light-green":"#25D366",
        "red":"#D92D20",
        "border-gray":"#E9EAEB",
     },
    },
  },
  plugins: [],
}
