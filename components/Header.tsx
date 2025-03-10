import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu lors d'un clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Vérifier si le clic est en dehors du menu et du bouton menu
      if (menuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-btn')) {
        setMenuOpen(false);
      }
    };

    // Fermer le menu lors d'un défilement
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    // Fermer le menu en appuyant sur Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Ajouter les event listeners
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);

    // Nettoyer les event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fermer le menu après avoir cliqué sur un lien
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm px-4 sm:px-6 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section: Logo and Developer Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-3">
              {/* Stylized orange D letter-like icon */}
              <div className="w-10 h-10 rounded-md bg-custom-orange flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
            </div>
            <div>
              <h1 className="text-custom-orange font-medium text-[17px]">Diabate Sekou</h1>
              <p className="text-xs text-gray-700 uppercase tracking-wide">Digital Architect & DevSecOp</p>
            </div>
          </Link>
        </div>

        {/* Center Section: Contact Information */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <span className="text-gray-700">Contact - </span>
          <a href="mailto:diabatesekou1337@gmail.com" className="text-custom-orange ml-1">
            diabatesekou1337@gmail.com
          </a>
        </div>

        {/* Right Section: Social Icons and Menu */}
        <div className="flex items-center">
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3 mr-5">
            <Link href="https://facebook.com" aria-label="Facebook" className="inline-block w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaFacebook size={10} className="text-white" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="inline-block w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaTwitter size={10} className="text-white" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="inline-block w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaLinkedin size={10} className="text-white" />
            </Link>
            <Link href="https://github.com" aria-label="GitHub" className="inline-block w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaGithub size={10} className="text-white" />
            </Link>
            <Link href="https://whatsapp.com" aria-label="WhatsApp" className="inline-block w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaWhatsapp size={10} className="text-white" />
            </Link>
          </div>
          
          {/* Menu Text and Button */}
          <div className="flex items-center">
            <span className="mr-2 hidden md:inline text-gray-800 font-medium">Menu</span>
            <button 
              onClick={toggleMenu} 
              className="menu-btn p-1 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes size={20} className="text-gray-800" /> : <FaBars size={20} className="text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with improved transition */}
      <div 
        className={`mobile-menu absolute left-0 top-full w-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="md:hidden mb-4">
            <p className="text-sm mb-2">
              <span className="text-gray-700">Contact - </span>
              <a href="mailto:diabatesekou1337@gmail.com" className="text-custom-orange">
                diabatesekou1337@gmail.com
              </a>
            </p>
          </div>
          <nav className="flex flex-col space-y-3">
            <Link href="/" onClick={handleLinkClick} className="text-gray-800 hover:text-custom-orange transition-colors">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="text-gray-800 hover:text-custom-orange transition-colors">About</Link>
            <Link href="/services" onClick={handleLinkClick} className="text-gray-800 hover:text-custom-orange transition-colors">Services</Link>
            <Link href="/portfolio" onClick={handleLinkClick} className="text-gray-800 hover:text-custom-orange transition-colors">Portfolio</Link>
            <Link href="/contact" onClick={handleLinkClick} className="text-gray-800 hover:text-custom-orange transition-colors">Contact</Link>
          </nav>
          <div className="flex mt-4 space-x-4 md:hidden">
            <Link href="https://facebook.com" aria-label="Facebook" className="w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaFacebook size={10} className="text-white" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaTwitter size={10} className="text-white" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaLinkedin size={10} className="text-white" />
            </Link>
            <Link href="https://github.com" aria-label="GitHub" className="w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaGithub size={10} className="text-white" />
            </Link>
            <Link href="https://whatsapp.com" aria-label="WhatsApp" className="w-[18px] h-[18px] bg-custom-orange rounded-full flex items-center justify-center">
              <FaWhatsapp size={10} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;