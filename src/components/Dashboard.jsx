import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Briefcase, Mail, 
  ChevronLeft, ChevronRight,
  Moon, Sun, 
} from 'lucide-react';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Projects from './Projects';

const AdvancedDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSection, setHoveredSection] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleNavigation = () => setActiveSection('contact');
    window.addEventListener('navigateToContact', handleNavigation);
    return () => window.removeEventListener('navigateToContact', handleNavigation);
  }, []);

  const sections = {
    home: {
      icon: <Home className="w-6 h-6" />,
      content: <Navbar />
    },
    about: {
      icon: <User className="w-6 h-6" />,
      content: <AboutUs />
    },
    projects: {
      icon: <Briefcase className="w-6 h-6" />,
      content: <Projects/>
    },
    contact: {
      icon: <Mail className="w-6 h-6" />,
      content: <Contact />
    }
  };

  const sidebarVariants = {
    expanded: { width: '250px' },
    collapsed: { width: '80px' }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const sliderVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1,
      boxShadow: "0 0 8px rgba(124, 58, 237, 0.5)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex h-screen bg-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0) 60%)`,
          transition: 'background 0.3s'
        }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <motion.aside
        initial="expanded"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="bg-gray-800/50 backdrop-blur-xl border-r border-gray-700 relative z-20"
      >
        <div className="absolute -right-6 top-6">
          <motion.button 
            onClick={() => setIsExpanded(!isExpanded)}
            variants={sliderVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative group bg-gradient-to-r from-purple-600 to-blue-600 p-0.5 rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-200" />
            <div className="relative bg-gray-800 rounded-full p-2 transition-colors group-hover:bg-gray-700">
              <motion.div
                animate={{ rotate: isExpanded ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        <nav className="pt-16 px-4">
          {Object.keys(sections).map(section => (
            <motion.div
              key={section}
              onHoverStart={() => setHoveredSection(section)}
              onHoverEnd={() => setHoveredSection(null)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveSection(section)}
              className={`
                relative flex items-center w-full p-4 rounded-xl my-2 cursor-pointer
                overflow-hidden transition-all duration-300
                ${activeSection === section 
                  ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white' 
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                variants={iconVariants}
                className="relative z-10"
              >
                {sections[section].icon}
              </motion.div>

              {isExpanded && (
                <span className="ml-3 capitalize font-medium relative z-10">
                  {section}
                </span>
              )}

              {(activeSection === section || hoveredSection === section) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 border border-purple-500/30 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {activeSection === section && (
                <motion.div
                  className="absolute right-2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      <main 
        ref={sectionRef}
        className="flex-1 p-8 overflow-y-auto relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="relative z-10"
          >
            {sections[activeSection].content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdvancedDashboard;