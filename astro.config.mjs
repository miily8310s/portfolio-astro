import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import astroExpressiveCode from "astro-expressive-code";

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
const astroExpressiveCodeOptions = {
  // Example: Change the themes
  themes: "dracula",
};

// https://astro.build/config
export default defineConfig({
  site: "https://miruo-katanugu.com",
  integrations: [astroExpressiveCode(astroExpressiveCodeOptions), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
