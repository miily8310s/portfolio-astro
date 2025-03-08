import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://miruo-katanugu.com",
  integrations: [
    astroExpressiveCode({
      themes: ["dracula", "dracula-soft"],
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
