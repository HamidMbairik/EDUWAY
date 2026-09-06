import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = Math.round(v).toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}