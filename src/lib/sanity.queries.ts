export const newsListQuery = `*[_type == "news"] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage {
    asset-> {
      url
    }
  }
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  coverImage {
    asset-> {
      url
    }
  }
}`;

export const settingsQuery = `*[_type == "settings"][0] {
  _id,
  title,
  description,
  ogImage {
    asset-> {
      url
    }
  }
}`;
