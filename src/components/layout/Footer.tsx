import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div className='flex'>
            <div className='col-01 flex flex-col items-center justify-center'>
                <img src="/images/digireps-logo-sm.webp" alt="DigiReps" className='mb-5' />
                <p className='text-center'>The smart way to grow your team <br /> remotely!</p>
            </div>
            <div className='col-02'>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className='col-03 p-8'>
                <h3 className='text-white mb-5'>Highly Rated</h3>
                <div className="flex items-center mb-5">
                    <img src="/images/google-reviews-logo.webp" alt="Google" />
                    <img src="/images/trust-pilot-logo.webp" alt="Trustpilot" />
                    <img src="/images/clutch-logo.webp" alt="Clutch" />
                </div>
                <h3 className='text-white mb-5'>Get in Touch</h3>
                <p className='mb-5'>447 Broadway, Ste 7168 New York - 10013, United States</p>
                <p className='mb-5'><a href="mailto:Contact@DigiReps.co">Contact@DigiReps.co</a></p>
                <p><a href="tel:+13474791144">+1 (347) 479-1144</a></p>
            </div>
            <div className='col-04'>
                <ul>
                    <li></li>
                    <li><a href="#">Apply Now</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className='fs-row flex items-center justify-between pl-25 pr-25 pt-10 pb-10'>
            <div className='flex items-center gap-10'>
                <a href="#">About</a>
                <a href="#">Why DigiReps?</a>
                <a href="#">Hire</a>
                <a href="#">Solutions</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact Us</a>
            </div>
            <p>© Copyright 2025 | DigiFly Global LLC DBA DigiReps.co</p>
        </div>
    </footer>
  )
}

export default Footer;