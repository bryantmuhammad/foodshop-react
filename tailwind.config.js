/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-teal": "#7EB693",
        "blue-teal": "#274C5B",
        "yellow-teal": "#EFD372",
        "silver-light": "#D4D4D4",
        "white-primary": "#F9F8F8",
        "white-secondary": "#EFF6F1",
        "silver-teal": "#525C60",
      },
      fontSize: {
        "heading-one": [
          "4.375rem",
          {
            fontWeight: "800",
          },
        ],
        "heading-two": [
          "3.125rem",
          {
            fontWeight: "800",
          },
        ],
        "heading-three": [
          "2.5rem",
          {
            fontWeight: "800",
          },
        ],
        "heading-four": [
          "2.1875em",
          {
            fontWeight: "800",
          },
        ],
        "heading-five": [
          "30px",
          {
            fontWeight: "800",
          },
        ],
        "heading-six": [
          "25px",
          {
            fontWeight: "800",
            color: "blue-teal",
          },
        ],
        paragraph: [
          "18px",
          {
            fontWeight: 400,
          },
        ],
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        yellowtail: ["Yellowtail", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      gridTemplateColumns: {},
    },
  },
  plugins: [],
};
