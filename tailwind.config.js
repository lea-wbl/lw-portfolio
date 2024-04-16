/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        100: "var(--gray-100)",
        800: "var(--gray-800)",
      },
      orange: {
        100: "var(--orange-100)",
        200: "var(--orange-200)",
        300: "var(--orange-300)",
        400: "var(--orange-400)",
        500: "var(--orange-500)",
        600: "var(--orange-600)",
      },
      yellow: {
        100: "var(--yellow-100)",
        200: "var(--yellow-200)",
        300: "var(--yellow-300)",
        400: "var(--yellow-400)",
        500: "var(--yellow-500)",
        600: "var(--yellow-600)",
      },
      green: {
        100: "var(--green-100)",
        200: "var(--green-200)",
        300: "var(--green-300)",
        400: "var(--green-400)",
        500: "var(--green-500)",
        600: "var(--green-600)",
      },
      blue: {
        100: "var(--blue-100)",
        200: "var(--blue-200)",
        300: "var(--blue-300)",
        400: "var(--blue-400)",
        500: "var(--blue-500)",
        600: "var(--blue-600)",
      },
    },
  },
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
