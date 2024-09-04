import { getQuery } from "../blog/actions";

export async function getImages(
  type?: string,
  exclude?: string[]
): Promise<QueryResponse> {
  const query = `
  {
    mediaItems${
      type
        ? `(where: { title: "${type}"}, first: 100)`
        : exclude?.length
        ? `(where: { notIn: [${exclude?.map(
            (item) => `"${item}"`
          )}] }, first: 100)`
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
  const response = await getQuery(query, { next: { revalidate: 3600 } });
  return response;
}
