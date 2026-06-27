// Update this to feature a different post on the homepage.
// slug must match a filename in src/content/posts/ (without .md).
export type FeaturedPost = {
  title: string
  slug: string
  pullQuote: string
  description: string
}

export const featuredPost: FeaturedPost = {
  title: "On Beginning",
  slug: "on-beginning",
  pullQuote: '"I didn\'t know I was holding all of that."',
  description:
    "On the quiet moment a person realises they've been carrying something alone, and that they don't have to anymore.",
}
