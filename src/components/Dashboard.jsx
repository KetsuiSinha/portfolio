import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, ChevronLeft } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const AdvancedDashboard = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setIsExpanded(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = [
    { path: '/', name: 'home', icon: <Home className="w-6 h-6" /> },
    { path: '/about', name: 'about', icon: <User className="w-6 h-6" /> },
    { path: '/projects', name: 'projects', icon: <Briefcase className="w-6 h-6" /> },
    { path: '/contact', name: 'contact', icon: <Mail className="w-6 h-6" /> }
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-black to-violet-900 relative overflow-hidden">
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
            {sections.map(({ path, name, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => `flex items-center w-full p-4 rounded-xl my-2 cursor-pointer transition-all duration-300 ${
                  isActive ? 'bg-purple-600/20 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {icon}
                {isExpanded && <span className="ml-3 capitalize font-medium">{name}</span>}
              </NavLink>
            ))}
          </nav>
        </motion.aside>
      )}

      <motion.main
        key={location.pathname}
        className="flex-1 p-8 bg-gradient-to-br from-black to-violet-900 overflow-y-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default AdvancedDashboard;
