import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiPenTool, FiMessageSquare } from 'react-icons/fi';

const services = [
  {
    title: 'Web',
    icon: <FiCode className="w-8 h-8 mb-4 text-blue-400" />,
    description: 'I build beautiful, responsive, and high-performing websites that deliver results.',
    tags: ['Web Design', 'Web Development', 'WordPress', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Design',
    icon: <FiLayout className="w-8 h-8 mb-4 text-purple-400" />,
    description: 'I create compelling brand identities and user experiences through thoughtful design and storytelling.',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research', 'Design Systems', 'Interaction Design', 'Motion Design', 'Brand Identity']
  },
  {
    title: 'Apps & Software',
    icon: <FiSmartphone className="w-8 h-8 mb-4 text-green-400" />,
    description: 'I design and develop scalable software solutions, from SaaS products to mobile apps, that solve real business challenges.',
    tags: ['React Native', 'Progressive Web Apps', 'State Management', 'API Integration', 'Performance']
  }
];

const coreStrengths = [
  { name: 'UI/UX Design', icon: <FiPenTool /> },
  { name: 'Product Strategy', icon: <FiTrendingUp /> },
  { name: 'Creative Direction', icon: <FiLayout /> },
  { name: 'Frontend Development', icon: <FiCode /> },
  { name: 'Brand Identity', icon: <FiMessageSquare /> },
  { name: 'Problem Solving', icon: <FiCode /> }
];

function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 md:mb-20 max-w-2xl md:max-w-3xl lg:max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
            I am a multi-disciplinary creative professional who translates ideas into engaging digital experiences. My work combines design, development, and creative strategy across web, apps, and branding to build products that are both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 px-0 md:px-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center px-2 md:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-white">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {coreStrengths.map(strength => (
              <div key={strength.name} className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm md:text-base rounded-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm">
                <span className="text-blue-500 dark:text-blue-400">{strength.icon}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{strength.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
