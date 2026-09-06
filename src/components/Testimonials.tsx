import Reveal from "./Reveal";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Maya A.",
    meta: "MS CS · TU Delft 🇳🇱",
    text: "I almost applied alone, thank god I didn't. EDUWAY found me a scholarship I didn't even know existed and walked me through the visa like it was nothing. 10/10 no notes.",
    img: "/images/people/maya.jpg",
  },
  {
    name: "Zion R.",
    meta: "BBA · University of Toronto 🇨🇦",
    text: "The SOP they helped me with literally carried. Advisors reply on WhatsApp in like 10 minutes, even on weekends. That's the vibe. Whole squad said my story was 'main character'.",
    img: "/images/people/zion.jpg",
  },
  {
    name: "Aisha K.",
    meta: "MBBS · University of Sydney 🇦🇺",
    text: "As a med student the stress was unreal. EDUWAY kept my deadlines on a spreadsheet so tight it should be in a museum. Flight cancel-proof service. fr.",
    img: "/images/people/aisha.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="vibes" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-royal/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-flame-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-flame">
            The reviews are in
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            No skits. <span className="text-gradient">Just receipts.</span>
          </h2>
          <p className="mt-4 text-lg text-mute">
            Real students, real unis, real glow-ups. 3,200+ of them and
            climbing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 110}>
              <motion.figure
                whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -0.6 : 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-royal/10"
              >
                <div className="flex items-center gap-1 text-flame">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="size-12 rounded-full object-cover ring-2 ring-royal/15"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{r.name}</p>
                    <p className="text-xs text-mute">{r.meta}</p>
                  </div>
                  <span className="ml-auto text-2xl" aria-hidden>
                    💙
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-10 text-center text-sm text-mute">
            <span className="font-bold text-flame">4.9★</span> average across
            1,400+ Google + Trustpilot reviews
          </p>
        </Reveal>
      </div>
    </section>
  );
}