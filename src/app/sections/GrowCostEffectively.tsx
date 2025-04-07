import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

export const GrowCostEffectively = () => {
  return (
    <section className='growCostEffectively pl-25 pr-25 pb-25'>
        <div className="blueBox flex items-center p-25">
            <div className="leftCol">
                <ScrollReveal>
                  <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>Lets Meet</span></h3>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <h2 className='text-white font-medium mb-5'>want to learn more how we can help you grow cost-effectively?</h2>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                  <button className='bgColorBlue text-white rounded-full px-15 py-4'>Book Discovery session</button>
                </ScrollReveal>
            </div>
            <div className="rightCol">
              <ScrollReveal>
                <Image src="/images/grow-cost-effectively.svg" alt=" " width={1035.87} height={726.94} />
              </ScrollReveal>
            </div>
        </div>
    </section>
  )
}

export default GrowCostEffectively;