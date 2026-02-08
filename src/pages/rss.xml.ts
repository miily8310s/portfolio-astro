import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  const sortedPosts = blog.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: "miruoo's Blog",
    description: "miruoo's Blog is Blog site about Web/Mobile Development tips",
    site: context.site?.origin ?? "",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
