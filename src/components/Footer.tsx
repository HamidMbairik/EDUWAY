import Logo from "./Logo";

const columns = [
  {
    title: "Explore",
    links: ["How it works", "Programs", "Destinations", "Reviews", "Scholarships"],
  },
  {
    title: "Students",
    links: ["Success stories", "Visa guide", "FAQ", "Alumni network", "Blog"],
  },
  {
    title: "Company",
    links: ["About us", "Partners", "Careers", "Press kit", "Contact"],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 3c.4 2.2 1.8 3.9 4 4.2v3.1c-1.5 0-2.9-.5-4-1.3v6.2c0 3.6-2.6 6.1-6.1 6.1a6.1 6.1 0 0 1-4.4-10.3c1.1-1.2 2.7-1.9 4.4-1.9v3.2c-1.9 0-3.1 1.6-2.9 3.3.2 1.6 1.6 2.8 3.2 2.6 1.6-.1 2.7-1.5 2.7-3.2V3h3.1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 8.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 4.6 12 4.6 12 4.6s-4.6 0-7.8.3c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 10.1.8 12v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.6 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V12c0-1.9-.2-3.8-.2-3.8ZM9.7 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-royal/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="EDUWAY home">
              <Logo size={36} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Your shortcut to studying abroad. Young, optimistic, and
              annoyingly good at paperwork.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full bg-cloud text-mute transition-all hover:-translate-y-0.5 hover:bg-royal hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-mute transition-colors hover:text-royal"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-royal/10 pt-8 sm:flex-row">
          <p className="text-xs text-mute">
            © 2026 EDUWAY. Made for students, by students who made it. 🔥
          </p>
          <div className="flex items-center gap-5">
            <a href="#top" className="text-xs text-mute hover:text-royal">
              Privacy
            </a>
            <a href="#top" className="text-xs text-mute hover:text-royal">
              Terms
            </a>
            <span className="rounded-full bg-surf px-3 py-1 text-xs font-bold text-royal">
              100% human support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}