import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  redirects: {
    "blog/1": "/blog",
    "blog/2": "/blog",
    "blog/3": "/blog",
    "blog/4": "/blog",
    "blog/5": "/blog",
    "/blog/2021/wwdc-21-day-2-session-notes": "/blog/2021/wwdc-21-session-notes/",
    "/blog/2021/wwdc-21-day-3-session-notes": "/blog/2021/wwdc-21-session-notes/",
    "/blog/2021/wwdc-21-day-4-5-session-notes": "/blog/2021/wwdc-21-session-notes/",
    "/microblog/[...slug]": "/microblog",
  }
});
