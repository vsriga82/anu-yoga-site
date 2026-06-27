export type Testimonial = {
  name: string
  label: string
  quote: string
  photo?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya",
    label: "Hormonal health · PCOD",
    quote:
      "This guidance has been life-changing. I haven't missed a single period since starting, my health has improved, and I lost 12kg in a sustainable way. She didn't just train me — she helped me heal and rediscover myself.",
  },
  {
    name: "Jayashree",
    label: "Chronic pain · mobility",
    quote:
      "I'd had spur pain in both legs for a year. Now the pain has reduced so much that I can walk fast for an hour every day. I feel more relaxed and at peace.",
  },
]
