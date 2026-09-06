import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-royal via-flame to-flame"
      style={{ scaleX }}
      aria-hidden
    />
  );
}