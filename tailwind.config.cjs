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
    },
    colors: {
      "cream": "#fffbf5",
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
