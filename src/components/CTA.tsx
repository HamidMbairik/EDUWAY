import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="cta" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-royal to-royal-deep px-6 py-16 text-center shadow-soft sm:px-16 lg:py-20">
            <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="animate-blob pointer-events-none absolute size-80 rounded-full bg-flame/25 blur-3xl"
                style={{
                  left: `${10 + i * 32}%`,
                  top: `${i % 2 ? "0%" : "50%"}`,
                  animationDelay: `${i * 2.4}s`,
                }}
                aria-hidden
              />
            ))}
            <span className="relative inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-flame-soft ring-1 ring-white/20">
              Limited spots for 2026 intake
            </span>
            <h2 className="font-display relative mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Your visa card from someone else's story.{" "}
              <span className="text-flame-soft">Make it yours.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
              Free 15-min vibe check with an advisor. Worst case, you leave
              knowing exactly where you're going. Best case, you're enrolled.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@eduway.example"
                className="group inline-flex items-center gap-2 rounded-full bg-flame px-8 py-4 text-base font-bold text-white shadow-[0_18px_44px_-14px_rgb(247_144_9/1)] transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                Book my vibe check
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="text-sm font-medium text-white/70">
                Or text us — we reply in minutes, fr.
              </p>
            </div>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-white/70">
              <span>✅ Free consultation</span>
              <span>✅ No pressure, ever</span>
              <span>✅ Cancel anytime</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}