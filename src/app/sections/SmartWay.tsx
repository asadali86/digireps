import React from 'react'
import Image from 'next/image'

const SmartWay = () => {
  return (
    <section className='smartWay pt-20 pb-20 bgColorBlue'>
        <div className='flex items-center'>
            <Image src="/images/digireps-icon-logo.webp" alt=" " width={213} height={189} />
            <h2>The smart way to grow your team remotely!</h2>
        </div>
    </section>
  )
}

export default SmartWay;