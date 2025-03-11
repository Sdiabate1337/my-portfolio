import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const contactInfo = [
    { 
      icon: <FiMail />,
      title: "EMAIL",
      value: "diabatesekou1337@gmail.com",
      color: "#FF5E15"
    },
    { 
      icon: <FiPhone />,
      title: "TÉLÉPHONE",
      value: "+212 714460468",
      color: "#3182CE"
    },
    { 
      icon: <FaWhatsapp />,
      title: "WHATSAPP",
      value: "+212 714460468",
      link: "https://wa.me/212714460468",
      color: "#38A169"
    },
    { 
      icon: <FiMapPin />,
      title: "ADRESSE",
      value: "Marrakech, Maroc",
      color: "#805AD5"
    }
  ];
  
  const quickLinks = [
    { title: "Accueil", href: "/" },
    { title: "À propos", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" }
  ];
  
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/diabsck", 
      color: "#333",
      hoverColor: "#171515"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://linkedin.com", 
      color: "#0077B5",
      hoverColor: "#0369a1"
    },
    { 
      icon: <FaTwitter />, 
      href: "https://twitter.com", 
      color: "#1DA1F2",
      hoverColor: "#0c87d3"
    },
    { 
      icon: <FaFacebookF />, 
      href: "https://facebook.com", 
      color: "#1877F2",
      hoverColor: "#0d64d2"
    }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden bg-gray-900 text-white">
      {/* Vague décorative en haut du footer */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#111827" 
            fillOpacity="1" 
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      
      {/* Particules animées */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{ top: '15%', left: '10%' }}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{ top: '45%', right: '15%' }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full"
          style={{ bottom: '30%', left: '20%' }}
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container relative mx-auto px-6 py-16 z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Colonne Logo/Branding */}
          <motion.div 
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="flex items-center mb-6">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center shadow-lg mr-3"
                whileHover={{ rotate: 10 }}
              >
                <span className="text-white text-xl font-bold">S</span>
              </motion.div>
              <h2 className="text-2xl font-bold">Sekou<span className="text-orange-500">Dev</span></h2>
            </div>
            
            <p className="text-gray-400 mb-6">
              Je transforme vos idées en solutions numériques performantes et innovantes, avec une expertise en développement web, DevOps et automatisation.
            </p>
            
            {/* Réseaux sociaux */}
            <motion.div 
              className="flex space-x-3 mb-8"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800 text-gray-400 hover:text-white transition-all"
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: social.hoverColor,
                    color: "#fff",
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-3">
                Abonnez-vous pour recevoir mes dernières actualités
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-1 bg-gray-800 border-0 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <motion.button 
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-lg"
                  whileHover={{ backgroundColor: "#e34c01" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowUpRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Colonne des liens rapides */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Liens Rapides
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={fadeInUpVariants}>
                  <Link href={link.href} className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    />
                    {link.title}
                    <motion.span 
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Colonne services */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Services
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            
            <motion.ul 
              className="space-y-3"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Développement Web", "DevOps", "Cloud", "API & Backend", "CI/CD", "Automatisation"].map((service, index) => (
                <motion.li key={index} variants={fadeInUpVariants}>
                  <Link href="/services" className="group flex items-center text-gray-400 hover:text-white transition-colors">
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Colonne contact */}
          <motion.div 
            className="md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            
            <motion.ul 
              className="space-y-5"
              variants={staggerChildrenVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((contact, index) => (
                <motion.li key={index} variants={fadeInUpVariants}>
                  <div className="flex items-start group">
                    <motion.div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-md"
                      style={{ 
                        backgroundColor: `${contact.color}20`, 
                        color: contact.color 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: contact.color,
                        color: "#fff"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-lg">{contact.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 tracking-wider">{contact.title}</h4>
                      {contact.link ? (
                        <a 
                          href={contact.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-300 hover:text-white transition-colors group-hover:text-white"
                          style={{ color: `${contact.color}` }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        
        {/* Séparateur */}
        <motion.div 
          className="w-full h-px bg-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        
        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {currentYear} Sekou Diabaté. Tous droits réservés.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Bouton retour en haut */}
      <motion.div 
        className="absolute bottom-6 right-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.button 
          className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;