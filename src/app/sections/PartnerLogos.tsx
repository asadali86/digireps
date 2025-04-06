'use client'; // very important in app/ directory
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const PartnerLogos = () => {
  return (
    <section className='partnerLogos pt-20 pb-20'>
        <div>
            <Swiper modules={[Autoplay]} slidesPerView={7} spaceBetween={30} loop={true} autoplay={{delay: 0, disableOnInteraction: false,}} speed={1000} freeMode={true}>
                <SwiperSlide>
                    <Image src="/images/americal-general-media-logo.webp" alt=" " width={134} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/americom-logo.webp" alt=" " width={302} height={34} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/arketek-logo.webp" alt=" " width={153} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/basik-wall-logo.webp" alt=" " width={197} height={31} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/clear-brand-logo.webp" alt=" " width={179} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/drip-logo-2.webp" alt=" " width={108} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/filtrous-logo.webp" alt=" " width={204} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/growtoro-logo.webp" alt=" " width={159} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/impact-suite-logo.webp" alt=" " width={203} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/iron-orbit-logo.webp" alt=" " width={161} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/legere-pharmaceuticals-logo.webp" alt=" " width={245} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/predibase-logo.webp" alt=" " width={213} height={30} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/solving-services-logo.webp" alt=" " width={163} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/tlk-fusion-logo.webp" alt=" " width={198} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/trans-act-logo.webp" alt=" " width={139} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/tuff-wrap-logo.webp" alt=" " width={139} height={40} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/verishield-logo.webp" alt=" " width={141} height={40} />
                </SwiperSlide>
            </Swiper>
        </div>        
    </section>
  )
}

export default PartnerLogos;