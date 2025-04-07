'use client';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const ScrollReveal = ({
  children,
  delay = 0.2,
  duration = 0.6,
  yOffset = 40,
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
        },
      });
    }
  }, [controls, inView, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;