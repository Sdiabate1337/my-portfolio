'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight, FiCheck, FiStar, FiUser, FiUsers, FiPhoneCall } from 'react-icons/fi';
import { useState } from 'react';
import Pricing from '@/components/Pricing';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Données de service
  const services = [
    {
      id: 'backend',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "Backend Development",
      description: "Construire des architectures backend scalables, sécurisées et performantes pour des applications robustes.",
      skills: ["TypeScript & Node.js", "MongoDB & SQL", "API Design"],
      color: "#FF5E15",
      bgColor: "#FFF4E8",
      accentColor: "#FFE0C4",
      number: "01"
    },
    {
      id: 'cicd',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "CI/CD Automations",
      description: "Optimiser le déploiement avec des pipelines fluides, sécurisés et automatisés.",
      skills: ["GitHub Actions & Jenkins", "Docker & Kubernetes", "Sécurité & Monitoring"],
      color: "#4CAF50",
      bgColor: "#E8F5E9",
      accentColor: "#C8E6C9",
      number: "02"
    },
    {
      id: 'ai',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "AI Agent Automation",
      description: "Créer des agents intelligents capables d'automatiser des processus complexes.",
      skills: ["n8n & LangChain", "LLM & Generative AI", "Data Processing"],
      color: "#9C27B0",
      bgColor: "#F3E5F5",
      accentColor: "#E1BEE7",
      number: "03"
    },
    {
      id: 'frontend',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "Frontend Design",
      description: "Concevoir des interfaces utilisateur modernes, réactives et accessibles qui offrent une expérience utilisateur exceptionnelle.",
      skills: ["React & Next.js", "UI/UX Design", "Animations & Interactions"],
      color: "#2196F3",
      bgColor: "#E3F2FD",
      accentColor: "#BBDEFB",
      number: "04"
    },
    {
      id: 'system',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "System Architecture",
      description: "Concevoir des architectures système évolutives, fiables et flexibles pour soutenir les objectifs commerciaux.",
      skills: ["Microservices", "Cloud Architecture", "Optimisation des performances"],
      color: "#FFC107",
      bgColor: "#FFF8E1",
      accentColor: "#FFECB3",
      number: "05"
    },
    {
      id: 'security',
      icon: <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "DevSecOps",
      description: "Intégrer la sécurité dans l'ensemble du cycle de développement pour créer des systèmes robustes et conformes.",
      skills: ["Sécurité des applications", "Tests de pénétration", "Automatisation de la sécurité"],
      color: "#F44336",
      bgColor: "#FFEBEE",
      accentColor: "#FFCDD2",
      number: "06"
    }
  ];

  // Filtrage des services en fonction de l'onglet actif
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.id === activeTab);

  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Éléments décoratifs */}
              <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-[#FF5E15]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[10%] right-[15%] w-60 h-60 bg-[#4CAF50]/20 rounded-full blur-3xl"></div>
              
              {/* Grille de fond */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-2 bg-[#FF5E15]/20 text-[#FF5E15] rounded-full text-sm font-medium mb-4">
                  MES SERVICES
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Solutions <span className="text-[#FF5E15]">Technologiques</span> Sur Mesure
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Je propose un ensemble de services spécialisés dans l'architecture logicielle, 
                  le DevSecOps et l'automatisation pour aider les startups et PME à construire 
                  des systèmes robustes et évolutifs.
                </p>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  <button 
                    className={`px-5 py-2 rounded-full transition-all ${activeTab === 'all' ? 'bg-[#FF5E15] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    Tous les services
                  </button>
                  {['backend', 'cicd', 'ai', 'frontend', 'system', 'security'].map(tab => (
                    <button 
                      key={tab}
                      className={`px-5 py-2 rounded-full transition-all ${activeTab === tab ? 'bg-[#FF5E15] text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {services.find(s => s.id === tab)?.title}
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Vague décorative au bas de la section */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
              <path d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className={`relative p-8 rounded-lg shadow-md border-l-4 group hover:shadow-xl transition-all`}
                  style={{ 
                    backgroundColor: service.bgColor,
                    borderColor: service.color
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex">
                    <div className="mr-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: service.color }}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.skills.map((skill, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: service.color }}></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div 
                      className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold transition-colors"
                      style={{ 
                        color: service.accentColor,
                      }}
                    >
                      {service.number}
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-6 text-right"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Link href={`/contact?service=${service.id}`}>
                      <span className="inline-flex items-center text-sm font-medium" style={{ color: service.color }}>
                        Demander un devis
                        <FiArrowRight className="ml-2" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Processus de Travail */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-2 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-sm font-medium mb-4">
                  MA MÉTHODOLOGIE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                  Comment je travaille ?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  J'ai développé une approche structurée qui assure la livraison de solutions de haute qualité, 
                  adaptées à vos besoins spécifiques et respectant vos contraintes.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiUser className="w-8 h-8" />,
                  title: "Consultation et Analyse",
                  description: "Je commence par comprendre vos besoins, objectifs et contraintes spécifiques pour établir une vision claire du projet.",
                  color: "#FF5E15"
                },
                {
                  icon: <FiStar className="w-8 h-8" />,
                  title: "Conception et Prototypage",
                  description: "Je conçois des architectures et prototypes pour valider les approches techniques et ajuster selon vos retours.",
                  color: "#4CAF50"
                },
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  title: "Développement et Livraison",
                  description: "J'implémente la solution avec une approche itérative, en assurant tests, documentation et transfert de connaissances.",
                  color: "#2196F3"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${step.color}15` }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: step.color,
                      color: 'white'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{ color: step.color }}>{step.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                  
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-[#FF5E15]">
                    {index + 1}
                  </div>
                  
                  {index < 2 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-gray-100"
                      initial={{ width: 0 }}
                      whileInView={{ width: '2rem' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5E15]"></div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Avantages et Garanties */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-2 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-sm font-medium mb-4">
                  POURQUOI ME CHOISIR
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                  L'excellence technique <br />au service de vos projets
                </h2>
                <p className="text-gray-600 mb-8">
                  Je m'engage à fournir des solutions de haute qualité qui répondent à vos objectifs 
                  commerciaux tout en respectant les meilleures pratiques de l'industrie.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Expertise technique approfondie en architecture et développement",
                    "Approche axée sur la sécurité dès la conception (Security by Design)",
                    "Solutions évolutives et adaptées à vos besoins spécifiques",
                    "Communication transparente et collaboration étroite",
                    "Engagement total envers la qualité et la satisfaction client"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-[#FF5E15] flex items-center justify-center mr-3">
                          <FiCheck className="text-white text-xs" />
                        </div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/contact">
                    <motion.div
                      className="inline-flex items-center px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium hover:bg-[#e65513] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiPhoneCall className="mr-2" />
                      Discuter de votre projet
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/services-illustration.jpg"
                      alt="Services professionnels"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E15]/30 to-transparent mix-blend-multiply"></div>
                  </div>
                  
                  {/* Badge flottant */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-5"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="text-center">
                      <span className="text-[#FF5E15] text-4xl font-bold">100%</span>
                      <p className="text-gray-700 font-medium">Satisfaction garantie</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à donner vie à votre projet ?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  Discutons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs.
                </p>
                
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <span className="px-8 py-4 bg-[#FF5E15] text-white rounded-lg font-medium inline-flex items-center text-lg">
                      Commencer un projet
                      <FiArrowRight className="ml-2" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Pricing />
      <Footer />
    </>
  );
}