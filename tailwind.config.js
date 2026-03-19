/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F6F6EF',
        "border":"#F5F5F5",
        "text-color-black":"#414651",
        "gold-main":"#E9C46A",
      },
    },
  },
  plugins: [],
}
