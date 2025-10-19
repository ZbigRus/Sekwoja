/* biome-ignore-all lint/correctness/noUnusedVariables: The variables are used in the code */
/* biome-ignore-all lint/suspicious/noExplicitAny: This should be removed in the future */

type NavLink = {
  title: string;
  href: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  link: string;
  hero: Section;
  desc: Omit<Section, 'media'>;
};

type Section = {
  title: string;
  content: React.ReactNode;
  media: string[];
};

type Opinion = {
  content: string;
  author: string;
  rating: string;
};

type Advantage = {
  title: string;
  icon: React.ReactNode;
};

type Post = {
  title: string;
  content: string;
  uri: string;
  date: Date;
  excerpt: string;
  featuredImage: { node: FeaturedImage };
};

type FeaturedImage = {
  sourceUrl: string;
};

type QueryResponse = {
  data: any;
  error: string;
};

type Media = {
  sourceUrl: string;
  altText: string;
  srcSet: string;
  sizes: string;
  title: string;
  caption: string;
};
