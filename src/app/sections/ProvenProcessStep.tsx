import React from 'react'
import Image from 'next/image'
import ScrollCards from "@/components/ScrollCards";

const ProvenProcessStep = () => {
  return (
    <section className='provenProcessStep flex flex-col items-center pb-30'>
        <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>How it Works</span></h3>
        <h2 className='txtBlue font-medium mb-10 text-center heading-bottom-line-blue-orange'>
            Our Proven Process, <span className='txtYellow'>Step by</span> <br /> Step
        </h2>
        <ScrollCards />
    </section>
    
  )
}

export default ProvenProcessStep;