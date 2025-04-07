import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

const CompetitiveEdge = () => {
  return (
    <div className="blueCloud pt-56 sticky">
        <div className='bgColorBlue pb-20'>
            <div className="ceContainer mx-auto flex">
                <div className="logoLine ml-20">
                    <Image src="/images/digireps-logo-icon.webp" alt="Digi Reps" width={112} height={110} />
                </div>
                <div className="contentArea mt-25">
                    <ScrollReveal>
                    <h2 className='text-white font-medium'>
                        Your Competitive Edge with <br /> <span className='txtYellow'>DigiReps</span>
                    </h2>
                    </ScrollReveal>
                    <div className="pointList">
                        <div className="plArea flex items-center mb-18">
                            <ScrollReveal delay={0.5}>
                                <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            </ScrollReveal>                            
                            <div className="plContentArea flex-1">
                                <ScrollReveal delay={0.5}>
                                    <h3 className='text-white'>Access to top talent</h3>
                                    <p className='text-white'>
                                        Our team of experts handpicks the best candidates for each role,<br /> ensuring you get the best possible fit for your business.
                                    </p>
                                </ScrollReveal>
                            </div>                            
                            <ScrollReveal delay={0.5}>
                                <span><Image src="/images/access-to-top-talent.svg" alt=" " width={210} height={234} /></span>
                            </ScrollReveal>
                        </div>
                        <div className="plArea flex items-center mb-18">
                            <ScrollReveal delay={1}>
                                <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            </ScrollReveal>
                            <div className="plContentArea flex-1">
                                <ScrollReveal delay={1}>
                                    <h3 className='text-white'>Hassle-free hiring process</h3>
                                    <p className='text-white'>
                                        DigiReps handles the recruitment, management and quality assurance, so <br /> you can focus on growing your business.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <ScrollReveal delay={1}>
                                <span><Image src="/images/hassle-free-hiring-process.svg" alt=" " width={217.72} height={197.05} /></span>
                            </ScrollReveal>
                        </div>
                        <div className="plArea flex items-center">
                            <ScrollReveal delay={2}>
                                <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            </ScrollReveal>
                            <div className="plContentArea flex-1">
                                <ScrollReveal delay={2}>
                                    <h3 className='text-white'>upto 50% cost savings</h3>
                                    <p className='text-white'>
                                        With DigiReps, you get all the benefits of remote work without breaking <br /> the bank.
                                    </p>
                                </ScrollReveal>
                            </div>
                            <ScrollReveal delay={2}>
                                <span><Image src="/images/upto-cost-savings.svg" alt=" " width={213.46} height={169.34} /></span>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitiveEdge;