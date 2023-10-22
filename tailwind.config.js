/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lilyscript: ['"Lily Script One"'],
        jakarta: ['"Plus Jakarta Sans"']
      }
    },
  },
  plugins: [],
}

