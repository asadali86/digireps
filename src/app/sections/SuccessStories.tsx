'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import Image from 'next/image'
import 'swiper/css';
import "swiper/css/autoplay";

const SuccessStories = () => {
  return (
    <>
        <section className='successStories pt-25 pl-25 pr-25 flex justify-between'>
            <div className="leftCol">
                
                    <h3 className='text-center rounded-full dot-heading font-medium mb-5 px-10 py-4'><span className='pl-2'>Case Studies</span></h3>
                
                
                    <h2 className='txtBlue font-medium mb-5 heading-bottom-line'>
                        Success <span className='txtYellow'>Stories</span>: How We Help <span className='txtYellow'>Businesses</span> Scale
                    </h2>
                
                
                    <p className='mb-5'>Discover how DigiReps has helped businesses grow by providing top-tier remote professionals researchers. See real-world examples of our impact and how we drive success remotely.</p>
                
                
                    <div className="text-center">
                        <Image src="/images/cs-graphic.webp" alt=" " width={350} height={350} className='mx-auto' />
                    </div>                    
                
            </div>
            <div className="rightCol">
                <div style={{ height: '100vh' }}>
                    <Swiper direction={'vertical'} slidesPerView={3} spaceBetween={30} mousewheel={true} pagination={{ clickable: true }} autoplay={{ delay: 2000, disableOnInteraction: false }} loop={true} modules={[Autoplay]} style={{ height: '100%' }}>
                        <SwiperSlide>
                            <div className="slide lightGray p-10 mb-8">
                                <Image src="/images/drip-logo.webp" alt=" " width={105} height={37} />
                                <h4 className='txtBlue mb-3 font-black uppercase'>Drip</h4>
                                <p className='mb-3'>DigiReps enabled Drips seamless global expansion by providing flexible sales reps, targeted lead research, and end-to-end SDR management.</p>
                                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 btnAnimate2'>
                                    <span>See More <Image src="/images/right-arrow.svg" alt=" " width={18} height={18} className='ml-2' /></span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide lightGray p-10 mb-8">
                                <Image src="/images/legere-logo.webp" alt=" " width={105} height={37} />
                                <h4 className='txtBlue mb-3 font-black uppercase'>Legere Pharmaceuticals</h4>
                                <p className='mb-3'>DigiReps helped Legere Pharmaceuticals refine its target audience, optimize outreach, and cut costs by providing a fully managed lead generation solution</p>
                                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 btnAnimate2'>
                                    <span>See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' /></span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide lightGray p-10 mb-8">
                                <Image src="/images/solving-services.webp" alt=" " width={105} height={37} />
                                <h4 className='txtBlue mb-3 font-black uppercase'>Solving Services</h4>
                                <p className='mb-3'>DigiReps helped Solving Services cut acquisition costs, streamline sales operations, and scale efficiently with trained reps and full management support.</p>
                                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 btnAnimate2'>
                                    <span>See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' /></span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide lightGray p-10 mb-8">
                                <Image src="/images/lajaunie.webp" alt=" " width={105} height={37} />
                                <h4 className='txtBlue mb-3 font-black uppercase'>LaJaunies Pest Control</h4>
                                <p className='mb-3'>DigiReps provided 24/7 customer support for LaJaunies Pest Control, reducing costs, improving response times, and enhancing customer satisfaction.</p>
                                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 btnAnimate2'>
                                    <span>See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' /></span>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide lightGray p-10">
                                <Image src="/images/medianug.webp" alt=" " width={105} height={37} />
                                <h4 className='txtBlue mb-3 font-black uppercase'>MediaNugs</h4>
                                <p className='mb-3'>DigiReps optimized MediaNugs sales process by implementing structured lead tracking, consistent outreach, and workflow improvements to boost conversions</p>
                                <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 btnAnimate2'>
                                    <span>See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' /></span>
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>    
    </>
  );
}

export default SuccessStories;