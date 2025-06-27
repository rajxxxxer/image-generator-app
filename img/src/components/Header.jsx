import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import Steps from './Steps'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'

const Header = () => {
  const navi = useNavigate();
  const{user,setShowlogin}=useContext(Appcontext);
  const handlegenerate = () => {
   if(user){
    navi('/result');
   }
   else{
    setShowlogin(true);
   }
  }
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}


    className='flex flex-col justify-center items-center text-center my-20 px-4'>

      {/* Tagline */}
      <motion.div
       initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{delay:0.2, duration: 0.5 }}
      className='inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-300 text-black'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" />
      </motion.div>

      {/* Heading */}
      <div>
        <motion.h1 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 ,delay:0.4}}
        className='mt-6 text-4xl font-bold transition-all duration-300 hover:text-5xl hover:text-pink-600'>
          Generate images from text with AI. Turn text → IMAGE;
        </motion.h1>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
         className='mt-4 max-w-2xl mx-auto text-neutral-600'>
          From silent pixels bloom whispered words, each stroke harvested by unseen eyes,
          transforming light into language, painting stories where once silence lay,
          and turning frozen moments into poetic echoes of what the heart perceives.
        </motion.p>
      </div>

      {/* Generate Button */}
      <div className='sm:text-lg text-white bg-black mt-8 px-12 py-2 flex items-center gap-2 rounded-full'>
        <motion.button
        onClick={handlegenerate}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          
         className='flex items-center gap-2'>
          Generate
          <img className='h-6' src={assets.star_group} alt="star group" />
        </motion.button>
      </div>

      {/* Sample Images */}
      <div className='relative group w-full mt-16'>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='flex flex-row flex-nowrap overflow-x-auto gap-3 max-w-full sample-scroll-container transition-all duration-300 scrollbar-hide'>
          {Array(6).fill(0).map((_, idx) => (
            <motion.img
            whileHover={{ scale: 1.05,duration: 0.3 }}
              key={idx}
              src={idx % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt={`sample-${idx}`}
              className='w-32 h-auto rounded hover:scale-105 transition-all duration-300 cursor-pointer shrink-0'
            />
          ))}
        </motion.div>
      </div>

      <Steps />
    </motion.div>
  )
}

export default Header
