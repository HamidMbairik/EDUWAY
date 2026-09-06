import { motion, type Variants } from "motion/react";

const flags = [
  { emoji: "🇺🇸", name: "USA" },
  { emoji: "🇬🇧", name: "UK" },
  { emoji: "🇨🇦", name: "Canada" },
  { emoji: "🇦🇺", name: "Australia" },
  { emoji: "🇩🇪", name: "Germany" },
  { emoji: "🇫🇷", name: "France" },
  { emoji: "🇳🇱", name: "Netherlands" },
  { emoji: "🇯🇵", name: "Japan" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="animate-blob pointer-events-none absolute -top-32 right-[-12%] size-[38rem] rounded-full bg-royal/20 blur-3xl"
        aria-hidden
      />
      <div
        className="animate-blob pointer-events-none absolute left-[-14%] top-40 size-[30rem] rounded-full bg-flame-soft/70 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={item}>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-royal/15 bg-white/80 px-4 py-2 text-xs font-semibold text-royal shadow-sm transition-colors hover:bg-surf"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-flame" />
              </span>
              2026 intake — applications closing soon ⚡
            </a>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Study abroad,
            <br />
            but make it
            <br />
            <span className="text-gradient">stress-free.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mute"
          >
            EDUWAY matches you with top unis across 8 countries, handles the
            paperwork, and gets your visa sorted. You just pack and go. No cap,
            it's actually that simple.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-flame px-7 py-4 text-[15px] font-bold text-white shadow-[0_16px_40px_-14px_rgb(247_144_9/1)] transition-transform hover:-translate-y-0.5"
              >
                Find your uni
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/20 bg-white px-7 py-4 text-[15px] font-bold text-royal transition-all hover:border-royal/40 hover:bg-surf"
              >
                How it works
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex -space-x-3">
                {["/images/people/maya.jpg", "/images/people/zion.jpg", "/images/people/aisha.jpg"].map(
                  (src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="size-10 rounded-full object-cover ring-3 ring-cloud"
                    />
                  ),
                )}
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-flame to-amber-500 text-[11px] font-bold text-white ring-3 ring-cloud">
                  +3.2k
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">3,200+ students</p>
                <p className="text-sm text-mute">
                  shipped to 8 countries <span className="mx-1">·</span>{" "}
                  <span className="font-semibold text-flame">4.9★</span> on
                  Google
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <HeroCollage />
      </div>

      <div className="border-y border-royal/10 bg-white/60 py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((half) => (
              <div
                key={half}
                className="flex items-center gap-10 pr-10"
                aria-hidden={half === 1}
              >
                {flags.map((f) => (
                  <span
                    key={f.name}
                    className="flex items-center gap-2 text-sm font-bold text-mute"
                  >
                    <span className="text-xl">{f.emoji}</span> {f.name}
                    <span className="ml-6 inline-block size-1.5 rounded-full bg-flame/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <img
        src="/images/hero/campus.jpg"
        alt=""
        loading="lazy"
        className="absolute -left-8 -top-8 hidden h-40 w-40 rotate-[-6deg] rounded-3xl object-cover shadow-card ring-4 ring-white sm:block"
      />

      <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-30px_rgb(11_75_179/0.45)] ring-1 ring-royal/10">
        <motion.img
          src="/images/hero/graduation.jpg"
          alt="Graduates celebrating at a UK university"
          className="aspect-[4/5] w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-deep/45 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/25 backdrop-blur-md">
            <p className="font-display text-sm font-bold text-white">
              Class of 2026 intake
            </p>
            <p className="text-xs text-white/75">Your chapter starts here</p>
          </div>
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="text-3xl"
          >
            🎓
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 -top-8 hidden w-40 sm:block lg:-right-8"
      >
        <div className="animate-float rounded-2xl bg-white p-4 shadow-card ring-1 ring-royal/10">
          <p className="font-display text-xs font-bold text-ink">🎉 Offer letter</p>
          <p className="mt-0.5 text-[11px] text-mute">University of Toronto</p>
          <p className="mt-1 text-lg font-extrabold text-flame">You're in!</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-8 -left-4 hidden w-48 sm:block lg:-left-8"
      >
        <div className="animate-float rounded-2xl bg-white p-4 shadow-card ring-1 ring-royal/10 [animation-delay:1.3s]">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-royal to-royal-deep text-xs font-bold text-white">
              AY
            </span>
            <div>
              <p className="text-[11px] font-bold text-ink">Your advisor</p>
              <p className="text-[11px] text-mute">
                "Visa approved 💙🎉"
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-10 right-4 hidden sm:block"
      >
        <img
          src="/images/hero/study-laptops.jpg"
          alt="Students studying abroad with laptops"
          loading="lazy"
          className="size-20 rounded-full border-4 border-white object-cover shadow-card"
        />
      </motion.div>
    </motion.div>
  );
}