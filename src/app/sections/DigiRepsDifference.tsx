import React from 'react'
import Image from 'next/image'
import VideoModal from "../../components/VideoModal";

const DigiRepsDifference = () => {
  return (
    <section className='videoSec w-full h-[983px]"'>
        <Image src="/images/video-banner.webp" alt=" " width={1920} height={983} />
        <div className='playArea flex items-center justify-center flex-col'>            
          <h2 className='text-white font-medium text-center mb-5'>The DigiReps Difference <br /> — Explained</h2>
          <VideoModal />            
        </div>
    </section>
  )
}

export default DigiRepsDifference;