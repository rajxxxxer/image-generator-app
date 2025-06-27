import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}} 
    className='flex flex-col items-center justify-center my-20 px-4 md:px-28 text-center'>
      

      {/* Title */}
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-black'>
        Generate AI → Image
      </h1>
      <p className='text-neutral-500 mb-10'>Turn your imagination into visuals</p>

      {/* Content */}
      <div className='flex flex-col xl:flex-row items-center gap-10 w-full'>
        <img
          className='w-80 xl:w-96 rounded-lg shadow-md'
          src={assets.sample_img_1}
          alt="sample"
        />

        <div className='text-left max-w-xl'>
          <h2 className='text-2xl font-semibold mb-3 text-pink-500'>
            Introducing: GEN-AI — Transform thoughts into reality
          </h2>
          <p className='text-neutral-600 text-sm leading-relaxed'>
            Welcome to <span className='text-black font-medium'>Imagify</span>! ✨ 
            Just type in your idea and watch as words bloom into stunning visuals — whether it's lifelike photos, artistic illustrations, or fun sticker designs. 🎨💡<br /><br />
            Perfect for blogs, social media posts, branding assets, or simply unleashing your creativity.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
