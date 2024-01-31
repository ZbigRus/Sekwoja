import { getQuery } from "../blog/actions";

export async function getImagesByType(type: string): Promise<QueryResponse> {
  const query = `
  {
    mediaItems(where: { title: "${type}"}) {
      nodes {
        altText
        sourceUrl
        srcSet
        sizes
      }
    }
  }
    `;
  const response = await getQuery(query);
  return response;
}
