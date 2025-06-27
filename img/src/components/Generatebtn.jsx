import React, { use, useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { Appcontext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Generatebtn = () => {
  const{user,setShowlogin}=useContext(Appcontext);
  const navi=useNavigate()
  const handle=()=>{
    if(user){
     navi('/result');
    }
    else{
      setShowlogin(true);
    }
  }
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>
        The magic begins. Try it...
      </h1>
      <button onClick={handle} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white hover:scale-105 transition-all duration-500'>
        Generate Img
        <img className='h-6' src={assets.star_group} alt='Stars' />
      </button>
    </motion.div>
  );
};

export default Generatebtn;