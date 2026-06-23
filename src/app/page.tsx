import { Leaf, ArrowRight, CalendarHeart, Sparkles, CheckCircle2 } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-beige/80 backdrop-blur-md border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sage-700">
            <Leaf className="w-6 h-6" />
            <span className="font-serif font-semibold text-xl tracking-wide">Anuradha Yoga</span>
          </div>
          <a href="#booking" className="text-sm font-medium text-sage-700 hover:text-sage-600 transition-colors">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fbf9f6]">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">
          <div className="lg:col-span-5 lg:pr-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Specialized Therapeutic Yoga</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-slate-800 leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Restorative, Therapeutic Yoga for <span className="text-sage-600 italic">Deep Healing.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              A practice that begins by listening. Gentle, personalized support for hormonal health and chronic conditions — no prior yoga experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-full font-medium hover:bg-sage-700 transition-all shadow-lg shadow-sage-500/20 hover:shadow-xl hover:-translate-y-0.5">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#pillars" className="inline-flex items-center justify-center gap-2 text-slate-600 px-8 py-4 rounded-full font-medium hover:text-sage-700 transition-all underline-offset-4 hover:underline">
                Explore the Practice
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 relative opacity-0 animate-fade-in pointer-events-none z-0" style={{ animationDelay: "200ms" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sage-200/40 rounded-full blur-[100px] -z-10"></div>
            <div className="relative h-[450px] lg:h-[650px] w-full flex items-center justify-center overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-white shadow-2xl shadow-sage-900/15 border border-sage-50/50">
              <img
                src="/hero-art-v2.png"
                alt="Abstract watercolor evoking healing and soft energy"
                className="w-full h-full object-cover scale-[1.1] lg:scale-[1.25] hover:scale-[1.3] transition-transform duration-1000 origin-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healing Begins With Being Heard */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-800 mb-10">Healing begins with being heard.</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              When you're living with a chronic condition, you get used to being <em>managed</em>. Tests, advice, routines — but rarely the simple question of how it actually feels to carry it, day after day.
            </p>
            <p>
              Here, that's where we start. Before any posture or breath, there is a conversation: your history, your symptoms, what your body has been through, and what you hope to feel again.
            </p>
            <p>
              Many people tell me they feel lighter simply from being truly listened to. That relief isn't separate from the healing — it's where the healing begins.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-800 mb-12">A practice designed around one person — you.</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-serif text-xl font-medium">1</div>
              <div>
                <h4 className="text-xl font-medium text-slate-800 mb-2">A conversation, first.</h4>
                <p className="text-slate-600 leading-relaxed">We begin by talking. You share what you're living with; I listen, without rushing toward an answer. There's no pressure and no commitment — just space to be understood.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-serif text-xl font-medium">2</div>
              <div>
                <h4 className="text-xl font-medium text-slate-800 mb-2">Your full picture.</h4>
                <p className="text-slate-600 leading-relaxed">Together we look at your health history, your symptoms, and the rhythms of your daily life, so the practice fits your body as it actually is.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-serif text-xl font-medium">3</div>
              <div>
                <h4 className="text-xl font-medium text-slate-800 mb-2">A practice built for you.</h4>
                <p className="text-slate-600 leading-relaxed">You receive a personalized sequence of movement, breathwork, and deep rest — adaptive, safe, and shaped entirely around your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Work Together */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-800 mb-12 text-center">Two ways to begin — both personal.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-beige/30 p-10 rounded-3xl border border-sage-100">
              <h3 className="text-2xl font-serif text-slate-800 mb-4">One-to-One</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Fully private sessions, designed entirely around your body, your history, and your pace. The deepest, most tailored way to work together — in person or remotely.
              </p>
              <p className="text-sm text-sage-700 italic">Not sure which is right for you? We'll find out in our first conversation.</p>
            </div>
            <div className="bg-beige/30 p-10 rounded-3xl border border-sage-100">
              <h3 className="text-2xl font-serif text-slate-800 mb-4">Small Groups</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Where it fits, I bring together a small circle of people working toward similar goals. Kept intentionally small, so every person is still seen — with the warmth and shared encouragement that a group brings.
              </p>
              <p className="text-sm text-sage-700 italic">Not sure which is right for you? We'll find out in our first conversation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Help With */}
      <section id="pillars" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[800px] pointer-events-none opacity-40 z-0 flex justify-center">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-full text-sage-100 fill-current opacity-70 blur-3xl mix-blend-multiply">
            <path d="M453,289.5Q346,329,267.5,417Q189,505,257,605.5Q325,706,442.5,739.5Q560,773,663,711Q766,649,788.5,528.5Q811,408,727.5,329Q644,250,560,250Q476,250,453,289.5Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-slate-800 mb-6">Care for the whole person.</h2>
            <p className="text-lg text-slate-600">Specialized support for the conditions that shape daily life — always alongside your medical care, never in place of it.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 — Women's Hormonal Health */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-terracotta transition-transform group-hover:scale-110 duration-500">
                  <path d="M50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C46.5 20 45 25 45 30C45 40 50 45 55 50C60 55 55 60 50 60C40 60 30 55 30 50C30 35 25 30 20 30C20 46.5685 33.4315 80 50 80Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 80C50 80 60 70 60 50C60 30 50 20 50 20C50 20 40 30 40 50C40 70 50 80 50 80Z" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="50" cy="50" r="4" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Women's Hormonal Health</h3>
              <p className="text-slate-600 leading-relaxed">Gentle, restorative practices to support regular cycles, ease menstrual discomfort, and bring steadiness through hormonal change — including PCOD and PMS.</p>
            </div>

            {/* Card 2 — Diabetes & Hypertension */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-600 transition-transform group-hover:scale-110 duration-500">
                  <path d="M50 20C50 20 25 50 25 65C25 78.8071 36.1929 90 50 90C63.8071 90 75 78.8071 75 65C75 50 50 20 50 20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M40 50C40 50 35 60 40 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M50 40C60 50 65 60 55 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="70" r="3" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Living With Diabetes & Hypertension</h3>
              <p className="text-slate-600 leading-relaxed">Mindful, sustainable movement that supports an active, balanced lifestyle and complements the care your doctor provides.</p>
            </div>

            {/* Card 3 — Breathing */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-terracotta transition-transform group-hover:scale-110 duration-500">
                  <path d="M20 40C30 35 50 30 70 40C80 45 85 55 75 60C65 65 55 55 60 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 60C30 65 45 70 65 60C75 55 80 45 70 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
                  <path d="M30 25C45 20 60 25 75 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Easier, Fuller Breathing</h3>
              <p className="text-slate-600 leading-relaxed">Clinical breathwork (Pranayama) to support calmer, more open breathing — helpful for those living with asthma and breath-related anxiety.</p>
            </div>

            {/* Card 4 — Spondylitis & Chronic Pain */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-600 transition-transform group-hover:scale-110 duration-500">
                  <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <rect x="34" y="18" width="32" height="13" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
                  <rect x="34" y="37" width="32" height="13" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
                  <rect x="34" y="56" width="32" height="13" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
                  <rect x="34" y="75" width="32" height="13" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Spondylitis & Chronic Pain</h3>
              <p className="text-slate-600 leading-relaxed">Slow, alignment-focused movement to ease stiffness, support mobility, and help you feel more at home in your body.</p>
            </div>

            {/* Card 5 — Active Aging */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-terracotta transition-transform group-hover:scale-110 duration-500">
                  <path d="M50 82C50 82 28 62 28 42C28 31 38 25 50 25C62 25 72 31 72 42C72 62 50 82 50 82Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
                  <path d="M50 82C50 82 18 67 13 46C10 35 18 27 28 30C38 33 50 46 50 46Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
                  <path d="M50 82C50 82 82 67 87 46C90 35 82 27 72 30C62 33 50 46 50 46Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
                  <circle cx="50" cy="60" r="5" fill="currentColor" fillOpacity="0.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Active Aging (60+)</h3>
              <p className="text-slate-600 leading-relaxed">Gentle sequences for balance, joint mobility, and independence — adaptive to every stage of life.</p>
            </div>

            {/* Card 6 — Stress & Deep Rest */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-600 transition-transform group-hover:scale-110 duration-500">
                  <path d="M58 18C46 21 34 33 34 52C34 71 46 82 58 82C36 82 14 67 14 52C14 37 36 18 58 18Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
                  <circle cx="72" cy="24" r="3.5" fill="currentColor" />
                  <circle cx="82" cy="40" r="2.5" fill="currentColor" fillOpacity="0.6" />
                  <circle cx="78" cy="57" r="2" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Stress & Deep Rest</h3>
              <p className="text-slate-600 leading-relaxed">Yoga Nidra and meditation for those who simply need to slow down, release, and be held in a calm, unhurried space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Anuradha */}
      <section id="about" className="py-24 bg-beige/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-start-1 lg:col-end-6 lg:row-start-1 relative h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/20 z-10 mb-8 lg:mb-0">
              <img
                src="/anuradha-photo-v4.jpg"
                alt="Anuradha Sriganesh, Yoga Therapist"
                className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
              />
            </div>

            <div className="lg:col-start-5 lg:col-end-13 lg:row-start-1 bg-white p-8 sm:p-12 lg:py-16 lg:pr-16 lg:pl-32 rounded-3xl shadow-xl shadow-sage-900/5 z-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>Meet Your Therapist</span>
              </div>
              <h2 className="text-4xl font-serif text-slate-800 mb-6">Hi, I'm Anuradha Sriganesh.</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  I'm a Yoga Instructor and Therapist with a focus on women's holistic health and the care of chronic lifestyle conditions. My work combines the mindfulness of the <span className="italic">Sri Sri</span> lineage with the therapeutic protocols of <span className="italic">Shiv Darshan</span> — a foundation built on safe, alignment-focused movement and breath.
                </p>
                <p>
                  Many people come to me first simply to talk — to be heard by someone who isn't rushing them toward a solution. Over time I've come to believe that's where healing truly starts: in feeling understood. So every practice I design begins with listening.
                </p>
                <p>
                  I work both one-to-one and in small, intentional groups — in person and remotely with clients around the world. Whichever form we choose, the practice is designed around real people and real needs, never a fixed class or a standard routine.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800 uppercase tracking-wider text-sm mb-4">Education & Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>Teacher Training Course 1 (TTC-1) in Yoga Therapy — Shiv Darshan Yoga Vidyalaya</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>200-Hour Yoga Teacher Training (RYT-200) — Sri Sri School of Yoga</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>Focus areas: women's wellness, chronic pain, and adaptive movement for every stage of life</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Healing */}
      <section className="py-24 bg-sage-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-slate-800 mb-4">Stories of healing.</h2>
            <p className="text-lg text-slate-600">In their own words.</p>
          </div>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Begin With a Conversation */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pt-8">
              <CalendarHeart className="w-12 h-12 text-sage-600 mb-6" />
              <h2 className="text-4xl font-serif text-slate-800 mb-6">Let's start with a conversation.</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                You don't need to decide anything yet. Book a free consultation, and we'll simply talk — about what you're living with, what you hope to feel, and whether this practice is right for you.
              </p>
            </div>
            <div className="bg-beige/40 p-8 rounded-3xl border border-sage-100 shadow-xl shadow-sage-900/5">
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center px-6">
        <p className="mb-3">© {new Date().getFullYear()} Anuradha Yoga Therapy. All rights reserved.</p>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          Therapeutic yoga is a complement to, not a replacement for, professional medical care. Please consult your doctor regarding any health condition.
        </p>
      </footer>
    </main>
  );
}

const testimonials = [
  {
    quote: "This guidance has been life-changing. I haven't missed a single period since starting, my health has improved, and I lost 12kg in a sustainable way. She didn't just train me — she helped me heal and rediscover myself.",
    name: "Hormonal Health Client",
    outcome: "Restored Cycle & Sustainable Weight Loss"
  },
  {
    quote: "I'd had spur pain in both legs for a year. Now the pain has reduced so much that I can walk fast for an hour every day. I feel more relaxed and at peace.",
    name: "Chronic Pain & Mobility Client",
    outcome: "Reduced Pain & Improved Mobility"
  },
  {
    quote: "As someone with asthma, I used to be anxious about any exertion. Her gentle approach to breathing has helped me feel far more confident and at ease.",
    name: "Breathing & Wellness Client",
    outcome: "Breathing Confidence & Ease"
  },
  {
    quote: "My fasting blood sugar has been steadier since I began this practice. It's been a wonderful complement to my medical routine.",
    name: "Metabolic Health Client",
    outcome: "Steadier Blood Sugar Levels"
  },
  {
    quote: "The intake conversation made me feel truly seen. She understood my full history and built something that felt completely safe for my body.",
    name: "Senior Client (60+)",
    outcome: "Safe, Adaptive Movement"
  }
];
