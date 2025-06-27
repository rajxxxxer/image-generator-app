import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';
import { motion } from "motion/react"

const BuyCredit = () => {
  const{user}=useContext(Appcontext)
  const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ];

  const [plan, setPlan] = useState(plans);

  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='min-h-[80vh] text-center pt-14 mb-10 px-4'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-10'>
        Our Plans & Subscription
      </button>
      <h1 className='text-center text-3xl font-medium mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-8'>
        {plan.map((plann, index) => (
          <div
            key={index}
            className='bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 rounded-3xl p-8 text-white w-[260px] h-[420px] hover:from-gray-700 hover:to-gray-800 shadow-xl hover:shadow-2xl transform transition-all duration-500 delay-100 hover:scale-105'
          >
            <img src={assets.lock_icon} alt='Lock icon' className='h-10 mb-4 mx-auto' />
            <h2 className='text-2xl font-semibold mb-2'>{plann.id}</h2>
            <p className='mb-4 text-sm text-gray-300'>{plann.desc}</p>
            <p className='text-xl font-bold text-white mb-6'>
              ${plann.price} / {plann.credits} credits
            </p>
            <button className='w-full bg-white text-black py-3 rounded-md text-sm hover:bg-gray-300 transition-all duration-300'>
             {user?'Buy Now':'Login to Buy'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
