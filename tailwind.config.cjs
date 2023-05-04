/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    default: {
      "primary-text": "ndex-text-white",
      "secondary-text": "ndex-text-grey",
      primary: "ndex-background-1",
      secondary: "ndex-background-4",
      "primary-variant": "ndex-background-3",
      "secondary-variant": "ndex-background-2",
      accent: "ndex-button-filled-dark",
      input: "ndex-input",
    },
    extend: {
      colors: {
        "ndex-light-background": {
          1: "#FFFFFF",
          2: "#EDEDED"
        },
        "ndex-light-text": {
          "primary": "#000000",
          "secondary": "#A5A5A5"
        },
        "ndex-background": {
          1: "#615D75",
          2: "#49475A",
          3: "#545068",
          4: "#3B3A45",
        },
        "ndex-table": {
          "default": "#49475A",
          "header": "#545068",
          "row": "#615D75"
        },
        "ndex-text": {
          white: "#FFFFFF",
          "column-selected": "#ABABAB",
          "column-hover": "#D0D0D0",
          grey: "#A5A5A6",
          "grey-variant": "#575757",
        },
        "ndex-button-text": {
          "filled-light": "#6A6A6A",
        },
        "ndex-button": {
          "bordered-green": "#4CAF50",
          "bordered-green-hover" : "#3E7E41",
          "bordered-red": "#C52F00",
          "bordered-red-hover": "#AE4C2E",
          "bordered-grey": "#808086",
          "filled-dark": "#434343",
          "filled-light": "#D9D9D9",
          "active-light": "#C9C9C9",
        },
        "ndex-search": {
          "default":"#f3f3ef",
          "toolbar-icon-hover": "#F8F8F8",
          "toolbar-icon-active": "#d0d0d0",
          "toolbar-icon-selected": "#EBEBEB"
        },
        "ndex-login-background": {
          1: "#C19BDE",
          2: "#904896",
          3: "#0F073E",
        },
        "ndex-input": {
          DEFAULT: "#434253",
          border: "#82808D",
        },
        "custom-green": "#4CAF50",
      },
      letterSpacing: {
        title: "-0.1em",
        logo: "0em",
      },
    },
  },
}
