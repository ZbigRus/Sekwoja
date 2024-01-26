"use server";

export async function getPosts(limit?: number) {
  const query = `
        {
            posts${limit ? `(first: ${limit})` : ""} {
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`
    );
    console.log(response);
    const json = await response.json();
    return { data: json.data };
  } catch (err) {
    console.log(err);
    return {
      data: [],
    };
  }
}

export async function getSinglePost(slug: string) {
  const query = `
        {
          post(id: ${slug}, idType: URI) {
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`
    );
    const json = await response.json();
    return { data: json.data };
  } catch (err) {
    console.log(err);
    return {
      data: [],
    };
  }
}
