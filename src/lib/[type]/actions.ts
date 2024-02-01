import { getQuery } from "../blog/actions";

export async function getImages(type?: string): Promise<QueryResponse> {
  const query = `
  {
    mediaItems${type ? `(where: { title: "${type}"})` : ""} {
      nodes {
        altText
        sourceUrl
        srcSet
        sizes
        caption
      }
    }
  }
    `;
  const response = await getQuery(query);
  return response;
}
