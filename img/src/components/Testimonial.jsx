import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonial = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    className='flex flex-col items-center justify-center my-16 px-4 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-black'>Testimonials</h1>
      <p className='text-neutral-500 mb-10'>What our users are saying</p>

      <div className='flex flex-row justify-center gap-6'>
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className='bg-white p-6 rounded-lg shadow-md w-72 hover:scale-[1.03] transition-all border border-neutral-200 text-neutral-800'
          >
            <div className='flex flex-col items-center'>
              <img className='rounded-full w-14 mb-3' src={item.image} alt={item.name} />
              <h2 className='text-lg font-semibold'>{item.name}</h2>
              <p className='text-sm text-neutral-500'>{item.role}</p>

              <div className='flex my-2'>
                {Array(item.stars).fill().map((_, idx) => (
                  <img key={idx} src={assets.rating_star} alt="star" className='h-4 w-4' />
                ))}
              </div>

              <p className='text-sm text-center text-neutral-600'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonial
