import React from 'react'
import Image from 'next/image'

const ProvenProcessStep = () => {
  return (
    <section className='provenProcessStep flex flex-col items-center pl-25 pr-25 pb-30'>
        <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>How it Works</span></h3>
        <h2 className='txtBlue font-medium mb-10 text-center'>
            Our Proven Process, Step by <br /> <span className='txtYellow'>Step</span>
        </h2>
        <div className='flex justify-between w-full'>
          <div className='colStep'>
            <figure className='text-center'>
              <Image src="/images/strategize-icon.svg" alt=" " width={144} height={144} />
            </figure>
            <h4 className='mb-5'>Strategize</h4>
            <p>Kick-off Session to understand your project & requirements and accordingly custom-tailor the next steps</p>
          </div>
          <div className='colStep'>
            <figure className='text-center'>
              <Image src="/images/onboard-icon.svg" alt=" " width={144} height={144} />
            </figure>
            <h4 className='mb-5'>Onboard</h4>
            <p>Reps recruitment, selection, and training (if required) according to the plan</p>
          </div>
          <div className='colStep'>
            <figure className='text-center'>
              <Image src="/images/launch-icon.svg" alt=" " width={144} height={144} />
            </figure>
            <h4 className='mb-5'>Launch</h4>
            <p>Reps are launched followed by client approval.</p>
          </div>
          <div className='colStep'>
            <figure className='text-center'>
              <Image src="/images/scale-icon.svg" alt=" " width={144} height={144} />
            </figure>
            <h4 className='mb-5'>Scale</h4>
            <p>Expand and grow your team hassle-free!</p>
          </div>
        </div>
    </section>
  )
}

export default ProvenProcessStep;