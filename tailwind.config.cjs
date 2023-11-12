/** @type {import("tailwindcss").Config} */

const maxSideBarWidth = "20rem";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "main": `${maxSideBarWidth} 1fr`,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
