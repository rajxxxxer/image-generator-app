import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { FaUserCircle } from 'react-icons/fa';
import { FaUserInjured } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Appcontext } from '../context/Appcontext';
import { motion } from "motion/react"; // as requested
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowlogin, backendurl, setToken, setUser } = useContext(Appcontext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(`${backendurl}/api/user/login`, { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowlogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendurl}/api/user/register`, { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowlogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center relative'
      >
        <div className='flex flex-col items-center mb-6'>
          <FaUserInjured className='text-5xl text-gray-600 mb-2' />
          <h1 className='text-2xl font-semibold text-gray-800'>{state}</h1>
          <p className='text-sm text-gray-500'>
            {state === 'Login'
              ? 'Welcome back! Please sign in to continue.'
              : 'Create a new account to get started.'}
          </p>
        </div>

        {state !== 'Login' && (
          <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <FaUserCircle className='text-xl text-gray-600' />
            <input
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your Name'
              className='w-full px-4 py-2 border-none outline-none'
            />
          </div>
        )}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img src={assets.email_icon} alt="email" className="w-5 h-5" />
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='w-full px-4 py-2 border-none outline-none'
          />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img src={assets.lock_icon} alt="lock" className="w-5 h-5" />
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className='w-full px-4 py-2 border-none outline-none'
          />
        </div>

        <p className="text-sm text-right text-blue-600 mt-2 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        <button
          type='submit'
          className='w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300 mt-4'
        >
          {state === 'Login' ? 'Login' : 'Sign Up'}
        </button>

        <p className='mt-5 text-center text-sm'>
          {state === 'Login' ? (
            <>
              Don't have an account?{' '}
              <span className='text-blue-600 cursor-pointer hover:underline' onClick={() => setState('Sign Up')}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className='text-blue-600 cursor-pointer hover:underline' onClick={() => setState('Login')}>
                Login
              </span>
            </>
          )}
        </p>

        <ImCross
          onClick={() => setShowlogin(false)}
          className='absolute top-5 right-5 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300'
          size={20}
        />
      </motion.form>
    </div>
  );
};

export default Login;
