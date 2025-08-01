import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent scroll on mount
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 cursor-pointer overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative bg-white dark:bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto cursor-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white z-10 shadow-lg transition-colors"
          aria-label="Close modal"
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Project images */}
        <div className="relative w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {project.images && project.images.length > 0 && (
            <>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[calc(90vh-200px)] object-contain"
                loading="lazy"
                decoding="async"
                style={{ contentVisibility: 'auto' }}
              />
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <FiArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              {project.date && (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.date}
                </p>
              )}
            </div>
            
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.title === 'Motorverse' && project.link && (
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

          {project.description && (
            <div className="prose dark:prose-invert max-w-none">
              {project.description}
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (projectId) => {
    setLoadedImages(prev => ({
      ...prev,
      [projectId]: true
    }));
  };
  
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Show all projects
  const filteredProjects = projects;

  return (
    <section id="projects" className="relative pt-12 pb-16 md:py-24 overflow-hidden">
      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95">
        <div className="hidden md:block absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A collection of my professional work and projects. Each piece represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col h-full cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-500 ${loadedImages[project.title] ? 'opacity-0' : 'opacity-100'}`}
                      style={{
                        background: 'linear-gradient(110deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite linear'
                      }}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[project.title] ? 'opacity-100' : 'opacity-0'}`}
                      loading="eager"
                      width="400"
                      height="225"
                      decoding="async"
                      onLoad={() => handleImageLoad(project.title)}
                    />
                  </div>
                  <style jsx global>{`
                    @keyframes shimmer {
                      0% { background-position: 200% 0; }
                      100% { background-position: -200% 0; }
                    }
                  `}</style>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                  <div className="space-x-3">
                    {(project.title === 'Motorverse' || project.title === 'Factory Driver Program' || project.title === 'Hopper & Wheatley Restorations') && project.link && (
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
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      {project.date && (
                        <div className="w-fit">
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded whitespace-nowrap">
                            {project.date}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
