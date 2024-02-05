"use server";

export async function getQuery(
  query: string,
  options?: RequestInit
): Promise<QueryResponse> {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL
    }?query=${encodeURIComponent(query)}`;
    const response = await fetch(url, options);
    const json = await response.json();
    return {
      data: json.data,
      error: json.errors?.length > 0 ? json.errors[0].message : null,
    };
  } catch (err) {
    console.log({ err });
    return {
      error: "Error",
      data: null,
    };
  }
}

export async function getPosts(limit?: number, exclude?: string) {
  const filter = limit
    ? exclude
      ? `(first: ${limit}, where: { notIn: "${exclude}" })`
      : `(first: ${limit})`
    : exclude
    ? `(where: { notIn: "${exclude}" })`
    : "";
  const query = `
  {
      posts${filter} {
          nodes {
              title,
              content,
              uri,
              date,
              excerpt,
              featuredImage {
                node {
                  sourceUrl
                }
              }
          }
      }
  }
  `;

  const response = await getQuery(query, { next: { revalidate: 3600 } });
  return response;
}

export async function getSinglePost(slug: string) {
  const query = `
        {
          post(id: "${slug}", idType: URI) {
            id,
            title,
            content,
            uri,
            date,
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
    `;

  const response = await getQuery(query);
  return response;
}
