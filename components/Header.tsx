import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState("/");
  
  // Détecter le chemin actif uniquement côté client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      
      // Mettre à jour le chemin lors des changements de navigation
      const handleRouteChange = () => {
        setCurrentPath(window.location.pathname);
      };
      
      window.addEventListener('popstate', handleRouteChange);
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  // Gérer le défilement et l'apparence du header
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Fermer le menu lors du défilement
      if (menuOpen && offset > 10) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Fermer le menu lors d'un clic en dehors
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-btn')) {
        setMenuOpen(false);
      }
    };

    // Fermer le menu en appuyant sur Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    // Mettre à jour le chemin actuel lors du clic sur un lien
    setTimeout(() => {
      setCurrentPath(window.location.pathname);
    }, 0);
    setMenuOpen(false);
  };

  // Fonction pour vérifier si un chemin est actif
  const isActive = (path: string) => currentPath === path;

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub size={12} />, url: "https://github.com/diabsck", ariaLabel: "GitHub" },
    { icon: <FaLinkedin size={12} />, url: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { icon: <FaTwitter size={12} />, url: "https://twitter.com", ariaLabel: "Twitter" },
    { icon: <FaFacebook size={12} />, url: "https://facebook.com", ariaLabel: "Facebook" },
    { icon: <FaWhatsapp size={12} />, url: "https://wa.me/212714460468", ariaLabel: "WhatsApp" }
  ];

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.2 
      } 
    },
    hover: { 
      scale: 1.05, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { scale: 0.95 }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.4
      }
    })
  };

  const socialIconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({ 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.5 + i * 0.1
      } 
    }),
    hover: { 
      scale: 1.15,
      boxShadow: "0 0 12px rgba(255, 94, 21, 0.7)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { scale: 0.9 }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1 
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const isDiabateLetterHovered = (index: number) => hoveredIcon === 100 + index;

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white/95'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo et nom du développeur */}
        <Link href="/" className="flex items-center group">
          <motion.div 
            className="relative mr-3"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            {/* Effet de lueur orange */}
            <motion.div 
              className="absolute inset-0 bg-orange-400 rounded-md blur-md opacity-30"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Logo principal */}
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#FF5E15] to-[#FF8A50] flex items-center justify-center text-white font-bold text-xl relative z-10 shadow-lg">
              <span>S</span>
              
              {/* Effet de brillance */}
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 rounded-md"
                animate={{
                  opacity: [0, 0.5, 0],
                  left: ["-100%", "100%", "100%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </div>
          </motion.div>
          
          <div>
            {/* Nom avec animation lettre par lettre */}
            <div className="flex">
              {["D", "i", "a", "b", "a", "t", "e", " ", "S", "e", "k", "o", "u"].map((letter, index) => (
                <motion.span 
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className={`text-[17px] font-medium ${
                    letter === " " ? "w-1" : 
                    isDiabateLetterHovered(index) ? "text-[#FF5E15]" : "text-[#FF5E15] group-hover:text-gray-800"
                  }`}
                  onMouseEnter={() => setHoveredIcon(100 + index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  style={{ transition: "color 0.3s ease" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.p 
              className="text-xs text-gray-700 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Digital Architect & DevSecOp
            </motion.p>
          </div>
        </Link>

        {/* Information de contact au centre */}
        <motion.div 
          className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="text-gray-700">Contact - </span>
          <motion.a 
            href="mailto:diabatesekou1337@gmail.com" 
            className="text-[#FF5E15] ml-1 relative"
            whileHover={{ x: 2 }}
          >
            diabatesekou1337@gmail.com
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5E15]"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Icônes sociales et Menu */}
        <div className="flex items-center">
          {/* Icônes sociales avec effet de survol */}
          <div className="hidden md:flex items-center space-x-3 mr-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.ariaLabel}
                className="inline-block w-[22px] h-[22px] bg-gradient-to-br from-[#FF5E15] to-[#FF8A50] rounded-full flex items-center justify-center text-white"
                custom={index}
                variants={socialIconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Bouton de menu avec animation */}
          <div className="flex items-center">
            <motion.span 
              className="mr-2 hidden md:inline font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Menu
            </motion.span>
            <motion.button 
              onClick={toggleMenu} 
              className="menu-btn p-2 rounded-md focus:outline-none relative"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              whileHover={{ 
                backgroundColor: "rgba(255, 94, 21, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.9, 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <motion.div
                animate={{
                  rotate: menuOpen ? 90 : 0
                }}
                transition={{
                  duration: 0.3
                }}
              >
                {menuOpen ? (
                  <HiX size={22} className="text-[#FF5E15]" />
                ) : (
                  <HiMenu size={22} className="text-gray-800" />
                )}
              </motion.div>
              
              {/* Effet de pulsation au survol */}
              <motion.span
                className="absolute inset-0 rounded-md bg-[#FF5E15]/10"
                animate={{
                  scale: menuOpen ? [1, 1.1, 1] : [1, 1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: menuOpen ? Infinity : 0,
                  repeatType: "reverse"
                }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec animation avancée */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu absolute left-0 top-full w-full bg-white shadow-lg z-40 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            key="mobile-menu"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Contact info mobile */}
              <motion.div 
                className="md:hidden mb-5"
                variants={menuItemVariants}
              >
                <p className="text-sm mb-2">
                  <span className="text-gray-700">Contact - </span>
                  <a href="mailto:diabatesekou1337@gmail.com" className="text-[#FF5E15]">
                    diabatesekou1337@gmail.com
                  </a>
                </p>
              </motion.div>
              
              {/* Navigation */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    custom={index}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.path} 
                      onClick={handleLinkClick}
                      className={`group flex items-center text-lg ${
                        isActive(link.path) 
                          ? "text-[#FF5E15] font-medium" 
                          : "text-gray-800 hover:text-[#FF5E15]"
                      } transition-colors`}
                    >
                      <motion.span 
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          isActive(link.path) 
                            ? "bg-[#FF5E15]" 
                            : "bg-gray-300 group-hover:bg-[#FF5E15]"
                        } mr-2 transition-colors`}
                        animate={{
                          scale: isActive(link.path) ? [1, 1.3, 1] : 1
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive(link.path) ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      />
                      {link.name}
                      <motion.span 
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: isActive(link.path) ? [0, 3, 0] : 0 }}
                        transition={{
                          duration: 1,
                          repeat: isActive(link.path) ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Icônes sociales pour mobile */}
              <motion.div 
                className="flex mt-6 space-x-4 md:hidden"
                variants={menuItemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.ariaLabel}
                    className="w-8 h-8 bg-gradient-to-br from-[#FF5E15] to-[#FF8A50] rounded-full flex items-center justify-center text-white"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 12px rgba(255, 94, 21, 0.7)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {React.cloneElement(social.icon as React.ReactElement, { size: 14 })}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;