import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

const DigiRepsDifference = () => {
  return (
    <section className='videoSec w-full h-[983px]"'>
        <Image src="/images/video-banner.webp" alt=" " width={1920} height={983} />
        <div className='playArea flex items-center justify-center flex-col'>
            <ScrollReveal>
              <h2 className='text-white font-medium text-center mb-5'>The DigiReps Difference <br /> — Explained</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <button className='playBtn'><Image src="/images/play-btn.svg" alt=" " width={154} height={154} /></button>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default DigiRepsDifference;