/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-bg": "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
