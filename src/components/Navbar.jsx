'use client';

import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full text-white text-center overflow-hidden">
      {/* Background Animation - Tech Style */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 600 400">
          <motion.circle
            cx="300"
            cy="200"
            r="150"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="1.5"
            initial={{ strokeDasharray: "1,10", rotate: 0 }}
            animate={{ strokeDasharray: "8,2", rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 p-4 max-w-2xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl font-bold sm:text-3xl text-white"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I am Nishchay Sinha.
        </motion.h1>
        <motion.p
          className="mt-2 text-base sm:text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring Machine Learning Engineer & Data Science Enthusiast.
        </motion.p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button 
            onClick={() => navigate('/contact')} 
            className="rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
          >
            Contact Me
          </button>

          <a 
            href="/public/resume.pdf" 
            download="resume.pdf"
            className="rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
