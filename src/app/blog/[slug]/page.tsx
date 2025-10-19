import type { Metadata } from 'next';
import CalendarIcon from '@/assets/icons/calendar';
import Banner from '@/components/home/banner';
import Blog from '@/components/home/blog';
import Contact from '@/components/home/contact/contact';
import Partners from '@/components/home/partners';
import { getPosts, getSinglePost } from '@/lib/blog/actions';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export async function generateMetadata({
  params: promiseParams,
}: Props): Promise<Metadata> {
  const params = await promiseParams;

  const { data, error } = await getSinglePost(params.slug);
  if (error) return {};
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
    title: `${data.post.title} | Sekwoja - Meble na wymiar`,
    openGraph: {
      title: `${data.post.title} | Sekwoja - Meble na wymiar`,
    },
  };
}

export async function generateStaticParams() {
  const { data } = await getPosts();
  const posts: Post[] = data?.posts?.nodes || [];
  return posts.map(({ uri }) => ({ slug: uri.replace(/\//g, '') }));
}

export default async function Page({ params: promiseParams }: Props) {
  const params = await promiseParams;

  const { slug } = params;
  const { data, error } = await getSinglePost(slug);

  if (error) throw new Error(error);

  const { date, title, content } = data.post;

  return (
    <div>
      <div className="bg-light flex-1 pt-8 px-0 sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw]">
        <div className="bg-white rounded-xl px-[8vw] sm:px-12 py-12 flex flex-col gap-4">
          <div className="flex items-center gap-2 fill-secondary">
            <CalendarIcon />
            <span className="text-sm opacity-80 font-medium">
              {new Date(date).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium">
            {title}
          </h1>
          <div
            id="content"
            className="flex flex-col gap-4"
            /* biome-ignore lint/security/noDangerouslySetInnerHtml: Data comes from WordPress */
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
      <Blog exclude={data.post.id} limit={3} suggestion />
      <Banner />
      <Partners />
      <Contact />
    </div>
  );
}
