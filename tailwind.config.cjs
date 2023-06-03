/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    default: {
      "primary-text": "ndex-text-white",
      "secondary-text": "ndex-text-grey",
      primary: "ndex-dark-background-default",
      secondary: "ndex-dark-background-4",
      "primary-variant": "ndex-dark-background-default-selected",
      "secondary-variant": "ndex-dark-background-grey",
      accent: "ndex-button-filled-dark",
      input: "ndex-input",
    },
    extend: {
      colors: {
        "ndex-light-background": {
          1: "#FFFFFF",
          2: "#EDEDED",
          3: "#D2D2D2",
        },
        "ndex-light-text": {
          primary: "#000000",
          secondary: "#A5A5A5",
        },
        "ndex-dark-background": {
          default: "#2F3437",
          grey: "#454B4E",
          "default-selected": "#5d6366",
          "grey-selected": "#979A9B",
        },
        "ndex-dark-text": {
          default: "#FFFFFF",
          grey: "#8D8F91",
        },
        "ndex-dark-table": {
          default: "#2F3437",
          header: "#454B4E",
          row: "#505558",
        },
        "ndex-light-table": {
          default: "#E1E1E1",
          row: "#E5E7EB",
          header: "#D1D5DB",
          kebab: "#747474",
        },
        "ndex-text": {
          white: "#FFFFFF",
          "column-selected": "#ABABAB",
          "column-hover": "#D0D0D0",
          grey: "#A5A5A6",
          "grey-variant": "#575757",
        },
        "ndex-button-text": {
          "filled-light": "#7A7A7A",
        },
        "ndex-button": {
          "bordered-green": "#4CAF50",
          "bordered-green-hover": "#3E8D42",
          "bordered-red": "#C52F00",
          "bordered-red-hover": "#AE4C2E",
          "bordered-grey": "#808086",
          "filled-dark": "#434343",
          "filled-light": "#D9D9D9",
          "active-light": "#C9C9C9",
        },
        "ndex-search": {
          default: "#f3f3ef",
          "toolbar-icon-hover": "#F8F8F8",
          "toolbar-icon-active": "#d0d0d0",
          "toolbar-icon-selected": "#EBEBEB",
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
};
