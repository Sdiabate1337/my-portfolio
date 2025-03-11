import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="hero-bg relative overflow-hidden py-20">
      {/* Background Elements - Même style que Hero et Services */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
            Introduce The Story Of My Educational And Career Journey
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center mt-8 mb-6">
            <button 
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeTab === 'experience' 
                  ? 'bg-[#FF5E15] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              My Experience
            </button>
            <button 
              className={`px-8 py-3 rounded-md font-medium ml-4 transition-all ${
                activeTab === 'education' 
                  ? 'bg-[#0078D7] text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('education')}
            >
              My Education
            </button>
          </div>
          
          {/* Horizontal Line */}
          <div className="w-full h-px bg-gray-200 mt-2"></div>
        </div>

        {/* Content Section - Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <>
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* WordPress Web Developer Card */}
                  <ExperienceCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="WordPress Logo"
                    logoColor="#21759B"
                    title="WordPress Web Developer"
                    company="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>
                
                <motion.div
                  key="experience2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Full Stack Web Developer Card */}
                  <ExperienceCard 
                    period="2022 - Present"
                    logoSrc="/images/vscode-logo.png"
                    logoAlt="VS Code Logo"
                    logoColor="#0078D7"
                    title="Full Stack Web Developer"
                    company="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>
                
                <motion.div
                  key="experience3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Lead Developer Card */}
                  <ExperienceCard 
                    period="2022 - Present"
                    logoSrc="/images/custom-logo.png"
                    logoAlt="Custom Logo"
                    logoColor="#8E44AD"
                    title="LEAD DEVELOPER"
                    company="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>
                
                <motion.div
                  key="experience4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Shopify Developer Card */}
                  <ExperienceCard 
                    period="2022 - Present"
                    logoSrc="/images/shopify-logo.png"
                    logoAlt="Shopify Logo"
                    logoColor="#7AB55C"
                    title="Shopify Developer"
                    company="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Education content */}
                  <EducationCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="WordPress Logo"
                    logoColor="#21759B"
                    title="WordPress Web Developer"
                    school="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>

                <motion.div
                  key="education2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <EducationCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="WordPress Logo"
                    logoColor="#21759B"
                    title="WordPress Web Developer"
                    school="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>

                <motion.div
                  key="education3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <EducationCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="WordPress Logo"
                    logoColor="#21759B"
                    title="WordPress Web Developer"
                    school="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
                  />
                </motion.div>

                <motion.div
                  key="education4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <EducationCard 
                    period="2022 - Present"
                    logoSrc="/images/wordpress-logo.png"
                    logoAlt="WordPress Logo"
                    logoColor="#21759B"
                    title="WordPress Web Developer"
                    school="Codecanyon"
                    description="Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency. It thus focuses on the cultivation of skills, trades or professions."
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

// Experience Card Component
interface ExperienceCardProps {
  period: string;
  logoSrc: string;
  logoAlt: string;
  logoColor: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceCard = ({ 
  period, 
  logoSrc, 
  logoAlt, 
  logoColor, 
  title, 
  company, 
  description 
}: ExperienceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${logoColor}20` }}>
            <div className="relative w-6 h-6">
              <Image 
                src={logoSrc} 
                alt={logoAlt} 
                fill
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/40x40/${logoColor.replace('#', '')}/FFFFFF?text=${logoAlt[0]}`;
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <span className="inline-block px-4 py-1 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-xs font-medium mb-2">
            {period}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
            <span className="mr-2">
              <svg className="w-5 h-5 text-[#FF5E15]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
            </span>
            {title}
          </h3>
          <p className="text-[#FF5E15] text-sm mb-3">{company}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Education Card Component
interface EducationCardProps {
  period: string;
  logoSrc: string;
  logoAlt: string;
  logoColor: string;
  title: string;
  school: string;
  description: string;
}

const EducationCard = ({ 
  period, 
  logoSrc, 
  logoAlt, 
  logoColor, 
  title, 
  school, 
  description 
}: EducationCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${logoColor}20` }}>
            <div className="relative w-6 h-6">
              <Image 
                src={logoSrc} 
                alt={logoAlt} 
                fill
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/40x40/${logoColor.replace('#', '')}/FFFFFF?text=${logoAlt[0]}`;
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <span className="inline-block px-4 py-1 bg-[#E8F4FF] text-[#0078D7] rounded-full text-xs font-medium mb-2">
            {period}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
            <span className="mr-2">
              <svg className="w-5 h-5 text-[#0078D7]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
            </span>
            {title}
          </h3>
          <p className="text-[#0078D7] text-sm mb-3">{school}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;