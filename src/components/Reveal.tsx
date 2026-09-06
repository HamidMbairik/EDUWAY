import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;
    let io: IntersectionObserver | undefined;

    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      io?.disconnect();
    };

    const check = () => {
      const r = node.getBoundingClientRect();
      if (r.top <= window.innerHeight - 24 && r.bottom >= 0) show();
    };

    window.addEventListener("scroll", check, { passive: true, capture: true });
    window.addEventListener("resize", check, { passive: true });

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) show();
        },
        { threshold: 0.08 },
      );
      io.observe(node);
    }

    check();

    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : ""
      } ${className}`}
      style={{
        transitionDelay: shown && delay ? `${delay}ms` : "0ms",
        opacity: shown ? undefined : 0,
        transform: shown ? undefined : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}