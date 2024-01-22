type NavLink = {
  title: string;
  href: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  link: string;
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
  featuredImage: { node: FeaturedImage };
};

type FeaturedImage = {
  sourceUrl: string;
};
