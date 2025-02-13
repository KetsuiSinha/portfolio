import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { name: "Generative Text for Customer Support", description: "AI-generated responses for automation.", tag: "ML | NLP", size: "col-span-3 row-span-2", link: "https://github.com/KetsuiSinha/generative-text-for-customer-support-automation" },
  { name: "Image Generation for E-commerce", description: "AI-powered image synthesis.", tag: "ML | Computer Vision", size: "col-span-2 row-span-1", link: 'https://github.com/KetsuiSinha/image-generation-for-e-commerce' },
  { name: "Electricity Generation Prediction", description: "Forecasting energy production.", tag: "ML | Time Series", size: "col-span-1 row-span-2", link: "https://github.com/KetsuiSinha/electricity_generation_prediction" },
  { name: "Song Popularity Analysis & Prediction", description: "Predicting hit songs using data.", tag: "ML | Data Science", size: "col-span-2 row-span-2", link: "https://github.com/KetsuiSinha/song-popularity-analysis-and-prediction" },
  { name: "React Admin Dashboard", description: "A modern admin dashboard.", tag: "Frontend | React", size: "col-span-1 row-span-1", link: "https://react-admin-dashboard-4rym-8hobisl08-ketsuisinhas-projects.vercel.app/" },
  { name: "IEEE Website 24-25", description: "Official IEEE chapter website.", tag: "Frontend | Next.js", size: "col-span-2 row-span-1", link:"https://ieee.tcetmumbai.in/" },
  { name: "Instagram Clone", description: "A social media clone with core features.", tag: "Frontend | React", size: "col-span-1 row-span-2", link: "https://instagram-clone-ashy-three.vercel.app/" },
  { name: "Soshable", description: "Platform for social causes.", tag: "Full Stack | MERN", size: "col-span-2 row-span-1", link: "https://soshable.vercel.app/" },
  { name: "Book Recommendation (KNN)", description: "Recommends books using KNN.", tag: "ML | Recommender System", size: "col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/book-recommendation-using-KNN" },
  { name: "Cat & Dog Classifier", description: "Classifies images of cats and dogs.", tag: "ML | CNN", size: "col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/cat-and-dog-classifier" },
  { name: "Linear Regression Health Classifier", description: "Predicts health outcomes.", tag: "ML | Regression", size: "col-span-2 row-span-1", link: "https://github.com/KetsuiSinha/linear-regression-health-classifier" },
  { name: "Neural Network SMS Classifier", description: "Detects spam messages.", tag: "ML | Neural Networks", size: "col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/neural-network-sms-classifier" },
  { name: "Rock Paper Scissors (Python Game)", description: "A simple game implementation.", tag: "Python | Game Dev", size: "col-span-1 row-span-1", link: "https://github.com/KetsuiSinha/rock-paper-scissor" }
];

const BentoBox = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-900 min-h-screen text-white">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.3 }}
          className={`bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center text-lg font-semibold border-2 border-gray-500 hover:shadow-gray-500 ${project.size}`}
        >
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm text-gray-400 mt-2">{project.description}</p>
          <span className="text-xs bg-gray-700 px-3 py-1 rounded-full mt-2 shadow-md">{project.tag}</span>
          <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 mt-3 flex items-center gap-1 hover:text-gray-300 transition-colors"
>
  View Project <FaExternalLinkAlt />
</a>

        </motion.div>
      ))}
    </div>
  );
};

export default BentoBox;
