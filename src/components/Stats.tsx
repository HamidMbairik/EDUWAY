import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { to: 3200, suffix: "+", label: "students placed", note: "since 2019" },
  { to: 96, suffix: "%", label: "visa success", note: "on first try" },
  { to: 8, suffix: "", label: "countries", note: "and counting" },
  { to: 6000, prefix: "€", label: "avg scholarship", note: "per student" },
];

export default function Stats() {
  return (
    <section className="relative px-5 py-10 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-royal to-royal-deep px-6 py-12 shadow-soft lg:px-12">
        <div className="bg-grain pointer-events-none absolute inset-0" aria-hidden />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-blob pointer-events-none absolute size-72 rounded-full bg-flame/20 blur-3xl"
            style={{
              left: `${i * 28}%`,
              top: `${i % 2 ? "10%" : "40%"}`,
              animationDelay: `${i * 2}s`,
            }}
            aria-hidden
          />
        ))}
        <div className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <p className="font-display bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-extrabold text-transparent lg:text-6xl">
                <Counter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="mt-2 font-bold text-white">{s.label}</p>
              <p className="text-sm text-white/70">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}