import React, { useState } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone, FiSend, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://github.com/a5ton',
    icon: <FiGithub className="w-6 h-6" />,
    label: 'GitHub',
    hoverColor: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    href: 'https://www.linkedin.com/in/aston-ong-3a9834364/',
    icon: <FiLinkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    href: 'https://x.com/a5ton14',
    icon: <span className="font-bold text-2xl flex items-center justify-center h-6">𝕏</span>,
    label: 'X',
    hoverColor: 'hover:text-blue-400 dark:hover:text-blue-300'
  },
];

const contactInfo = [
  {
    icon: <FiMapPin className="w-5 h-5" />,
    text: 'Hertfordshire, UK',
    color: 'text-blue-500',
    bg: 'bg-transparent border-2 border-blue-100 dark:border-blue-900/30',
    hover: 'hover:bg-blue-50/30 dark:hover:bg-blue-900/10',
    iconBg: 'bg-blue-100/30 dark:bg-blue-900/10'
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your form submission logic
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-200/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Based in the UK, I work with clients worldwide to create impactful digital experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm currently available for freelance work and open to discussing full-time opportunities. 
                Let's collaborate to bring your ideas to life!
              </p>
            </div> 
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-xl transition-all ${item.bg} ${item.hover}`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className={`p-3 rounded-lg flex-shrink-0 ${item.color} ${item.iconBg}`} style={{ backdropFilter: 'blur(4px)' }}>
                    {item.icon}
                  </div>
                  <span className="ml-4 text-gray-700 dark:text-gray-300">{item.text}</span>
                </motion.a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4 text-center md:text-left">Follow Me</h4>
              <div className="flex gap-6 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 transition-colors ${link.hoverColor}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                    transition={{ 
                      delay: 0.1 * index * 0.5, 
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send Me a Message
            </h3>
            
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Hi Aston, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-70"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
