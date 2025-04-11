"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, delay = 0, y = 50 }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const el = revealRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: y, // default slide from bottom
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // when element top reaches 85% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay, y]);

  return (
    <div ref={revealRef}>
      {children}
    </div>
  );
};

export default ScrollReveal;