import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset après quelques secondes
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "TÉLÉPHONE",
      value: "+212 714460468",
      color: "#FF5E15",
      animation: {
        y: [0, -5, 0],
        transition: { repeat: Infinity, duration: 2, repeatType: "mirror" }
      }
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "EMAIL",
      value: "diabatesekou1337@gmail.com",
      color: "#3182CE",
      animation: {
        y: [0, -5, 0],
        transition: { repeat: Infinity, duration: 2.2, repeatType: "mirror", delay: 0.2 }
      }
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "ADRESSE",
      value: "Marrakech, Maroc",
      color: "#805AD5",
      animation: {
        y: [0, -5, 0],
        transition: { repeat: Infinity, duration: 2.4, repeatType: "mirror", delay: 0.4 }
      }
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WHATSAPP",
      value: "+212 714460468",
      link: "https://wa.me/212714460468",
      color: "#38A169",
      animation: {
        y: [0, -5, 0],
        transition: { repeat: Infinity, duration: 2.6, repeatType: "mirror", delay: 0.6 }
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-orange-50 to-blue-50">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-200 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>
        
        <motion.div 
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{ top: '15%', left: '10%' }}
          animate={{ 
            y: [0, 100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{ top: '30%', right: '15%' }}
          animate={{ 
            y: [0, 80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
          style={{ bottom: '20%', left: '20%' }}
          animate={{ 
            y: [0, -120, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-[#FF5E15] text-sm font-medium mb-4">
            CONTACTEZ-MOI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-xl mx-auto leading-tight">
            Discutons de votre <span className="text-[#FF5E15]">Projet</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Une question ou un projet à me soumettre ? N'hésitez pas à me contacter et je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Colonne gauche - Informations de contact */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Carte avec ombre et effets */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Comment me joindre ?</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-full mr-4 shadow-md"
                      style={{ background: `${method.color}15`, color: method.color }}
                      animate={method.animation}
                    >
                      {method.icon}
                    </motion.div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-500 tracking-wider">{method.title}</p>
                      {method.link ? (
                        <a 
                          href={method.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-800 font-medium group-hover:text-[#FF5E15] transition-colors"
                          style={{ color: activeField === method.title.toLowerCase() ? method.color : undefined }}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium" 
                           style={{ color: activeField === method.title.toLowerCase() ? method.color : undefined }}
                        >{method.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Réseaux sociaux */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Me suivre</h3>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/diabsck" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-[#333] hover:text-white transition-colors"
                  whileHover={{ y: -5, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-[#0077B5] hover:text-white transition-colors"
                  whileHover={{ y: -5, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                  whileHover={{ y: -5, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Formulaire de contact */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white rounded-2xl p-12 shadow-xl text-center"
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiCheck className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Envoyer un nouveau message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-xl relative border border-gray-100 overflow-hidden"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Effet de brillance */}
                  <motion.div 
                    className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    animate={{ left: ["100%"] }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 3,
                      repeatDelay: 7
                    }}
                  />
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <motion.div 
                        className={`relative rounded-lg border ${activeField === 'name' ? 'border-[#FF5E15] ring-1 ring-[#FF5E15]' : 'border-gray-200'} transition-all duration-200`}
                        whileHover={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)" }}
                      >
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 rounded-lg bg-transparent focus:outline-none"
                          required
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5E15] origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeField === 'name' ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                      <motion.div 
                        className={`relative rounded-lg border ${activeField === 'email' ? 'border-[#3182CE] ring-1 ring-[#3182CE]' : 'border-gray-200'} transition-all duration-200`}
                        whileHover={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)" }}
                      >
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          placeholder="email@exemple.com" 
                          className="w-full px-4 py-3 rounded-lg bg-transparent focus:outline-none"
                          required
                        />
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3182CE] origin-left"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeField === 'email' ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <motion.div 
                      className={`relative rounded-lg border ${activeField === 'subject' ? 'border-[#805AD5] ring-1 ring-[#805AD5]' : 'border-gray-200'} transition-all duration-200`}
                      whileHover={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)" }}
                    >
                      <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        placeholder="Comment puis-je vous aider ?" 
                        className="w-full px-4 py-3 rounded-lg bg-transparent focus:outline-none"
                        required
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#805AD5] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'subject' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <motion.div 
                      className={`relative rounded-lg border ${activeField === 'message' ? 'border-[#38A169] ring-1 ring-[#38A169]' : 'border-gray-200'} transition-all duration-200`}
                      whileHover={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)" }}
                    >
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        placeholder="Décrivez votre projet ou vos questions..." 
                        className="w-full px-4 py-3 rounded-lg bg-transparent focus:outline-none min-h-[150px]"
                        required
                      />
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#38A169] origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === 'message' ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-[#FF5E15] to-[#FF8A50] text-white rounded-lg font-medium relative overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div 
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <motion.div 
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          />
                          ENVOI EN COURS...
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          ENVOYER
                          <motion.span 
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                          >
                            <FiArrowRight className="w-5 h-5" />
                          </motion.span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Effet de brillance sur le bouton */}
                    <motion.div 
                      className="absolute top-0 -left-full w-full h-full bg-white opacity-20"
                      animate={{ 
                        left: ["100%"] 
                      }}
                      transition={{ 
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1,
                        repeatDelay: 3
                      }}
                    />
                  </motion.button>
                  
                  <p className="mt-4 text-sm text-gray-600 italic">
                    * Vos données restent confidentielles et ne seront jamais partagées.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;