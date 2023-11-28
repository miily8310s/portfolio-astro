import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
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
  integrations: [
    tailwind(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    mdx(),
  ],
});
