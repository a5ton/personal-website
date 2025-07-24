import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observer = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Check scroll position on initial load
    handleScroll();
    
    // Set up Intersection Observer to detect active section
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, observerOptions);
    sections.forEach(section => observer.current.observe(section));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a 
              href="#hero" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              onClick={(e) => scrollToSection(e, '#hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aston Ong
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors relative ${
                      link.href === '#hero' && !scrolled 
                        ? 'text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    } ${
                      `#${activeSection}` === link.href ? 'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400' : ''
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
              
              <motion.button
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode(dm => !dm)}
                className="p-2 transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-0 left-0 w-full min-h-screen z-[100] bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 shadow-lg overflow-y-auto"
            >
              <div className="px-4 pt-24 pb-8 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-3 py-4 rounded-md text-xl font-semibold text-center transition-colors ${
                      `#${activeSection}` === link.href 
                        ? 'text-blue-600 dark:text-blue-400 underline underline-offset-8'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    } hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center">
                  <button
                    onClick={() => setDarkMode(dm => !dm)}
                    className="flex items-center px-3 py-2 text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {darkMode ? (
                      <>
                        <Sun className="mr-2 h-5 w-5 text-yellow-400" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-5 w-5" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
