// Update this to feature a different post on the homepage.
// slug must match a filename in src/content/posts/ (without .md).
export type FeaturedPost = {
  title: string
  slug: string
  pullQuote: string
  description: string
}

export const featuredPost: FeaturedPost = {
  title: "Do You Need to Be Flexible to Start Yoga?",
  slug: "do-you-need-to-be-flexible-to-start-yoga",
  pullQuote:
    '"Flexibility is what a practice gives you. It was never what the practice asked for."',
  description:
    "No — flexibility is what a practice gives you, not what it asks of you. A gentle answer for anyone who feels too stiff to begin.",
}
