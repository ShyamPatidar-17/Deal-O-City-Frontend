import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Deal-O-City, your ultimate destination for unbeatable deals and trending collections! We are passionate about delivering the best products at the best prices—straight to your doorstep. Whether it’s fashion, electronics, home essentials, or daily needs, our curated selection ensures there’s something for everyone.
          </p>
          <p>
            At Deal-O-City, we believe in quality, affordability, and customer satisfaction. Our mission is to make online shopping easy, fun, and rewarding. With fast shipping, reliable service, and exciting offers around the clock, we aim to become your favorite online shopping hub.
          </p>


          <b className='text-gray-800'>OUR MISSION</b>
          <p>
            At Deal-O-City, our mission is to make quality products affordable and accessible to everyone. We strive to deliver an exceptional online shopping experience by offering the best deals, fast delivery, and top-notch customer support.
          </p>
          <p>
            We are committed to building a trusted platform where customers can shop confidently, discover new trends, and enjoy great savings every day. Our goal is to bring joy to shopping—one deal at a time.
          </p>

        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            At Deal-O-City, quality is at the heart of everything we do. We carefully source and verify each product to ensure it meets our high standards for durability, functionality, and value. Every item listed on our platform undergoes strict quality checks before reaching your doorstep.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence</b>
          <p className='text-gray-600'>
            At Deal-O-City, we make shopping simple, fast, and hassle-free. Our user-friendly platform allows you to browse, compare, and order your favorite products from the comfort of your home. With secure payment options, smooth checkout, and timely delivery, we prioritize your convenience every step of the way. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            At Deal-O-City, we believe that great service is just as important as great deals. Our dedicated support team is here to assist you at every step—from product inquiries to post-purchase help. We aim to provide quick responses, clear solutions, and a smooth shopping experience for every customer.
          </p>
        </div>
      </div>
<Newsletter/>

    </div>
  )
}

export default About
