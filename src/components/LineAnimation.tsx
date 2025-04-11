"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LineAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.line', {
      scrollTrigger: {
        trigger: '.line-container',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
      height: '100%',
      ease: 'none',
      duration: 2,
    });
  }, []);

  return (
    <div className="line-container" style={{ height: '100%', position: 'absolute', left: '0', right: '0', margin: '0 auto' }}>
      <div
        className="line"
        style={{
          width: '2px',
          height: '0%',
          backgroundColor: '#FEB402',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          margin: '0 auto',
          transform: 'translateX(-50%)',
        }}
      ></div>
    </div>
  );
};

export default LineAnimation;