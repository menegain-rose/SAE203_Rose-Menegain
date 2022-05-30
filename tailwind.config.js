module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Color-Bouton": "#9a1418",
        "HeadFoot": "#0b0a0a",
        "Background": "#0f0e0e",
        "PrincipalyText": "#fef3ec",
        "SecondaryText": "#800d11",
        "terne-red": "#702123",
        "Dark_Bouton": "#630709",
        "Black-clear": "#171719"
      },

      "fontSize": {
        "base": "0.9375rem",
        "lg": "1rem",
        "xl": "1.0625rem",
        "2xl": "1.5625rem"
      },

      "fontFamily": {
        "rubik-mono-one": "Rubik Mono One",
        "raleway": "Raleway",
        "comfortaa": "Comfortaa"
      },

      "borderRadius": {
        "none": "0",
        "xs": "0.0625rem",
        "sm": "0.08233332633972168rem",
        "default": "0.08250001072883606rem",
        "lg": "0.10083332657814026rem",
        "xl": "0.10083333402872086rem",
        "2xl": "0.25rem",
        "3xl": "0.3125rem",
        "4xl": "0.4116666316986084rem",
        "5xl": "0.4125000238418579rem",
        "6xl": "0.4125000536441803rem",
        "7xl": "0.503333330154419rem",
        "8xl": "0.5041666030883789rem",
        "9xl": "0.5041666626930237rem",
        "10xl": "0.5041667222976685rem",
        "11xl": "2.1875rem",
        "12xl": "2.8271484375rem",
        "13xl": "5.0888671875rem",
        "full": "9999px"
      }
    },

  },
  plugins: [],
}
