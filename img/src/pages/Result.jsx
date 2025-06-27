import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react";
import { Appcontext } from '../context/Appcontext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  
  const { generateImage } = useContext(Appcontext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await generateImage(input);
    
    if (result) {
      setImage(result);
      setIsImageLoaded(true);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setIsImageLoaded(false);
    setInput('');
    setImage(assets.sample_img_1);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
    >
      {/* Image display */}
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="Generated" />
          <span className={`absolute bottom-0 h-1 w-full transition-all duration-[10s] bg-blue-500 ${loading ? 'w-full' : 'w-0'}`}></span>
        </div>
        {loading && <p className="text-sm text-gray-600 mt-2">Loading...</p>}
      </div>

      {/* Prompt input */}
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm px-4 py-2 mt-10 rounded-full items-center gap-2">
          <input
            value={input}
            onChange={handleInput}
            type="text"
            className="flex-1 bg-transparent placeholder-white outline-none"
            placeholder="Enter your prompt here..."
          />
          <button
            className="bg-zinc-900 px-6 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-zinc-800 transition"
            type="submit"
          >
            Generate
          </button>
        </div>
      )}

      {/* Action buttons after image is generated */}
      {isImageLoaded && (
        <div className="mt-9 flex items-center justify-center gap-9">
          <p
            onClick={handleReset}
            className="bg-green-500 px-10 py-3 rounded-full cursor-pointer border border-zinc-900 text-black"
          >
            Generate Another
          </p>
          <a
            download
            href={image}
            className="bg-blue-500 px-10 py-3 rounded-full cursor-pointer text-white"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
