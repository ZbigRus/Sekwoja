import { getQuery } from "../blog/actions";

export async function getImages(
  type?: string,
  exclude?: string[]
): Promise<QueryResponse> {
  const query = `
  {
    mediaItems${
      type
        ? `(where: { title: "${type}"})`
        : exclude?.length
        ? `(where: { notIn: [${exclude?.map((item) => `"${item}"`)}] })`
        : ""
    } {
      nodes {
        id
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
