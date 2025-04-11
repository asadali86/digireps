import React from 'react'
import Image from 'next/image'
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center pt-12'>      
      <ScrollReveal>
        <figure className='mb-8'>
            <Image src="/images/man-work-pc.svg" alt=" " width={141.83} height={134.73} />
        </figure>
      </ScrollReveal>
      <TextReveal />
      <ScrollReveal delay={0.2}>
        <p className='text-center leading-8 mb-8'>Growing a business is hard we make it a whole lot easier more predictable,  less stress <br /> full and more fun.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <button className='bgColorBlue text-white rounded-full px-11 py-4'><span>Unlock Your Growth Potential</span>s</button>
      </ScrollReveal>
    </section>
  )
}

export default Hero;