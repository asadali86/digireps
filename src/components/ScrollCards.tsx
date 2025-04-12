"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    img: "/images/strategize-icon.svg",
    label: "Strategize",
    text: 'Kick-off Session to understand your project & requirements and accordingly custom-tailor the next steps'
  },
  {
    img: "/images/onboard-icon.svg",
    label: "Onboard",
    text: 'Reps recruitment, selection, and training (if required) according to the plan'
  },
  {
    img: "/images/launch-icon.svg",
    label: "Launch",
    text: 'Reps are launched followed by client approval.'
  },
  {
    img: "/images/scale-icon.svg",
    label: "Scale",
    text: 'Expand and grow your team hassle-free!'
  },
];

const HorizontalSteps = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (pathRef.current && containerRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = pathLength.toString();
      pathRef.current.style.strokeDashoffset = pathLength.toString();

      const ctx = gsap.context(() => {
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 4,
          ease: "power3.in",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        });

        gsap.fromTo(
          circlesRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            stagger: 1,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <svg className="absolute left-0 top-16 w-full h-10" viewBox="0 0 1000 10" preserveAspectRatio="none">
        <path ref={pathRef} d="M 50 5 H 950" stroke="#0b409c" strokeWidth="3" fill="none" />
      </svg>
      <div className="relative z-10 flex justify-between items-start">
        {steps.map((step, idx) => (
          <div key={idx} className="colStep">
            <div
              ref={(el: HTMLDivElement | null): void => {
                if (el) circlesRef.current[idx] = el;
              }}
              className="w-35 h-35 rounded-full bg-white border-10 border-blue-600 shadow-lg flex items-center justify-center"
              style={{ transform: "scale(0)", opacity: 0 }}
            >
              <img src={step.img} alt={`Step ${idx + 1}`} className="w-4xl object-contain" />
            </div>
            <h4 className="mt-5 mb-5">{step.label}</h4>
            <p className="pl-10 pr-10">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSteps;