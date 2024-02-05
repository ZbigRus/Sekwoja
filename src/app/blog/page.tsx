import Blog from "@/components/home/blog";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Contact from "@/components/home/contact/contact";
import { getPosts } from "@/lib/blog/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sekwoja - Meble na wymiar",
  openGraph: {
    title: "Blog | Sekwoja - Meble na wymiar",
  },
};

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
