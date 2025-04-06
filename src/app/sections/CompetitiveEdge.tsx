import React from 'react'
import Image from 'next/image'

const CompetitiveEdge = () => {
  return (
    <div className="blueCloud pt-56">
        <div className='bgColorBlue pb-20'>
            <div className="ceContainer mx-auto flex">
                <div className="logoLine ml-20">
                    <Image src="/images/digireps-logo-icon.webp" alt="Digi Reps" width={112} height={110} />
                </div>
                <div className="contentArea mt-25">
                    <h2 className='text-white font-medium'>
                        Your Competitive Edge with <br /> <span className='txtYellow'>DigiReps</span>
                    </h2>
                    <div className="pointList">
                        <div className="plArea flex items-center mb-18">
                            <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            <div className="plContentArea flex-1">
                                <h3 className='text-white'>Access to top talent</h3>
                                <p className='text-white'>
                                    Our team of experts handpicks the best candidates for each role,<br /> ensuring you get the best possible fit for your business.
                                </p>
                            </div>
                            <span><Image src="/images/access-to-top-talent.svg" alt=" " width={210} height={234} /></span>
                        </div>
                        <div className="plArea flex items-center mb-18">
                            <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            <div className="plContentArea flex-1">
                                <h3 className='text-white'>Hassle-free hiring process</h3>
                                <p className='text-white'>
                                DigiReps handles the recruitment, management and quality assurance, so <br /> you can focus on growing your business.
                                </p>
                            </div>
                            <span><Image src="/images/hassle-free-hiring-process.svg" alt=" " width={217.72} height={197.05} /></span>
                        </div>
                        <div className="plArea flex items-center">
                            <span className='star'><Image src="/images/star-icon.svg" alt=" " width={25} height={25} /></span>
                            <div className="plContentArea flex-1">
                                <h3 className='text-white'>upto 50% cost savings</h3>
                                <p className='text-white'>
                                    With DigiReps, you get all the benefits of remote work without breaking <br /> the bank.
                                </p>
                            </div>
                            <span><Image src="/images/upto-cost-savings.svg" alt=" " width={213.46} height={169.34} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompetitiveEdge;