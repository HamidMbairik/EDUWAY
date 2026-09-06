import Reveal from "./Reveal";
import { motion } from "motion/react";

const programs = [
  {
    tag: "Undergrad",
    flag: "🌍",
    title: "Bachelor's abroad",
    desc: "Freshman entry with hands-on GPA & subject guidance, plus scholarship hunting from day one.",
    stats: ["4 yrs", "€5k–30k/yr"],
    gradient: "from-royal to-royal-deep",
    popular: false,
  },
  {
    tag: "Postgrad",
    flag: "🎓",
    title: "Master's & PhD",
    desc: "Get into ranked programs with a statement of purpose that actually slaps and prof-ready references.",
    stats: ["1–2 yrs", "€12k–45k/yr"],
    gradient: "from-[#0B4BB3] to-[#155EEF]",
    popular: true,
  },
  {
    tag: "Language",
    flag: "🗣️",
    title: "Language years",
    desc: "Fast-track your English/German/French to B2–C1 with pathway programs that roll into a degree later.",
    stats: ["6–12 mo", "€3k–9k/yr"],
    gradient: "from-flame to-amber-600",
    popular: false,
  },
  {
    tag: "Summer",
    flag: "☀️",
    title: "Short stays",
    desc: "Exchange semesters, summer schools, gap-year vibes. Explore before you commit — no pressure, no cap.",
    stats: ["2–12 wks", "€1k–5k"],
    gradient: "from-royal-deep to-[#155EEF]",
    popular: false,
  },
];

const fields = [
  "Business & Finance",
  "Computer Science & AI",
  "Engineering",
  "Design & Arts",
  "Medicine & Health",
  "Law & Politics",
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden py-24 lg:py-32">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 size-[26rem] rounded-full bg-royal/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-flame-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-flame">
              Programs
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Pick your path. <span className="text-gradient">We'll clear the fog.</span>
            </h2>
          </div>
          <p className="max-w-sm text-mute">
            From freshman to PhD, short-trip to long-haul — if it involves
            studying abroad, we move it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 ${
                  p.popular
                    ? "bg-gradient-to-br from-royal to-royal-deep text-white shadow-soft"
                    : "bg-white shadow-card ring-1 ring-royal/10 hover:shadow-soft"
                }`}
              >
                {p.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-flame px-3 py-1 text-[11px] font-bold text-white shadow-md">
                    Most popular
                  </span>
                )}
                <span
                  className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {p.flag}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">
                  {p.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    p.popular ? "text-white/80" : "text-mute"
                  }`}
                >
                  {p.desc}
                </p>
                <div
                  className={`mt-5 flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold ${
                    p.popular ? "bg-white/15 text-white" : "bg-cloud text-ink"
                  }`}
                >
                  <span>{p.stats[0]}</span>
                  <span className={`${p.popular ? "text-flame-soft" : "text-flame"}`}>
                    {p.stats[1]}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-8 rounded-3xl bg-white p-6 ring-1 ring-royal/10 sm:p-8 lg:flex-row">
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display text-lg font-bold text-ink">
                Don't see your field? We cover all of these:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                {fields.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-surf px-3.5 py-1.5 text-xs font-semibold text-royal"
                  >
                    {f}
                  </span>
                ))}
                <span className="rounded-full bg-flame-soft px-3.5 py-1.5 text-xs font-semibold text-flame">
                  + 40 more
                </span>
              </div>
              <a
                href="#cta"
                className="mt-5 inline-flex shrink-0 rounded-full border border-royal/20 px-6 py-3 text-sm font-bold text-royal transition-colors hover:bg-surf"
              >
                Talk to an advisor →
              </a>
            </div>
            <img
              src="/images/hero/students-group.jpg"
              alt="Group of international students studying together"
              loading="lazy"
              className="h-44 w-full max-w-md rounded-2xl object-cover shadow-card lg:h-40 lg:w-64"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}