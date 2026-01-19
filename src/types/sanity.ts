export type SanityImage = {
  asset?: {
    url?: string;
  };
};

export type NewsItem = {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  excerpt?: string;
  publishedAt?: string;
  coverImage?: SanityImage;
};

export type SiteSettings = {
  _id?: string;
  title?: string;
  description?: string;
  ogImage?: SanityImage;
};
