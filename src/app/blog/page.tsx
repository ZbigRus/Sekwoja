import Blog from "@/components/home/blog";
import { getPosts } from "@/lib/blog/actions";

export default async function Page() {
  const { data } = await getPosts();
  return <Blog posts={data?.posts?.nodes || []} hideButton />;
}
