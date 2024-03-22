/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        border:
          "linear-gradient(51deg, #fffaec, #fffaec, #fffaec, #0a8270, #fffaec, #fffaec, #fffaec)",
      },
      colors: {
        bgPrimary: "#fffaec",
        bgSecondary: "#0a1614",
        bgThird: "#0a8270",
        btnPrimary: "#0a8270",
        btnSecondary: "#e5c485",
        textPrimary: "#1e413b",
        textSecondary: "#5d6460",
        textThird: "white",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
