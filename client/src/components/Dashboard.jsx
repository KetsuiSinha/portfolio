import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, Settings, Code, Database, Brain } from 'lucide-react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Projects from './Projects';

const AdvancedDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setIsExpanded(false);
    };
    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = {
    home: {
      icon: <Home className="w-6 h-6" />,
      content: (
        <div className="relative flex flex-col items-center justify-center h-full w-full text-white text-center">
          {/* SVG Circle Animation */}
          <motion.div className="absolute inset-0">
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

          {/* Content */}
          <motion.div
            className="relative z-10 p-4 max-w-2xl w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 className="text-3xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Hi, I am Nishchay Sinha.
            </motion.h1>
            <motion.p
              className="mt-2 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Aspiring Machine Learning Engineer & Data Science Enthusiast.
            </motion.p>
            <div className="mt-4 flex justify-center gap-x-3">
              <button
                onClick={() => setActiveSection('contact')}
                className="rounded-md bg-purple-600 px-4 py-2 text-white font-semibold shadow-md hover:bg-purple-500 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      ),
      isStatic: true,
    },
    about: { icon: <User className="w-6 h-6" />, content: <AboutUs />, isStatic: false },
    projects: { icon: <Briefcase className="w-6 h-6" />, content: <Projects />, isStatic: false },
    contact: { icon: <Mail className="w-6 h-6" />, content: <Contact />, isStatic: false },
  };

  return (
    <div className="flex flex-col md:flex-row h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-violet-900 opacity-95 z-0" />

      {/* Background SVGs */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute top-1/4 left-1/4 animate-spin opacity-5" style={{ animationDuration: '20s' }}>
          <Settings className="w-32 h-32 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-spin opacity-5" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <Code className="w-24 h-24 text-purple-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-spin opacity-5" style={{ animationDuration: '12s' }}>
          <Database className="w-20 h-20 text-violet-400" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-spin opacity-5" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
          <Brain className="w-28 h-28 text-indigo-400" />
        </div>
      </div>

      {/* Sidebar (Desktop) */}
      {!isMobile && (
        <motion.aside
          animate={{ width: isExpanded ? '250px' : '80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="bg-gray-800/50 backdrop-blur-xl border-r border-gray-700 relative z-20 h-full hidden md:block"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-6 top-6 bg-gray-800 p-2 rounded-full"
          >
            <motion.div animate={{ rotate: isExpanded ? 0 : 180 }}>
              <Menu className="w-6 h-6 text-white" />
            </motion.div>
          </button>
          <nav className="pt-16 px-4">
            {Object.keys(sections).map((section) => (
              <div
                key={section}
                onClick={() => setActiveSection(section)}
                className={`flex items-center w-full p-4 rounded-xl my-2 cursor-pointer transition-all duration-300 ${
                  activeSection === section ? 'bg-purple-600/20 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {sections[section].icon}
                {isExpanded && <span className="ml-3 capitalize font-medium">{section}</span>}
              </div>
            ))}
          </nav>
        </motion.aside>
      )}

      {/* Main Content */}
      <main
        ref={sectionRef}
        className={`flex-1 relative z-10 ${
          sections[activeSection].isStatic
            ? 'flex justify-center items-center h-[calc(100vh-64px)] md:h-screen'
            : 'overflow-y-auto p-8 h-[calc(100vh-64px)] md:h-screen'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {sections[activeSection].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation (Mobile) */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around border-t border-gray-700 z-50 md:hidden">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-white flex flex-col items-center ${
                activeSection === section ? 'text-purple-400' : 'text-gray-300'
              }`}
            >
              {sections[section].icon}
              <span className="text-xs mt-1 capitalize">{section}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default AdvancedDashboard;