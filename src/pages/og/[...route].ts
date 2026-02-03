import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

export const prerender = true;

const posts = await getCollection("blog");
const pages = Object.fromEntries(posts.map((post) => [post.slug, post]));

// @see https://www.hellobala.co/blog/creating-dynamic-og-images-in-astro
export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (path, page: any) => ({
    title: page.data.title || "miruoo's Blog",
    description:
      page.data.description ||
      "miruoo's Blog is Blog site about Web/Mobile Development tips",
    bgGradient: [
      // TODO: もう少し暗く洒落れた感じにしたい
      [78, 67, 118],
      [43, 88, 118],
    ],
    padding: 80,
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
        color: [228, 228, 231],
      },
    },
    logo: {
      path: "./public/logo.png",
      size: [100, 100],
    },
    fonts: [
      "./public/fonts/NotoSansJP-Regular.ttf",
      "./public/fonts/NotoSansJP-Bold.ttf",
    ],
  }),
});
