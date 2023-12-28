import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "blog/[...number]": "/blog",
    "/blog/2020/this-week-i-learned-[...number]": {
      destination: "/blog",
      status: 301,
    },
    "/blog/2021/wwdc-21-day-2-session-notes": {
      destination: "/blog/2021/wwdc-21-session-notes/",
      status: 301,
    },
    "/blog/2021/wwdc-21-day-3-session-notes": {
      destination: "/blog/2021/wwdc-21-session-notes/",
      status: 301,
    },
    "/blog/2021/wwdc-21-day-4-5-session-notes": {
      destination: "/blog/2021/wwdc-21-session-notes/",
      status: 301,
    },
  }
});
