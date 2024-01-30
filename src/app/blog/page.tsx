import Blog from "@/components/home/blog";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Contact from "@/components/home/contact/contact";
import { getPosts } from "@/lib/blog/actions";

export default async function Page() {
  const { data } = await getPosts();
  return (
    <div>
      <Blog posts={data?.posts?.nodes || []} hideButton />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
