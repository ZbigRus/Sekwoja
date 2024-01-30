"use server";

async function getQuery(query: string, options?: RequestInit) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      options
    );
    const json = await response.json();
    return {
      data: json.data,
      error: json.errors?.length > 0 ? json.errors[0].message : null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: "Error",
      data: null,
    };
  }
}

export async function getPosts(limit?: number, exclude?: string) {
  const filter = limit ? `(first: ${limit})` : "";
  const query = `
        {
            posts${filter} {
                nodes {
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
        }
    `;
  const response = await getQuery(query);
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
