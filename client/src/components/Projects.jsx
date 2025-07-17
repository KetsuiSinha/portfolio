import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { name: "Generative Text for Customer Support", description: "AI-generated responses for automation.", tag: "ML | NLP", size: "lg:col-span-2 md:col-span-2 col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/generative-text-for-customer-support-automation" },
  { name: "Neural Network SMS Classifier", description: "Detects spam messages.", tag: "ML | Neural Networks", size: "lg:col-span-1 col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/neural-network-sms-classifier" },
  { name: "Rock Paper Scissors (Python Game)", description: "A simple game implementation.", tag: "Python | Game Dev", size: "lg:col-span-1 col-span-1 row-span-2", link: "https://github.com/KetsuiSinha/rock-paper-scissor" },
  { name: "Image Generation for E-commerce", description: "AI-powered image synthesis.", tag: "ML | Computer Vision", size: "lg:col-span-2 md:col-span-2 col-span-1 row-span-1", link: 'https://github.com/KetsuiSinha/image-generation-for-e-commerce' },
  { name: "Electricity Generation Prediction", description: "Forecasting energy production.", tag: "ML | Time Series", size: "lg:col-span-1 col-span-1 lg:row-span-2 row-span-1", link: "https://github.com/KetsuiSinha/electricity_generation_prediction" },
  { name: "Song Popularity Analysis & Prediction", description: "Predicting hit songs using data.", tag: "ML | Data Science", size: "lg:col-span-2 md:col-span-2 col-span-1 lg:row-span-2 row-span-1", link: "https://github.com/KetsuiSinha/song-popularity-analysis-and-prediction" },
  { name: "React Admin Dashboard", description: "A modern admin dashboard.", tag: "Frontend | React", size: "lg:col-span-1 col-span-1", link: "https://react-admin-dashboard-4rym-8hobisl08-ketsuisinhas-projects.vercel.app/" },
  { name: "IEEE Website 24-25", description: "Official IEEE chapter website.", tag: "Frontend | Next.js", size: "lg:col-span-2 md:col-span-2 col-span-1 row-span-1", link:"https://ieee.tcetmumbai.in/" },
  { name: "Instagram Clone", description: "A social media clone with core features.", tag: "Frontend | React", size: "lg:col-span-1 col-span-1 lg:row-span-2 row-span-1", link: "https://instagram-clone-ashy-three.vercel.app/" },
  { name: "Soshable", description: "Platform for social causes.", tag: "Full Stack | MERN", size: "lg:col-span-2 md:col-span-2 col-span-1 row-span-1", link: "https://soshable.vercel.app/" },
  { name: "Book Recommendation (KNN)", description: "Recommends books using KNN.", tag: "ML | Recommender System", size: "lg:col-span-1 col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/book-recommendation-using-KNN" },
  { name: "Cat & Dog Classifier", description: "Classifies images of cats and dogs.", tag: "ML | CNN", size: "lg:col-span-1 col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/cat-and-dog-classifier" },
  { name: "Linear Regression Health Classifier", description: "Predicts health outcomes.", tag: "ML | Regression", size: "lg:col-span-2 md:col-span-2 col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/linear-regression-health-classifier" }
];



const BentoBox = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-4 bg-gray-900 min-h-screen text-white">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className={`group relative bg-gray-800/50 backdrop-blur-sm shadow-xl rounded-2xl p-6 
            flex flex-col justify-between 
            border border-gray-700/50 hover:border-gray-500
            transition-all duration-300 ease-in-out
            ${project.size}`}
        >
          <div>
            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-gray-400 mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <div className="mt-4">
            <span className="inline-block text-xs bg-gray-700 px-3 py-1 rounded-full 
              shadow-md hover:bg-gray-600 transition-colors">
              {project.tag}
            </span>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-gray-400 
                hover:text-blue-400 transition-all group/link"
            >
              <span>View Project</span>
              <FaExternalLinkAlt className="group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 
            group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default BentoBox;