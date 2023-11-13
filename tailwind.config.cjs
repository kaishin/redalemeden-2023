/** @type {import("tailwindcss").Config} */

const maxSideBarWidth = "18rem";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "main": `${maxSideBarWidth} 1fr`,
      },
      gridTemplateRows: {
        "main": "auto 1fr auto",
      },
      colors: {
        "cream": "#fffbf5",
        "asphalt": "#191f2d",
        "banana": "#ffd080",
        "amethyst": "#4a20ac",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
