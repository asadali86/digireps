import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-12'>
        <ScrollReveal>
          <figure className='mb-8'>
              <Image src="/images/man-work-pc.svg" alt=" " width={141.83} height={134.73} />
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
        <h1 className='font-medium mb-8'>
            The Smart way to <span className='txtYellow'>grow</span> your <br /> team <span className='txtBlue'>remotely</span> 
        </h1>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className='text-center leading-8 mb-8'>Growing a business is hard we make it a whole lot easier more predictable,  less stress <br /> full and more fun.</p>
        </ScrollReveal>
        <ScrollReveal delay={1.5}>
          <button className='bgColorBlue text-white rounded-full px-11 py-4 btnAnimate'><span>Unlock Your Growth Potential</span>s</button>
        </ScrollReveal>
    </section>
  )
}

export default Hero;