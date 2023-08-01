/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        port_bg: "#ececec",
        port_text: "#000000"
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
