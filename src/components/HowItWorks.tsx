import Reveal from "./Reveal";
import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    emoji: "🧭",
    title: "Tell us your vibe",
    desc: "2-min quiz on goals, budget, dream countries. Our matching engine (and humans) build your shortlist.",
    chip: "~2 minutes",
  },
  {
    n: "02",
    emoji: "📝",
    title: "We handle the messy part",
    desc: "Applications, SOPs, scholarships, deadlines — all handled by your dedicated advisor. You focus on the present.",
    chip: "Zero paperwork",
  },
  {
    n: "03",
    emoji: "🛂",
    title: "Visa, locked in",
    desc: "Guided visa prep with mock interviews. Our approval rate on first try sits at 96%.",
    chip: "96% first-try",
  },
  {
    n: "04",
    emoji: "✈️",
    title: "Pack & go",
    desc: "Arrival support, housing hookups, airport pickup, and a squad of EDUWAY alumni in your city.",
    chip: "You're so in",
  },
];

const reasons = [
  { emoji: "💸", title: "Scholarships, actually", desc: "Our team digs out funding you'd never find on your own — avg €6k saved per student." },
  { emoji: "🤝", title: "1 advisor, not a call center", desc: "One WhatsApp contact who replies fast and had your back the whole way." },
  { emoji: "⚡", title: "Speed, fr", desc: "Docs prepared in days, not months. We move at the speed of your ambition." },
  { emoji: "🔒", title: "No hidden fees", desc: "Transparent pricing upfront. If we don't add value, you don't pay." },
] as const;

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-surf px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-royal">
            How it works
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Four steps.
            <span className="text-gradient"> That's the whole main quest.</span>
          </h2>
          <p className="mt-4 text-lg text-mute">
            From "idk where to start" to boarding pass in one smooth arc. We
            keep it 100 at every step.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          <span
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent lg:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 110}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-royal/10 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-extrabold text-surf transition-colors group-hover:text-royal/25">
                    {step.n}
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-royal to-royal-deep text-2xl shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {step.emoji}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  {step.desc}
                </p>
<span className="mt-4 inline-block rounded-full bg-flame-soft px-3 py-1 text-xs font-bold text-flame">
                  {step.chip}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="flex h-full gap-4 rounded-2xl bg-surf/70 p-5 ring-1 ring-royal/10 transition-colors hover:bg-surf">
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <h4 className="font-display font-bold text-ink">{r.title}</h4>
                  <p className="mt-1 text-sm text-mute">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}