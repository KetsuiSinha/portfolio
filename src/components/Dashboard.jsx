import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Briefcase, Mail, 
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Projects from './Projects';

const AdvancedDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setIsExpanded(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = {
    home: { icon: <Home className="w-6 h-6" />, content: <Navbar /> },
    about: { icon: <User className="w-6 h-6" />, content: <AboutUs /> },
    projects: { icon: <Briefcase className="w-6 h-6" />, content: <Projects/> },
    contact: { icon: <Mail className="w-6 h-6" />, content: <Contact /> }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 relative overflow-hidden">
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <motion.aside
          animate={{ width: isExpanded ? '250px' : '80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="bg-gray-800/50 backdrop-blur-xl border-r border-gray-700 relative z-20 hidden md:block"
        >
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-6 top-6 bg-gray-800 p-2 rounded-full"
          >
            <motion.div animate={{ rotate: isExpanded ? 0 : 180 }}>
              <ChevronLeft className="w-4 h-4 text-white" />
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
      <main ref={sectionRef} className="flex-1 p-8 overflow-y-auto relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {sections[activeSection].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation for Mobile */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-around border-t border-gray-700 md:hidden">
          {Object.keys(sections).map((section) => (
            <button key={section} onClick={() => setActiveSection(section)} className="text-white flex flex-col items-center">
              {sections[section].icon}
              <span className="text-xs mt-1">{section}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default AdvancedDashboard;
