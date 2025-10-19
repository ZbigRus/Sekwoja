import { getPosts } from '@/lib/blog/actions';
import PostRef from './ref';

export default async function PostsList({
  suggestion,
  exclude,
}: {
  limit?: number;
  suggestion?: boolean;
  exclude?: string;
}) {
  const { data } = await getPosts(3, exclude);

  const posts = data?.posts?.nodes || [];

  return (
    <div className="flex flex-col md:grid grid-cols-3 mt-8 gap-8">
      {posts.length > 0 ? (
        (posts as Post[]).map((item) => (
          <PostRef {...item} suggestion={suggestion} key={item.uri} />
        ))
      ) : (
        <div className="col-span-full grid place-content-center min-h-48">
          <p>Nie znaleziono artykułów!</p>
        </div>
      )}
    </div>
  );
}
