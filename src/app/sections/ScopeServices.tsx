'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'
import ScrollReveal from '../../components/layout/ScrollReveal';

const services = [
    {
      title: 'Sales Development Rep',
      skills: ['Cold calling', 'Appointment setting', 'Follow up & follow through', 'Getting around gate-keepers'],
    },
    {
      title: 'Customer Support Rep',
      skills: ['Dealing customer with a smile', 'Handling high volume calls & chats', 'Resolving customer issues', 'Answering inquiries'],
    },
    {
      title: 'Leads Researcher',
      skills: ['Data Scraping', 'List & Database Building', 'Data Cleaning & Updation', 'Data Compilation'],
    },
    {
      title: 'Digital Marketing Rep',
      skills: ['Paid Ads', 'Cold Email Outreach', 'Lead Generation', 'Content Creation'],
    },
    {
      title: 'UI/UX Designer',
      skills: ['Wireframing', 'Visual design', 'Interaction Design', 'Usability Testing'],
    },
];  

const ScopeServices = () => {
  return (
    <section className='scopeServices pl-25 pr-0 py-25'>
        <ScrollReveal>
          <h2 className='txtdarkGray font-medium mb-2'>Scope Of <span className='txtYellow'>Sevices</span></h2>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p className='mb-8'>Find a plan that fits your needs and budget. No hidden fees, just results-driven solution</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="mb-17">
              <button className='bgColorBlue text-white rounded-full px-20 py-4'>Book Consultation</button>
          </div>
        </ScrollReveal>
        <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={3.5} loop={true} className="px-4" breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
          }}
        >
            {services.map((service, index) => (
                <SwiperSlide key={index} className='paperBg2'>
                    <div>
                        <h3 className='txtBlue mb-5'>{service.title}</h3>
                        <h4 className='txtYellow mb-5'>Top Skills & Expectations</h4>
                        <ul className='check-sign'>
                            {service.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                        <div className="mt-5">
                            <button className='bgColorYellow text-white rounded-full p-5 flex items-center px-10 ml-auto'>
                                See More <Image src="/images/right-arrow.svg" alt=" " width={16} height={16} className='ml-2' />
                            </button>
                        </div>
                    </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
}

export default ScopeServices;