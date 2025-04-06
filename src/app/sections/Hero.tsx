import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-12'>
        <figure className='mb-8'>
            <Image src="/images/man-work-pc.svg" alt=" " width={141.83} height={134.73} />
        </figure>
        <h1 className='font-medium mb-8'>
            The Smart way to <span className='txtYellow'>grow</span> your <br /> team <span className='txtBlue'>remotely</span> 
        </h1>
        <p className='text-center leading-8 mb-8'>Growing a business is hard we make it a whole lot easier more predictable,  less stress <br /> full and more fun.</p>
        <button className='bgColorBlue text-white rounded-full px-11 py-4'>Unlock Your Growth Potential</button>
    </section>
  )
}

export default Hero;