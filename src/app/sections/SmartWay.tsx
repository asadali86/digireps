'use client'; // very important in app/ directory
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const SmartWay = () => {
  return (
    <section className='smartWay pt-20 pb-20 bgColorBlue'>
      <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={30} loop={true} autoplay={{delay: 0, disableOnInteraction: false,}} speed={3000} freeMode={true}>
        <SwiperSlide>
          <div className='flex items-center'>
              <Image src="/images/digireps-icon-logo.webp" alt=" " width={213} height={189} />
              <h2>The smart way to grow your team remotely!</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center'>
              <Image src="/images/digireps-icon-logo.webp" alt=" " width={213} height={189} />
              <h2>The smart way to grow your team remotely!</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SmartWay;