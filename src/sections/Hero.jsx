import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiCode } from 'react-icons/fi';

function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Frontend Engineer, AI';

  // Reset animation when fullText changes
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);


  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen pt-20 pb-12 md:py-20 text-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-purple-50/50 to-pink-50/70 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full">
            <FiCode className="w-12 h-12 text-white" />
          </div>
          
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Aston Ong
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center mb-8 h-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
              {currentText}
              <span className="inline-block w-1 h-8 ml-1 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse self-center"></span>
            </h2>
          </motion.div>
          
          <motion.p
            className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Building businesses and creative projects that make a difference. Passionate about innovation, collaboration, and turning ideas into reality.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 hover:-translate-y-1 border-2 border-gray-200 dark:border-gray-700"
            >
              Get In Touch
            </a>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a 
              href="https://github.com/a5ton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/aston-ong-3a9834364/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://x.com/a5ton14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold text-2xl flex items-center justify-center h-6">𝕏</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
