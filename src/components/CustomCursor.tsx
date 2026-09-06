import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      setActive(Boolean(el?.closest("a,button,[role='button']")));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: sx, y: sy }}
      aria-hidden
    >
      <motion.div
        className="-ml-2.5 -mt-2.5"
        animate={{ scale: active ? 1.7 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="relative flex size-5 items-center justify-center rounded-full bg-royal/25">
          <div className="size-1.5 rounded-full bg-flame" />
        </div>
      </motion.div>
    </motion.div>
  );
}