import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaArrowRight, FaCode, FaDocker, FaGit, FaMicrochip, FaCloudsmith, FaShieldAlt } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

const Hero = () => {
  // Détection des préférences utilisateur
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
  
  const isMobile = typeof window !== 'undefined' 
    ? window.innerWidth < 768 
    : false;

  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Configuration des particules
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };
  
  const particlesLoaded = async (container: Container | undefined) => {
    // Console log supprimé
  };

  // Variantes d'animation adaptées pour l'accessibilité
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const photoMosaicVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.2
      }
    },
  };

  const photoItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12
      }
    },
  };

  const skillPillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: prefersReducedMotion ? 0 : 0.8 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: prefersReducedMotion ? 1 : 1.08,
      y: prefersReducedMotion ? 0 : -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10
      }
    },
    tap: { scale: prefersReducedMotion ? 1 : 0.98 }
  };

  const nameLetterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.5 + (i * 0.08),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const floatVariants: Variants = {
    float: {
      y: prefersReducedMotion ? 0 : [0, -10, 0],
      transition: {
        duration: 3.5,
        repeat: prefersReducedMotion ? 0 : Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants: Variants = {
    rotate: {
      rotate: prefersReducedMotion ? 0 : [0, 360],
      transition: {
        duration: 20,
        repeat: prefersReducedMotion ? 0 : Infinity,
        ease: "linear"
      }
    }
  };

  const skills = [
    { icon: <FaCode />, text: "C/C++" },
    { icon: <FaCode />, text: "TypeScript" },
    { icon: <FaDocker />, text: "Docker" },
    { icon: <FaGit />, text: "Git" },
    { icon: <FaMicrochip />, text: "Microservices" },
    { icon: <FaCloudsmith />, text: "Cloud" },
    { icon: <FaShieldAlt />, text: "Security" }
  ];

  // Animation du texte lettre par lettre
  const nameText = "Diabate Sekou";
  const titleText = "Digital architect & DevSecOp";

  return (
    <section className="hero min-h-screen relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Particules animées */}
      <div className="absolute inset-0 -z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: ["#FF5E15", "#3B82F6", "#6366F1"]
              },
              links: {
                color: "#c4c4c4",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce"
                },
                random: true,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: isMobile ? 15 : 30
              },
              opacity: {
                value: 0.3
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 1, max: 5 }
              }
            },
            detectRetina: true
          }}
        />
      </div>

      {/* Formes décoratives animées */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-gray-200/40 opacity-50"
        variants={rotateVariants}
        animate="rotate"
      />

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      <motion.div
        className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-gray-200/30 opacity-30"
        variants={rotateVariants}
        animate="rotate"
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center"
        >
          {/* Left side - Photo Mosaic */}
          <motion.div 
            className="w-full lg:w-5/12 mb-12 lg:mb-0 relative"
            variants={itemVariants}
            onHoverStart={() => setIsHoveringPhoto(true)}
            onHoverEnd={() => setIsHoveringPhoto(false)}
          >
            <motion.div 
              className="photo-mosaic"
              variants={photoMosaicVariants}
            >
              <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[450px] md:h-[500px] relative">
                <motion.div 
                  className="tile tile-large col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-xl"
                  variants={photoItemVariants}
                >
                  <Image 
                    src="/images/diabate-se.jpeg" 
                    alt="Diabate Sekou" 
                    fill
                    priority
                    className="object-cover"
                    style={{
                      transform: isHoveringPhoto ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.6s ease-out',
                      objectPosition: 'center top'
                    }}
                  />
                  {/* Overlay lors du survol */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                    animate={{ opacity: isHoveringPhoto ? 0.8 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 text-white opacity-0"
                    animate={{ 
                      opacity: isHoveringPhoto ? 1 : 0,
                      y: isHoveringPhoto ? 0 : 10
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-bold">Diabate Sekou</h3>
                    <p className="text-sm text-white/80">Digital Architect & DevSecOp</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
                  variants={photoItemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image 
                    src="/images/IMG_1142.png" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-custom-orange/30 mix-blend-overlay"></div>
                </motion.div>

                <motion.div 
                  className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
                  variants={photoItemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image 
                    src="/images/det.png" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
                </motion.div>

                <motion.div 
                  className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
                  variants={photoItemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image 
                    src="/images/cra.png " 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay"></div>
                </motion.div>

                <motion.div 
                  className="tile tile-wide col-span-2 row-span-1 relative rounded-xl overflow-hidden shadow-lg"
                  variants={photoItemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image 
                    src="/images/IMG_1233.png" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay"></div>
                </motion.div>
                
                {/* Éléments décoratifs */}
                <motion.div 
                  className="absolute -left-4 -bottom-4 w-12 h-12 rounded-full bg-gradient-to-br from-custom-orange to-orange-600 shadow-lg"
                  variants={floatVariants}
                  animate="float"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                />
                
                <motion.div 
                  className="absolute -right-4 -top-4 w-24 h-2 bg-gradient-to-r from-custom-orange to-transparent rounded-full"
                  animate={{
                    width: ["6rem", "5rem", "6rem"],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute -right-2 -bottom-4 w-6 h-6 rounded-full border-4 border-custom-orange/50"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 45, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <div className="w-full lg:w-7/12 lg:pl-16 xl:pl-20 relative">
            {/* Services description with enhanced animation */}
            <motion.div 
              variants={itemVariants}
              className="mb-8 relative"
            >
              <motion.div
                className="absolute -left-6 top-0 w-1 h-16 bg-custom-orange"
                initial={{ height: 0 }}
                animate={{ height: "4rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.h2 
                className="text-sm uppercase tracking-wider text-custom-orange font-semibold mb-4 flex items-center"
                variants={textRevealVariants}
              >
                <motion.span
                  className="inline-block w-2 h-2 bg-custom-orange rounded-full mr-2"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  aria-hidden="true"
                />
                Professional Services
              </motion.h2>
              
              <motion.p 
                className="text-gray-800 leading-relaxed mb-8 text-lg"
                variants={textRevealVariants}
              >
                Digital Architect <span className="text-custom-orange font-medium">@42Network</span> (1337Benguerir) | Passionné de DevSecOps, 
                <motion.span
                  className="relative inline-block text-custom-blue font-medium ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  je conçois des architectures logicielles 
                  <motion.span 
                    className="absolute bottom-0 left-0 h-1 bg-custom-orange/20"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.3, duration: 1 }}
                    aria-hidden="true"
                  />
                </motion.span>
                {" "}
                scalables, sécurisées et adaptées aux startups et PME, garantissant performance, fiabilité et évolution sans friction.
              </motion.p>
              
              <motion.div
                variants={textRevealVariants}
              >
                <Link 
                  href="/portfolio" 
                  className="relative inline-flex items-center justify-center px-8 py-3 bg-custom-orange text-white font-semibold rounded-lg shadow-md overflow-hidden group"
                  aria-label="Mon portfolio"
                >
                  {/* Effet de brillance au survol */}
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full"
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 1.5 }}
                    aria-hidden="true"
                  />
                  
                  <span className="relative z-10 flex items-center">
                    <span>MON PORTFOLIO</span>
                    <motion.span 
                      className="ml-2"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      aria-hidden="true"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Main heading with letter animation */}
            <motion.div
              variants={itemVariants}
              className="relative z-10 mb-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="block text-custom-blue">
                  Bonjour, je suis{" "}
                  <span className="relative inline-block">
                    {nameText.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={nameLetterVariants}
                        className="inline-block"
                        aria-hidden="true"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                    <span className="sr-only">{nameText}</span>
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-custom-orange rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <motion.span 
                  className="block mt-2 text-custom-orange"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  {titleText}
                </motion.span>
              </h1>
              
              {/* Experience badge */}
              <motion.div 
                className="inline-flex items-center mt-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-gray-100"
                variants={textRevealVariants}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-custom-orange mr-3"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-700 font-medium">Plus de 3 ans en résolution de problèmes</span>
              </motion.div>
            </motion.div>

            {/* Skills showcase with interaction */}
            <motion.div
              variants={itemVariants}
              className="skills-showcase absolute -bottom-6 right-0 md:bottom-0 md:right-0 z-10 perspective"
            >
              <motion.div 
                className="bg-white/95 backdrop-blur-md px-6 py-5 rounded-xl shadow-xl border border-gray-100 transform"
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 0.8,
                  duration: 0.7, 
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  y: -5
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <motion.span 
                    className="bg-gradient-to-r from-custom-orange to-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mr-2 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Compétences
                  </motion.span>
                  <motion.div 
                    className="h-px flex-grow bg-gradient-to-r from-custom-orange/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    aria-hidden="true"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mb-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={skillPillVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`skill-pill flex items-center px-3 py-1.5 rounded-full border text-sm font-medium transition-all 
                        ${activeSkillIndex === index 
                          ? "bg-gradient-to-r from-custom-orange to-orange-500 text-white border-transparent shadow-lg" 
                          : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-gray-200 hover:border-custom-orange/30"
                        }`}
                      onHoverStart={() => setActiveSkillIndex(index)}
                      onHoverEnd={() => setActiveSkillIndex(null)}
                      role="button"
                      aria-pressed={activeSkillIndex === index}
                    >
                      <motion.span 
                        className="mr-1.5"
                        animate={{ 
                          rotate: activeSkillIndex === index ? [0, -10, 10, -10, 0] : 0 
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </motion.span>
                      {skill.text}
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.3
                        }}
                        aria-hidden="true"
                      >
                        <FaStar className="text-custom-orange h-3 w-3" />
                      </motion.span>
                    ))}
                  </div>
                  <span className="ml-2 font-medium">Compétences professionnelles</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Cercle décoratif en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-custom-orange/5 to-orange-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10" />
      
      {/* Lignes de grille décoratives */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] -z-10" />
    </section>
  );
};

export default Hero;