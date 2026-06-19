import { Leaf, Heart, Wind, Droplets, ArrowRight, Star, CalendarHeart, Sparkles, CheckCircle2 } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation (optional, but good for structure) */}
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
        {/* Soft paper-grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        {/* Warm subtle glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">
          <div className="lg:col-span-5 lg:pr-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Specialized Therapeutic Practice</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-slate-800 leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Natural, Therapeutic Yoga for <span className="text-sage-600 italic">Deep Healing</span>.
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              Gentle, accessible, and specialized support for physical and hormonal wellness. No prior yoga experience required. Discover a practice designed around your unique body and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-full font-medium hover:bg-sage-700 transition-all shadow-lg shadow-sage-500/20 hover:shadow-xl hover:-translate-y-0.5">
                Apply for a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#pillars" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full font-medium border border-sage-100 hover:border-sage-200 hover:bg-sage-50 transition-all">
                Explore Therapies
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 relative opacity-0 animate-fade-in pointer-events-none z-0" style={{ animationDelay: "200ms" }}>
            {/* Soft decorative glow behind the art */}
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

      {/* The Therapeutic Pillars */}
      <section id="pillars" className="py-32 bg-white relative overflow-hidden">
        {/* Soft abstract organic watercolor-style background shape */}
        <div className="absolute top-1/4 left-0 w-full h-[800px] pointer-events-none opacity-40 z-0 flex justify-center">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-full text-sage-100 fill-current opacity-70 blur-3xl mix-blend-multiply">
            <path d="M453,289.5Q346,329,267.5,417Q189,505,257,605.5Q325,706,442.5,739.5Q560,773,663,711Q766,649,788.5,528.5Q811,408,727.5,329Q644,250,560,250Q476,250,453,289.5Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-slate-800 mb-6">The Therapeutic Pillars</h2>
            <p className="text-lg text-slate-600">Targeted, evidence-based practices designed to address specific physiological and hormonal imbalances.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                {/* Hand-drawn style Moon/Lotus */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-terracotta transition-transform group-hover:scale-110 duration-500">
                  <path d="M50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C46.5 20 45 25 45 30C45 40 50 45 55 50C60 55 55 60 50 60C40 60 30 55 30 50C30 35 25 30 20 30C20 46.5685 33.4315 80 50 80Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M50 80C50 80 60 70 60 50C60 30 50 20 50 20C50 20 40 30 40 50C40 70 50 80 50 80Z" fill="currentColor" fillOpacity="0.2"/>
                  <circle cx="50" cy="50" r="4" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Menstrual Health</h3>
              <p className="text-slate-600 leading-relaxed">Easing dysmenorrhea, regulating cycles, and alleviating PMS symptoms through restorative postures.</p>
            </div>
            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                {/* Hand-drawn style Botanical Sprig */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-600 transition-transform group-hover:scale-110 duration-500">
                  <path d="M30 80C40 70 50 50 50 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M50 40C60 30 75 35 75 45C75 55 60 50 50 40Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M45 60C30 50 20 60 25 70C30 80 40 70 45 60Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M50 20C60 10 70 15 70 25C70 35 60 30 50 20Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">PCOS Management</h3>
              <p className="text-slate-600 leading-relaxed">Hormone balancing and stress reduction utilizing targeted breathwork and pelvic opening sequences.</p>
            </div>
            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                {/* Hand-drawn style Seed/Droplet */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-terracotta transition-transform group-hover:scale-110 duration-500">
                  <path d="M50 20C50 20 25 50 25 65C25 78.8071 36.1929 90 50 90C63.8071 90 75 78.8071 75 65C75 50 50 20 50 20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
                  <path d="M40 50C40 50 35 60 40 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M50 40C60 50 65 60 55 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="50" cy="70" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Diabetic Care</h3>
              <p className="text-slate-600 leading-relaxed">Mindful movement aimed at improving insulin sensitivity, stimulating digestion, and regulating blood sugar.</p>
            </div>
            {/* Card 4 */}
            <div className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-sage-100 shadow-xl shadow-sage-900/5 hover:bg-white hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8">
                {/* Hand-drawn style Wind/Breeze */}
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sage-600 transition-transform group-hover:scale-110 duration-500">
                  <path d="M20 40C30 35 50 30 70 40C80 45 85 55 75 60C65 65 55 55 60 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 60C30 65 45 70 65 60C75 55 80 45 70 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
                  <path d="M30 25C45 20 60 25 75 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-800 mb-4">Asthma Relief</h3>
              <p className="text-slate-600 leading-relaxed">Expanding lung capacity and reducing dependency through clinical Pranayama (breathing exercises).</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Therapist */}
      <section id="about" className="py-24 bg-beige/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Block: Spans columns 1 to 5 */}
            <div className="lg:col-start-1 lg:col-end-6 lg:row-start-1 relative h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/20 z-10 mb-8 lg:mb-0">
              <img 
                src="/anuradha-photo-v4.jpg"
                alt="Anuradha Sridharan, Yoga Therapist"
                className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
              />
            </div>
            
            {/* Text Block: Spans columns 5 to 12, creating an overlap on column 5 */}
            <div className="lg:col-start-5 lg:col-end-13 lg:row-start-1 bg-white p-8 sm:p-12 lg:py-16 lg:pr-16 lg:pl-32 rounded-3xl shadow-xl shadow-sage-900/5 z-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>Meet Your Therapist</span>
              </div>
              <h2 className="text-4xl font-serif text-slate-800 mb-6">Hi, I'm Anuradha Sridharan.</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  I am a dedicated Yoga Instructor and Therapist with a specialized focus on Women's Holistic Health. My mission is to help individuals reclaim their health through safe, alignment-focused movement and lifestyle guidance.
                </p>
                <p>
                  By combining the traditional mindfulness of the <span className="italic">Sri Sri</span> lineage with advanced therapeutic protocols from <span className="italic">Shiv Darshan</span>, I provide personalized care for chronic lifestyle conditions. My approach integrates breath-led techniques and deep relaxation to ensure every session is safe, adaptive, and deeply restorative.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800 uppercase tracking-wider text-sm mb-4">Education & Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>Yoga Therapy Certification (TTC-1) – Shiv Darshan</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>200-Hour Yoga Teacher (RYT-200) – Sri Sri School of Yoga</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0" />
                    <span>Specialized in Women's Wellness & Chronic Pain Recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Trust (Testimonials) */}
      <section className="py-24 bg-sage-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-slate-800 mb-4">Stories of Healing</h2>
            <p className="text-lg text-slate-600">Hear from clients who have transformed their well-being through specialized therapy.</p>
          </div>
        </div>

        {/* Interactive Testimonial Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* The Intake & Booking Section */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-slate-800 mb-6">Begin Your Journey to Healing</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our approach is deeply personalized. We begin with a comprehensive understanding of your health history to design a practice exclusively for you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-serif text-xl font-medium">1</div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Complete Health History</h4>
                    <p className="text-slate-600">Share your medical background, symptoms, and lifestyle to help us understand your unique physiology.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-serif text-xl font-medium">2</div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Discovery Call</h4>
                    <p className="text-slate-600">A compassionate conversation to discuss your goals, answer questions, and ensure our therapy aligns with your needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-serif text-xl font-medium">3</div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2">Customized Therapeutic Plan</h4>
                    <p className="text-slate-600">Receive a tailored yoga and breathwork protocol designed specifically for your healing journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-beige/40 p-8 rounded-3xl border border-sage-100 shadow-xl shadow-sage-900/5">
              <div className="text-center mb-8">
                <CalendarHeart className="w-12 h-12 mx-auto text-sage-600 mb-4" />
                <h3 className="text-2xl font-serif text-slate-800">Schedule Your Consultation</h3>
                <p className="text-slate-600 mt-2">Select a time that works for you.</p>
              </div>
              
              {/* Placeholder for Booking Widget */}
              <div 
                id="calendly-booking-widget" 
                className="w-full h-[400px] bg-white rounded-2xl border border-dashed border-sage-300 flex flex-col items-center justify-center text-sage-500 p-6 text-center"
              >
                <p className="font-medium mb-2">Booking Widget Placeholder</p>
                <p className="text-sm">Drop your Calendly or Typeform embed code here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>© {new Date().getFullYear()} Anuradha Yoga Therapy. All rights reserved.</p>
      </footer>
    </main>
  );
}

const testimonials = [
  {
    quote: "This guidance has been life-changing. I have not missed a single period since starting, my health has improved significantly, and I lost 12kg in a sustainable way. She didn't just train me; she helped me heal and rediscover myself.",
    name: "Hormonal Health Client",
    outcome: "Restored Cycle & 12kg Weight Loss"
  },
  {
    quote: "Before joining, I had spur pain in both legs for one year... Now my pain has reduced so much that I can walk fast for an hour every day. I feel more relaxed and peaceful.",
    name: "Mobility Client",
    outcome: "Chronic Heel Spur Recovery"
  },
  {
    quote: "As an asthmatic, I was terrified of exercise. Anuradha's gentle approach to expanding lung capacity has completely reduced my reliance on inhalers during flare-ups.",
    name: "Asthma Client",
    outcome: "Asthma Relief & Breath Control"
  },
  {
    quote: "My fasting blood sugar levels have stabilized significantly since starting this therapeutic practice. It's a wonderful, holistic complement to my medical routine.",
    name: "Metabolic Health Client",
    outcome: "Diabetic Support"
  },
  {
    quote: "The personalized intake process made me feel truly seen. They understood my complex health history and built a sequence that was completely safe for my joints.",
    name: "Senior Client (60+)",
    outcome: "Safe, Adaptive Movement"
  }
];
