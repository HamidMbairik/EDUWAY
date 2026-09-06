import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#programs", label: "Programs" },
  { href: "#destinations", label: "Destinations" },
  { href: "#vibes", label: "Reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_1px_0_rgb(21_94_239/0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="EDUWAY home">
          <Logo size={36} />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-mute transition-colors hover:text-royal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cta"
            className="text-sm font-semibold text-royal transition-colors hover:text-royal-deep"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-flame px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgb(247_144_9/0.9)] transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            Start free
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-xl bg-surf text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-royal/10 px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-surf"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-flame px-3 py-3 text-center text-sm font-bold text-white"
              >
                Start free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}