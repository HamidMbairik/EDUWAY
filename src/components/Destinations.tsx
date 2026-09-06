import Reveal from "./Reveal";

const destinations = [
  {
    emoji: "🇺🇸",
    name: "USA",
    img: "/images/destinations/usa.jpg",
    universities: ["MIT", "NYU", "UCLA"],
    fee: "$25k–60k",
  },
  {
    emoji: "🇬🇧",
    name: "UK",
    img: "/images/destinations/uk.jpg",
    universities: ["Oxford", "UCL", "Imperial"],
    fee: "£18k–40k",
  },
  {
    emoji: "🇨🇦",
    name: "Canada",
    img: "/images/destinations/canada.jpg",
    universities: ["Toronto", "UBC", "McGill"],
    fee: "CA$22k–55k",
  },
  {
    emoji: "🇦🇺",
    name: "Australia",
    img: "/images/destinations/australia.jpg",
    universities: ["Melbourne", "Sydney", "ANU"],
    fee: "A$25k–50k",
  },
  {
    emoji: "🇩🇪",
    name: "Germany",
    img: "/images/destinations/germany.jpg",
    universities: ["TUM", "LMU", "Heidelberg"],
    fee: "~€0–3k",
  },
  {
    emoji: "🇫🇷",
    name: "France",
    img: "/images/destinations/france.jpg",
    universities: ["Sorbonne", "HEC", "Polytech"],
    fee: "€2k–15k",
  },
  {
    emoji: "🇳🇱",
    name: "Netherlands",
    img: "/images/destinations/netherlands.jpg",
    universities: ["Amsterdam", "TU Delft", "Eindhoven"],
    fee: "€8k–18k",
  },
  {
    emoji: "🇯🇵",
    name: "Japan",
    img: "/images/destinations/japan.jpg",
    universities: ["Tokyo", "Kyoto", "Waseda"],
    fee: "¥500k–900k",
  },
] as const;

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-surf px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-royal">
            Destinations
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Where to? <span className="text-gradient">Everywhere, honestly.</span>
          </h2>
          <p className="mt-4 text-lg text-mute">
            No gatekeeping here — our strongest drag-and-drop matching spans 8
            countries and 120+ partner universities.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 90}>
              <article className="group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-royal/10">
                <img
                  src={d.img}
                  alt={`${d.name} study destination`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/80 via-royal-deep/15 to-transparent" />

                <span className="glass absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-ink ring-1 ring-white/40">
                  {d.fee}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display flex items-center gap-2 text-xl font-bold text-white">
                    <span className="text-2xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125">
                      {d.emoji}
                    </span>
                    {d.name}
                  </h3>
                  <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                    {d.universities.map((u) => (
                      <li key={u} className="text-xs font-medium text-white/80">
                        {u}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-flame to-amber-500 transition-all duration-500 group-hover:w-2/3" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}