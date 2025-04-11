import React from 'react'
import Image from 'next/image'

export const GrowCostEffectively = () => {
  return (
    <section className='growCostEffectively pl-25 pr-25 pb-25'>
        <div className="blueBox flex items-center p-25">
            <div className="leftCol">
                
                  <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>Lets Meet</span></h3>
                
                
                  <h2 className='text-white font-medium mb-5'>want to learn more how we can help you grow cost-effectively?</h2>
                
                
                  <button className='bgColorBlue text-white rounded-full px-15 py-4'>Book Discovery session</button>
                
            </div>
            <div className="rightCol">
              
                <Image src="/images/grow-cost-effectively.svg" alt=" " width={1035.87} height={726.94} />
              
            </div>
        </div>
    </section>
  )
}

export default GrowCostEffectively;