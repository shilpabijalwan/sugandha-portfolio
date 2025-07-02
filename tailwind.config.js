/** @type {import('tailwindcss').Config} */
exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1b2735",
        deeperBlue: "#0f1a24",
        primaryYellow: "#ffd277",
      },

      backgroundImage: {
        noise: "url('/asfalt-dark.png')",
      },
    },
  },
  plugins: [],
};
