import React from 'react'
import Image from 'next/image'
import VideoModal from "../../components/VideoModal";
import ScrollReveal from "@/components/ScrollReveal";

const DigiRepsDifference = () => {
  return (
    <section className='videoSec w-full h-[983px]"'>
      <Image src="/images/video-banner.webp" alt=" " width={1920} height={983} />
      <div className='playArea flex items-center justify-center flex-col'>
        <ScrollReveal delay={0.2}>
          <h2 className='text-white font-medium text-center mb-5'>The DigiReps Difference <br /> — Explained</h2>
        </ScrollReveal>
        <VideoModal />        
      </div>
    </section>
  )
}

export default DigiRepsDifference;