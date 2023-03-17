/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    default: {
      "primary-text": "ndex-text-white",
      "secondary-text": "ndex-text-grey",
      "primary": "ndex-background-1",
      "secondary": "ndex-background-4",
      "primary-variant": "ndex-background-3",
      "secondary-variant": "ndex-background-2",
      "accent": "ndex-button-filled-dark",
      "input": "ndex-input"
    },
    extend: {
      colors: {
        "ndex-background": {
          1: "#615D75",
          2: "#49475A",
          3: "#545068",
          4: "#3B3A45"
        },
        "ndex-text": {
          "white": "#FFFFFF",
          "column-unselected":  "#ABABAB",
          "grey": "A5A5A6",
          "grey-variant": "575757"
        },
        "ndex-button": {
          "bordered-green": "#4CAF50",
          "bordered-red": "#C52F00",
          "bordered-grey": "#808086",
          "filled-dark": "#434343",
          "filled-light": "#C3C3C3",
        },
        "ndex-input": {
          DEFAULT: "#434253"
        },
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          "primary-text": "#FFFFFF",
          "secondary-text": "#A5A5A6",
          "primary": "#615D75",
          "secondary": "#3B3A45",
          "primary-variant": "#545068",
          "secondary-variant": "#49475A",
          "accent": "#434343",
        },
        "ndex-background": {
          1: "#615D75",
          2: "#49475A",
          3: "#545068",
          4: "#3B3A45"
        },
        "ndex-text": {
          "white": "#FFFFFF",
          "column-unselected":  "#ABABAB",
          "grey": "A5A5A6",
          "grey-variant": "575757"
        },
        "ndex-button": {
          "bordered-green": "#4CAF50",
          "bordered-red": "#C52F00",
          "bordered-grey": "#808086",
          "filled-dark": "#434343",
          "filled-light": "#C3C3C3",
        },
        "ndex-input": {
          DEFAULT: "#434253"
        },
      },
    ],
  },
}
