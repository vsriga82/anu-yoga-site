export const showRYT200 = false

const baseCerts = [
  "200-Hour Certificate Course in Yoga — Sri Sri School of Yoga (The Art of Living), accredited by the Indian Yoga Association",
  "Yoga Therapy Teacher Training (TTC-1, 100 hours) — Shiv Darshan Yoga Vidyalaya, Chennai",
]

export const certifications = showRYT200
  ? [...baseCerts, "RYT-200 — Yoga Alliance (via Sri Sri School of Yoga)"]
  : baseCerts

export const credentialSummary =
  "Certified Yoga Teacher & Therapist — trained by Sri Sri School of Yoga (The Art of Living) and Shiv Darshan Yoga Vidyalaya. Accredited by the Indian Yoga Association."
