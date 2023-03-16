/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    default: {
      primary_text: "#FFFFFF",
      secondary_text: "#A5A5A6",
      primary: "#615D75",
      secondary: "#3B3A45",
      variant_primary: "#545068",
      variant_secondary: "#49475A",
      accent: "#434343",
      neutral: "#A5A5A6",
    },
    extend: {
      colors: {
        background: "#615D75",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#615D75",
          secondary: "#3B3A45",
          variant_primary: "#545068",
          variant_secondary: "#49475A",
          accent: "#434343",
          neutral: "#A5A5A6",
          white: "#FFFFFF"
        },
        colors: {
          background: "#615D75",
        }
      },
    ],
  },
}
