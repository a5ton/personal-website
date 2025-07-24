import React, { useState } from 'react';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

function Projects() {
  // Show all projects
  const filteredProjects = projects;

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
           Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A collection of my professional work and projects. Each piece represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div className="space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-md dark:shadow-gray-800/30"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View on GitHub"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 shadow-md dark:shadow-gray-800/30"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View live demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      {project.date && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {project.date}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
