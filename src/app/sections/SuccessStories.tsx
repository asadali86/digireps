import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

const SuccessStories = () => {
  return (
    <section className='successStories pt-25 pl-25 pr-25 flex justify-between'>
        <div className="leftCol">
            <ScrollReveal>
                <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>Case Studies</span></h3>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
                <h2 className='txtBlue font-medium mb-5'>
                    Success <span className='txtYellow'>Stories</span>: How We Help <span className='txtYellow'>Businesses</span> Scale
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
            <p>Discover how DigiReps has helped businesses grow by providing top-tier remote professionals researchers. See real-world examples of our impact and how we drive success remotely.</p></ScrollReveal>
        </div>
        <div className="rightCol">
            <div className="slide lightGray p-10 mb-8">
                <Image src="/images/drip-logo.webp" alt=" " width={105} height={37} className='mb-5' />
                <h4 className='txtBlue mb-3 font-black uppercase'>Drip</h4>
                <p className='mb-3'>DigiReps enabled Drips seamless global expansion by providing flexible sales reps, targeted lead research, and end-to-end SDR management.</p>
                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10'>
                    See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                </button>
            </div>
            <div className="slide lightGray p-10 mb-8">
                <Image src="/images/legere-logo.webp" alt=" " width={105} height={37} className='mb-5' />
                <h4 className='txtBlue mb-3 font-black uppercase'>Legere Pharmaceuticals</h4>
                <p className='mb-3'>DigiReps helped Legere Pharmaceuticals refine its target audience, optimize outreach, and cut costs by providing a fully managed lead generation solution</p>
                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10'>
                    See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                </button>
            </div>
            <div className="slide lightGray p-10 mb-8">
                <Image src="/images/solving-services.webp" alt=" " width={105} height={37} className='mb-5' />
                <h4 className='txtBlue mb-3 font-black uppercase'>Solving Services</h4>
                <p className='mb-3'>DigiReps helped Solving Services cut acquisition costs, streamline sales operations, and scale efficiently with trained reps and full management support.</p>
                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10'>
                    See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                </button>
            </div>
            <div className="slide lightGray p-10 mb-8">
                <Image src="/images/lajaunie.webp" alt=" " width={105} height={37} className='mb-5' />
                <h4 className='txtBlue mb-3 font-black uppercase'>LaJaunies Pest Control</h4>
                <p className='mb-3'>DigiReps provided 24/7 customer support for LaJaunies Pest Control, reducing costs, improving response times, and enhancing customer satisfaction.</p>
                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10'>
                    See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                </button>
            </div>
            <div className="slide lightGray p-10">
                <Image src="/images/medianug.webp" alt=" " width={105} height={37} className='mb-3' />
                <h4 className='txtBlue mb-3 font-black uppercase'>Drip</h4>
                <p className='mb-3'>DigiReps optimized MediaNugs sales process by implementing structured lead tracking, consistent outreach, and workflow improvements to boost conversions</p>
                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10'>
                    See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                </button>
            </div>
        </div>
    </section>
  )
}

export default SuccessStories;