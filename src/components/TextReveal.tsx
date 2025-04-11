'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const TextReveal = () => {
  const lines = [
    <>
    The Smart Way To <span className='txtYellow'>Grow</span> Your <br /> Team <span className='txtBlue'>Remotely</span>
</>,
<>
    Effortless Team <span className='txtYellow'>Growth</span> <br /> In The <span className='txtBlue'>World</span>
</>
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Move to next sentence after animation completes
        setActiveIndex((prev) => (prev + 1) % lines.length);
      },
    });

    // Reset position to below and hide
    gsap.set(textRef.current, { y: 100, opacity: 0 });

    // Animate in (bottom → center)
    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 2, // slower animation
      ease: 'power1.out',
    })

      // Stay visible for a moment
      .to({}, { duration: 2 }) // stay for 2 seconds

      // Animate out (center → top)
      .to(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 2, // slower exit
        ease: 'power1.in',
      });
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="overflow-hidden">
        <div ref={textRef} className="inline-block">
            <h1 className='font-medium text-center heroTextAnimate'>{lines[activeIndex]}</h1>
        </div>
    </div>
  );
};

export default TextReveal;