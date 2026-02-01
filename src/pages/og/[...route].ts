import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

export const prerender = true;

const posts = await getCollection("blog");
const pages = Object.fromEntries(posts.map((post) => [post.slug, post]));

// FIXME: デザインの修正
// @see https://www.hellobala.co/blog/creating-dynamic-og-images-in-astro
export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (path, page: any) => ({
    title: page.data.title,
    description: page.data.description,
    bgGradient: [
      [24, 24, 27],
      [39, 39, 42],
    ],
    border: { color: [59, 130, 246], width: 10 }, // Brand blue
    padding: 60,
    font: {
      title: {
        size: 70,
        families: ["NotoSansJP-Bold"],
        weight: "Bold",
        color: [255, 255, 255],
      },
      description: {
        size: 40,
        families: ["NotoSansJP-Regular"],
        color: [161, 161, 170],
      },
    },
    fonts: [
      "./public/fonts/NotoSansJP-Regular.ttf",
      "./public/fonts/NotoSansJP-Bold.ttf",
    ],
  }),
});
