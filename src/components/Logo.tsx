import { useId } from "react";

type LogoProps = {
  size?: number;
  showText?: boolean;
  light?: boolean;
};

export default function Logo({ size = 36, showText = true, light = false }: LogoProps) {
  const id = useId();

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="EDUWAY logo"
        className="drop-shadow-[0_8px_16px_rgba(21,94,239,0.35)]"
      >
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#155EEF" />
            <stop offset="1" stopColor="#0B4BB3" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="18" fill={`url(#${id}-bg)`} />
        <path d="M32 10 L52 25 L32 40 L12 25 Z" fill="#fff" />
        <path d="M12 25 H52 L46 30 H18 Z" fill="rgba(255,255,255,0.35)" />
        <path
          d="M52 27 V38"
          stroke="#F79009"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="52" cy="42.5" r="4" fill="#F79009" />
      </svg>
      {showText && (
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          EDU<span className={light ? "text-flame-soft" : "text-royal"}>WAY</span>
        </span>
      )}
    </span>
  );
}