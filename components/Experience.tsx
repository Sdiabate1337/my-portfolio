import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="hero-bg relative overflow-hidden py-20">
      {/* Background Elements avec particules animées */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
        
        {/* Particules flottantes */}
        <motion.div 
          className="absolute w-2 h-2 rounded-full bg-orange-300/30"
          style={{ top: '15%', left: '10%' }}
          animate={{ 
            y: [0, 10, 0], 
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-3 h-3 rounded-full bg-blue-300/30"
          style={{ top: '45%', right: '15%' }}
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-4 h-4 rounded-full bg-purple-300/30"
          style={{ bottom: '20%', left: '20%' }}
          animate={{ 
            y: [0, 12, 0], 
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
            Mon Parcours <span className="text-[#FF5E15]">Professionnel</span> et <span className="text-[#0078D7]">Académique</span>
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center mt-10 mb-8">
            <motion.button 
              className={`px-8 py-3 rounded-lg font-medium transition-all relative overflow-hidden ${
                activeTab === 'experience' 
                  ? 'bg-[#FF5E15] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('experience')}
              whileHover={{ scale: activeTab !== 'experience' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Expérience</span>
              {activeTab === 'experience' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#FF5E15] to-[#FF8A50]"
                  layoutId="tabBackground"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
            
            <motion.button 
              className={`px-8 py-3 rounded-lg font-medium ml-4 transition-all relative overflow-hidden ${
                activeTab === 'education' 
                  ? 'bg-[#0078D7] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('education')}
              whileHover={{ scale: activeTab !== 'education' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Formation</span>
              {activeTab === 'education' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0078D7] to-[#00A9FF]"
                  layoutId="tabBackground"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          </div>
          
          {/* Ligne décorative */}
          <div className="w-full max-w-3xl mx-auto relative">
            <div className="h-px bg-gray-200"></div>
            <motion.div 
              className="absolute top-0 h-1 rounded-full"
              style={{ 
                background: activeTab === 'experience' 
                  ? 'linear-gradient(to right, #FF5E15, #FF8A50)' 
                  : 'linear-gradient(to right, #0078D7, #00A9FF)' 
              }}
              animate={{ 
                width: '100%', 
                left: activeTab === 'experience' ? 0 : 'auto',
                right: activeTab === 'education' ? 0 : 'auto'
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Content Section - Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <>
                <motion.div
                  key="experience1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ExperienceCard 
                    period="2022 - Present"
                    logoSrc="/images/UM6P_1337.png"
                    logoAlt="1337 Logo"
                    logoColor="#21759B"
                    title="IT architect C/C++ developer"
                    company="1337 coding school, Benguerir"
                    description="Dans ce parcours, je travaille sur le développement de systèmes, de réseaux, de jeux et d'un chat IRC en C et C++, en me concentrant sur la résolution de défis informatiques complexes grâce à la programmation bas niveau et à une architecture efficace."
                    skills={["C/C++", "Architecture Système", "Algorithmes"]}
                  />
                </motion.div>
                
                <motion.div
                  key="experience2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <ExperienceCard 
                    period="août 2023 - janv. 2025"
                    logoSrc="/images/valex.png"
                    logoAlt="valex Logo"
                    logoColor="#0078D7"
                    title="DevSecOp Full Stack Developer"
                    company="ValeX, Canada"
                    description="Dans ce stage, je réorganise l'environnement de travail des développeurs en appliquant les principes du DevSecOps, en mettant en place un pipeline CI/CD pour automatiser les processus et garantir un niveau minimal de risque de sécurité sur la plateforme."
                    skills={["DevSecOps", "CI/CD", "Full Stack", "Sécurité"]}
                  />
                </motion.div>
                
                <motion.div
                  key="experience3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ExperienceCard 
                    period="2023 - Present"
                    logoSrc="/images/Danaya.png"
                    logoAlt="danaya Logo"
                    logoColor="#7AB55C"
                    title="Developpeur freelance"
                    company="freelance"
                    description="En tant que développeur freelance, j'ai travaillé sur divers projets, en développant des solutions personnalisées, en optimisant les performances et en assurant la livraison de produits de qualité dans les délais impartis."
                    skills={["JavaScript", "React", "Node.js", "API"]}
                  />
                </motion.div>

                <motion.div
                  key="experience4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ExperienceCard
                    period="2024 - Present"
                    logoSrc="/images/Danaya.png"
                    logoAlt="danaya Logo"
                    logoColor="#8E44AD"
                    title="Web designer"
                    company="freelance"
                    description="En tant que web designer freelance, j'ai créé des sites web esthétiques et fonctionnels, en travaillant sur la conception, l'ergonomie et l'optimisation pour offrir une expérience utilisateur optimale."
                    skills={["UI/UX", "Figma", "Responsive Design"]}
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  key="education1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <EducationCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png" 
                    logoAlt="School Logo"
                    logoColor="#21759B"
                    title="Web Design & Development"
                    school="Codecanyon Academy"
                    description="Formation approfondie sur la conception et le développement web, couvrant le design UI/UX, les technologies front-end et les principes de développement responsive."
                    achievements={["Design Thinking", "UX Research", "UI Prototyping"]}
                  />
                </motion.div>

                <motion.div
                  key="education2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <EducationCard 
                    period="2020 - 2022"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="School Logo"
                    logoColor="#21759B"
                    title="Full Stack JavaScript"
                    school="Tech Institute"
                    description="Programme intensif axé sur le développement web full stack avec JavaScript, Node.js, React et les bases de données NoSQL."
                    achievements={["MERN Stack", "API Development", "Cloud Deployment"]}
                  />
                </motion.div>

                <motion.div
                  key="education3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <EducationCard 
                    period="2019 - 2020"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="School Logo"
                    logoColor="#21759B"
                    title="DevOps & Cloud Engineering"
                    school="Cloud Academy"
                    description="Formation spécialisée dans les pratiques DevOps, l'automatisation CI/CD, et les technologies cloud pour la création d'infrastructures scalables et résilientes."
                    achievements={["AWS", "Docker", "Kubernetes", "Terraform"]}
                  />
                </motion.div>

                <motion.div
                  key="education4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <EducationCard 
                    period="2017 - 2019"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="School Logo"
                    logoColor="#21759B"
                    title="Computer Science"
                    school="Tech University"
                    description="Formation fondamentale en informatique couvrant les algorithmes, les structures de données, l'architecture des systèmes et les principes de programmation."
                    achievements={["Algorithms", "Data Structures", "OOP", "System Design"]}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component - Version créative
interface ExperienceCardProps {
  period: string;
  logoSrc: string;
  logoAlt: string;
  logoColor: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
}

const ExperienceCard = ({ 
  period, 
  logoSrc, 
  logoAlt, 
  logoColor, 
  title, 
  company, 
  description,
  skills = []
}: ExperienceCardProps) => {
  return (
    <motion.div 
      className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Bandeau supérieur coloré avec effet de particules */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 z-10"
        style={{ background: `linear-gradient(to right, ${logoColor}, ${logoColor}CC)` }}
      ></div>
      
      {/* Angles décoratifs */}
      <div className="absolute top-0 right-0 border-t-[15px] border-r-[15px] border-t-white border-r-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 border-b-[15px] border-l-[15px] border-b-white border-l-transparent opacity-50"></div>
      
      {/* Particules animées */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div 
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: logoColor,
            top: '20%', 
            left: '30%'
          }}
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
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ 
            backgroundColor: logoColor,
            top: '50%', 
            left: '20%'
          }}
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
        <motion.div 
          className="absolute w-1 h-1 rounded-full"
          style={{ 
            backgroundColor: logoColor,
            top: '70%', 
            left: '80%'
          }}
          animate={{ 
            y: [0, -25], 
            x: [0, -20],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 2.2, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
            delay: 0.6,
            times: [0, 0.7, 1]
          }}
        />
      </div>
      
      {/* Contenu principal */}
      <div className="p-7">
        {/* En-tête avec logo et période */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <div 
              className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md relative overflow-hidden"
              style={{ backgroundColor: `${logoColor}15` }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  initial={{ left: '-100%' }}
                  animate={{ left: ['100%'] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 2.5
                  }}
                />
              </div>
              
              <div className="relative w-8 h-8 z-10">
                <Image 
                  src={logoSrc} 
                  alt={logoAlt} 
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/40x40/${logoColor.replace('#', '')}/FFFFFF?text=${company[0]}`;
                  }}
                />
              </div>
            </div>
            
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {title}
              </h3>
              <p 
                className="font-medium text-sm"
                style={{ color: logoColor }}
              >
                {company}
              </p>
            </div>
          </div>
          
          <div
            className="px-4 py-2 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: `${logoColor}15`, 
              color: logoColor
            }}
          >
            {period}
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Compétences */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: `${logoColor}20` }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
        
        {/* Élément graphique */}
        <svg 
          className="absolute bottom-3 right-3 w-24 h-24 opacity-5"
          viewBox="0 0 24 24" 
          style={{ color: logoColor }}
          fill="currentColor"
        >
          <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 22a10 10 0 1110-10 10 10 0 01-10 10zm5-10a1 1 0 01-1 1h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 011 1z"/>
        </svg>
      </div>
    </motion.div>
  );
};

// Education Card Component - Version créative
interface EducationCardProps {
  period: string;
  logoSrc: string;
  logoAlt: string;
  logoColor: string;
  title: string;
  school: string;
  description: string;
  achievements?: string[];
}

const EducationCard = ({ 
  period, 
  logoSrc, 
  logoAlt, 
  logoColor, 
  title, 
  school, 
  description,
  achievements = []
}: EducationCardProps) => {
  return (
    <motion.div 
      className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Bordure décorative style diplôme */}
      <div className="absolute inset-0 border-2 border-dashed border-opacity-0 group-hover:border-opacity-10 transition-all duration-500 rounded-xl pointer-events-none" style={{ borderColor: '#0078D7' }}></div>
      
      {/* Médaillon éducation */}
      <div 
        className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: '#0078D7' }}
      ></div>
      
      {/* Contenu principal avec style académique */}
      <div className="p-7">
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
              
              {/* Icône académique */}
              <div className="relative z-10 text-[#0078D7]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
            </div>
            
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {title}
              </h3>
              <p className="font-medium text-sm text-[#0078D7]">
                {school}
              </p>
            </div>
          </div>
          
          <div className="px-4 py-2 rounded-full text-xs font-medium bg-[#E8F4FF] text-[#0078D7]">
            {period}
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Accomplissements */}
        {achievements.length > 0 && (
          <div>
            <h4 className="text-xs uppercase text-gray-500 font-semibold mb-2">Compétences acquises</h4>
            <div className="flex flex-wrap gap-2">
              {achievements.map((item, index) => (
                <motion.span 
                  key={index}
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
        <div className="absolute bottom-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <svg viewBox="0 0 24 24" fill="#0078D7">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.68L18 9v2.08c0 1.38-.44 2.72-1.28 3.82L12 9.6 7.28 14.9C6.44 13.8 6 12.46 6 11.08V9l6-3.32z"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;