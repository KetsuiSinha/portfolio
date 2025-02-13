'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';


export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white text-center overflow-hidden">
      {/* Background Animation - Tech Style */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          <motion.circle
            cx="400"
            cy="300"
            r="250"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="2"
            initial={{ strokeDasharray: "1,10", rotate: 0 }}
            animate={{ strokeDasharray: "10,1", rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          />
          <motion.rect
            x="150"
            y="200"
            width="500"
            height="200"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
      
      {/* Main Content */}
      <motion.div
        className="relative z-10 p-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-extrabold sm:text-5xl text-white"
          whileHover={{ scale: 1.05 }}
        >
          Hi,<br /> I am Nishchay Sinha.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring Machine Learning Engineer, Data Science Enthusiast.
        </motion.p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          
          
          <button 
            onClick={() => window.dispatchEvent(new Event('navigateToContact'))} 
            className="rounded-md bg-gray-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
          >
            Contact Me
          </button>
          
          <a 
  href="/public/resume.pdf" 
  download="My_Resume.pdf"
  className="rounded-md bg-gray-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
>
  Download Resume
</a>

        </div>
      </motion.div>
    </div>
  );
}