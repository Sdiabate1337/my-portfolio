'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCode, FiFileText, FiAward, FiUser, FiDownload } from 'react-icons/fi';
import { FaDocker, FaGit, FaMicrochip, FaCloudsmith, FaShieldAlt, FaStar } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function AboutPage() {
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);

  // Skills from the provided data
  const skills = [
    { icon: <FiCode />, text: "C/C++" },
    { icon: <FiCode />, text: "TypeScript" },
    { icon: <FaDocker />, text: "Docker" },
    { icon: <FaGit />, text: "Git" },
    { icon: <FaMicrochip />, text: "Microservices" },
    { icon: <FaCloudsmith />, text: "Cloud" },
    { icon: <FaShieldAlt />, text: "Security" }
  ];

  // Expériences professionnelles
  const experiences = [
    {
      title: "IT architect & C/C++ developer",
      company: "1337 coding school, Benguerir",
      period: "2022 - Présent",
      description: "Dans ce parcours, je travaille sur le développement de systèmes, de réseaux, de jeux et d'un chat IRC en C et C++, en me concentrant sur la résolution de défis informatiques complexes grâce à la programmation bas niveau et à une architecture efficace.",
      skills: ["C/C++", "Architecture Système", "Algorithmes"]
    },
    {
      title: "DevSecOp Full Stack Developer",
      company: "ValeX, Canada",
      period: "août 2023 - janv. 2025",
      description: "Dans ce stage, je réorganise l'environnement de travail des développeurs en appliquant les principes du DevSecOps, en mettant en place un pipeline CI/CD pour automatiser les processus et garantir un niveau minimal de risque de sécurité sur la plateforme.",
      skills: ["DevSecOps", "CI/CD", "Full Stack", "Sécurité"]
    },
    {
      title: "Développeur freelance",
      company: "Freelance",
      period: "2023 - Présent",
      description: "En tant que développeur freelance, j'ai travaillé sur divers projets, en développant des solutions personnalisées, en optimisant les performances et en assurant la livraison de produits de qualité dans les délais impartis.",
      skills: ["JavaScript", "React", "Node.js", "API"]
    }
  ];

  // Mise à jour du tableau education avec les nouvelles données
  const education = [
    {
      degree: "Web Design & Development",
      school: "Codecanyon Academy",
      period: "2022 - Present",
      description: "Formation approfondie sur la conception et le développement web, couvrant le design UI/UX, les technologies front-end et les principes de développement responsive.",
      achievements: ["Design Thinking", "UX Research", "UI Prototyping"],
      logoSrc: "/images/wordpress-logo.png",
      logoAlt: "School Logo",
      logoColor: "#21759B"
    },
    {
      degree: "Full Stack JavaScript",
      school: "Tech Institute",
      period: "2020 - 2022",
      description: "Programme intensif axé sur le développement web full stack avec JavaScript, Node.js, React et les bases de données NoSQL.",
      achievements: ["MERN Stack", "API Development", "Cloud Deployment"],
      logoSrc: "/images/wordpress-logo.png",
      logoAlt: "School Logo",
      logoColor: "#21759B"
    },
    {
      degree: "DevOps & Cloud Engineering",
      school: "Cloud Academy",
      period: "2019 - 2020",
      description: "Formation spécialisée dans les pratiques DevOps, l'automatisation CI/CD, et les technologies cloud pour la création d'infrastructures scalables et résilientes.",
      achievements: ["AWS", "Docker", "Kubernetes", "Terraform"],
      logoSrc: "/images/wordpress-logo.png",
      logoAlt: "School Logo",
      logoColor: "#21759B"
    },
    {
      degree: "Computer Science",
      school: "Tech University",
      period: "2017 - 2019",
      description: "Formation fondamentale en informatique couvrant les algorithmes, les structures de données, l'architecture des systèmes et les principes de programmation.",
      achievements: ["Algorithms", "Data Structures", "OOP", "System Design"],
      logoSrc: "/images/wordpress-logo.png",
      logoAlt: "School Logo",
      logoColor: "#21759B"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-24">
        {/* Hero Section avec animation inspirée */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Éléments décoratifs */}
              <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-[#FF5E15]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[10%] right-[15%] w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Grille de fond */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
              
              {/* Cercles animés */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="md:w-1/2">
                <motion.div 
                  className="inline-block px-4 py-1 rounded-full bg-[#FF5E15]/20 text-[#FF5E15] text-sm font-medium mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FiUser className="inline mr-2" />
                  À PROPOS DE MOI
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Digital <span className="text-[#FF5E15]">Architect</span> <br />
                  & DevSecOp
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Chez <span className="text-[#FF5E15]">1337 Benguerir</span>, je conçois des architectures logicielles scalables et sécurisées, en combinant expertise technique et vision stratégique pour créer des solutions robustes.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href="/cv.pdf" 
                    download
                    className="px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload className="mr-2" />
                    Télécharger CV
                  </motion.a>
                  
                  <Link href="/contact">
                    <motion.div 
                      className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Me contacter
                    </motion.div>
                  </Link>
                </motion.div>
                
                {/* Badge d'expérience */}
                <motion.div 
                  className="inline-flex items-center mt-8 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[#FF5E15] mr-3"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <span className="text-sm text-gray-200 font-medium">Plus de 3 ans en résolution de problèmes</span>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF5E15]/20 to-purple-500/20 blur-xl"></div>
                  <motion.div 
                    className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/20"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Image 
                      src="/images/profile.jpg" 
                      alt="Portrait" 
                      fill 
                      className="object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Éléments décoratifs autour de la photo */}
                  <motion.div
                    className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full bg-[#FF5E15]/40"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  <motion.div
                    className="absolute -left-4 -top-4 w-10 h-10 rounded-full border-2 border-[#FF5E15]/30"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
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
          </div>
        </section>
        
        {/* À propos - Section principale */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Mon parcours</h2>
                <p className="text-gray-700 mb-4">
                  Digital Architect chez 1337 Coding School (Benguerir), je suis passionné par le DevSecOps
                  et la conception d'architectures logicielles scalables et sécurisées.
                </p>
                <p className="text-gray-700 mb-4">
                  Fort d'une expérience en développement C/C++ et en systèmes distribués, je crée des
                  solutions qui combinent performance technique et sécurité par conception, adaptées
                  aux besoins des startups et PME.
                </p>
                <p className="text-gray-700">
                  Mon approche intègre l'automatisation des processus de développement via les pipelines CI/CD
                  et une vision stratégique pour garantir évolution et fiabilité des infrastructures techniques.
                </p>
              </div>
              
              {/* Compétences avec design inspiré */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <FiCode className="mr-3 text-[#FF5E15]" />
                  Compétences techniques
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Langages de programmation</h3>
                    <div className="space-y-4">
                      {[
                        { name: "C/C++", level: 95 },
                        { name: "TypeScript", level: 85 },
                        { name: "Python", level: 80 },
                        { name: "JavaScript", level: 85 },
                        { name: "Rust", level: 70 }
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <motion.div 
                              className="bg-[#FF5E15] h-2.5 rounded-full" 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                          <span className="ml-3 min-w-[120px]">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies & Outils</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center px-3 py-2 rounded-full border text-sm font-medium transition-all 
                            ${activeSkillIndex === index 
                              ? "bg-gradient-to-r from-[#FF5E15] to-orange-500 text-white border-transparent shadow-lg" 
                              : "bg-gray-100 text-gray-800 border-gray-200 hover:border-[#FF5E15]/30"
                            }`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          onHoverStart={() => setActiveSkillIndex(index)}
                          onHoverEnd={() => setActiveSkillIndex(null)}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                          }}
                        >
                          <motion.span 
                            className="mr-1.5"
                            animate={{ 
                              rotate: activeSkillIndex === index ? [0, -10, 10, -10, 0] : 0 
                            }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            {skill.icon}
                          </motion.span>
                          {skill.text}
                        </motion.div>
                      ))}
                      
                      {["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Redis"].map((tech, index) => (
                        <motion.span 
                          key={`tech-${index}`}
                          className="px-3 py-2 bg-gray-100 rounded-full text-gray-800 text-sm font-medium border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Badge étoiles */}
                    <motion.div 
                      className="mt-6 inline-flex items-center px-4 py-2 bg-gray-50 rounded-lg border border-gray-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex mr-2">
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
                          >
                            <FaStar className="text-[#FF5E15] h-3 w-3" />
                          </motion.span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Compétences professionnelles</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Expérience */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <FiFileText className="mr-3 text-[#FF5E15]" />
                  Expérience professionnelle
                </h2>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF5E15] relative overflow-hidden group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                    >
                      {/* Éléments décoratifs */}
                      <div 
                        className="absolute top-0 right-0 border-t-[15px] border-r-[15px] border-t-white border-r-transparent opacity-50"
                      ></div>
                      
                      {/* Particules animées sur hover */}
                      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <motion.div 
                          className="absolute w-1 h-1 rounded-full bg-[#FF5E15]"
                          style={{ top: '20%', left: '30%' }}
                          animate={{ 
                            y: [0, -30], 
                            x: [0, 15],
                            opacity: [0, 0.7, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeOut",
                            times: [0, 0.7, 1]
                          }}
                        />
                        <motion.div 
                          className="absolute w-1.5 h-1.5 rounded-full bg-[#FF5E15]"
                          style={{ top: '50%', left: '20%' }}
                          animate={{ 
                            y: [0, -40], 
                            x: [0, -10],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ 
                            duration: 2.5, 
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeOut",
                            delay: 0.3,
                            times: [0, 0.7, 1]
                          }}
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-[#FF5E15] font-medium mb-2">{exp.company} | {exp.period}</p>
                      <p className="text-gray-700 mb-4">{exp.description}</p>
                      
                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-[#FF5E15]/10 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Formation avec images de logo */}
<div>
  <h2 className="text-3xl font-bold mb-8 flex items-center">
    <FiAward className="mr-3 text-[#FF5E15]" />
    Formation
  </h2>
  
  <div className="space-y-8">
    {education.map((edu, index) => (
      <motion.div 
        key={index}
        className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0078D7] relative group overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
      >
        {/* Bordure décorative style diplôme */}
        <div className="absolute inset-0 border-2 border-dashed border-opacity-0 group-hover:border-opacity-10 transition-all duration-500 rounded-lg pointer-events-none" style={{ borderColor: '#0078D7' }}></div>
        
        {/* Médaillon éducation */}
        <div 
          className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          style={{ backgroundColor: edu.logoColor }}
        ></div>
        
        {/* En-tête avec logo et période */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md bg-[#0078D7]/10 relative overflow-hidden">
              {/* Effet de scintillement */}
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  initial={{ left: '-100%' }}
                  animate={{ left: ['100%'] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3
                  }}
                />
              </div>
              
              {/* Logo ou icône académique */}
              <div className="relative w-8 h-8 z-10">
                <Image 
                  src={edu.logoSrc} 
                  alt={edu.logoAlt} 
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/40x40/${edu.logoColor.replace('#', '')}/FFFFFF?text=${edu.school[0]}`;
                  }}
                />
              </div>
            </div>
            
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {edu.degree}
              </h3>
              <p className="font-medium text-sm text-[#0078D7]">
                {edu.school}
              </p>
            </div>
          </div>
          
          <div className="px-4 py-2 rounded-full text-xs font-medium bg-[#E8F4FF] text-[#0078D7]">
            {edu.period}
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{edu.description}</p>
        
        {/* Compétences acquises */}
        {edu.achievements && (
          <div>
            <h4 className="text-xs uppercase text-gray-500 font-semibold mb-2">Compétences acquises</h4>
            <div className="flex flex-wrap gap-2">
              {edu.achievements.map((item, i) => (
                <motion.span 
                  key={i}
                  className="inline-block px-3 py-1 bg-[#E8F4FF] text-[#0078D7] text-xs font-medium rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: '#CCE6FF' }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        )}
        
        {/* Sceau académique */}
        <div className="absolute bottom-4 right-4 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <svg viewBox="0 0 24 24" fill="#0078D7">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.68L18 9v2.08c0 1.38-.44 2.72-1.28 3.82L12 9.6 7.28 14.9C6.44 13.8 6 12.46 6 11.08V9l6-3.32z"/>
          </svg>
        </div>
      </motion.div>
    ))}
  </div>
</div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}