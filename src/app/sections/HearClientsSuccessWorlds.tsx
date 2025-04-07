'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import ScrollReveal from '../../components/layout/ScrollReveal';

const HearClientsSuccessWorlds = () => {

    const testimonials = [
        {
            text: `DigiReps completely transformed our lead generation process. Their virtual lead researchers provided us with high-quality prospects, allowing our sales team to focus on closing deals. We've seen a 40% increase in qualified leads since partnering with them.`,
            name: 'Sarah M., Sales',
            title: 'Director at GrowthTech',
            avatar: '/images/sarah.webp',
            image: '/images/business-women.webp',
        },
        {
            text: `DigiReps completely transformed our lead generation process. Their virtual lead researchers provided us with high-quality prospects, allowing our sales team to focus on closing deals. We've seen a 40% increase in qualified leads since partnering with them.`,
            name: 'Sarah M., Sales',
            title: 'Director at GrowthTech',
            avatar: '/images/sarah.webp',
            image: '/images/business-women.webp',
        },
        {
            text: `DigiReps completely transformed our lead generation process. Their virtual lead researchers provided us with high-quality prospects, allowing our sales team to focus on closing deals. We've seen a 40% increase in qualified leads since partnering with them.`,
            name: 'Sarah M., Sales',
            title: 'Director at GrowthTech',
            avatar: '/images/sarah.webp',
            image: '/images/business-women.webp',
        },
        {
            text: `DigiReps completely transformed our lead generation process. Their virtual lead researchers provided us with high-quality prospects, allowing our sales team to focus on closing deals. We've seen a 40% increase in qualified leads since partnering with them.`,
            name: 'Sarah M., Sales',
            title: 'Director at GrowthTech',
            avatar: '/images/sarah.webp',
            image: '/images/business-women.webp',
        },
        {
            text: `DigiReps completely transformed our lead generation process. Their virtual lead researchers provided us with high-quality prospects, allowing our sales team to focus on closing deals. We've seen a 40% increase in qualified leads since partnering with them.`,
            name: 'Sarah M., Sales',
            title: 'Director at GrowthTech',
            avatar: '/images/sarah.webp',
            image: '/images/business-women.webp',
        },
    ];
    return (
        <section className='hearClients'>
            <div className='pt-76 pl-43'>
                <ScrollReveal>
                <h2 className='text-white font-medium'>
                    Hear It from Our <span className='txtYellow'>Clients</span>: <br /> Success in Their Own <br /> <span className='txtYellow'>Words</span>
                </h2>
                </ScrollReveal>
                <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} loop={true} autoplay={{delay: 2000, disableOnInteraction: false,}} speed={3000} freeMode={true} className="w-full">
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex justify-between'>
                                <div className="leftCol">
                                    <p className='text-white mb-6 pt-10 pl-5 capitalize'>{item.text}</p>
                                    <div className='flex items-center'>
                                        <img src={item.avatar} alt={item.name} className='mr-6' />
                                        <p className='text-white'>{item.name} <br /> {item.title}</p>
                                    </div>
                                </div>
                                <div className="rightCol">
                                    <img src={item.image} alt=" " />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>  
        </section>
    )
}

export default HearClientsSuccessWorlds;