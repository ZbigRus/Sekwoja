"use server";

export async function getRecentPosts() {
  const query = `
        {
            posts(first: 3) {
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
    const json = await response.json();
    return { data: json.data };
  } catch (err) {
    console.log(err);
    return {
      data: [],
    };
  }
}
