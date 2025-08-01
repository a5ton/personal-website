import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone, FiSend, FiTwitter } from 'react-icons/fi';

import emailjs from '@emailjs/browser';

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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent! I\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
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
    <section id="contact" className="relative pt-24 pb-4 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/60 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
        </div>
        

      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
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
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-xl transition-all ${item.bg} ${item.hover}`}
                >
                  <div className={`p-3 rounded-lg flex-shrink-0 ${item.color} ${item.iconBg}`} style={{ backdropFilter: 'blur(4px)' }}>
                    {item.icon}
                  </div>
                  <span className="ml-4 text-gray-700 dark:text-gray-300">{item.text}</span>
                </a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4 text-center md:text-left">Follow Me</h4>
              <div className="flex gap-6 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div
            className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50"
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
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
