import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiX, FiArrowRight, FiGithub, FiCode, FiLayers } from 'react-icons/fi';

// Types améliorés pour inclure plus d'informations sur les projets
interface Project {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  category?: string; 
  tags?: string[];
  technologies?: string[];
  githubLink?: string;
  demoLink?: string;
  featured?: boolean;
}

interface RecentProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const RecentProjectCard = ({ project, index, onClick }: RecentProjectCardProps) => {
  // Valeurs pour les animations au survol
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Gestion du mouvement de carte en 3D
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  // Animation côté par côté pour les cartes alternées
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -40 : 40 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };
  
  // Barre de progression
  const progressBarColors = [
    "from-[#FF5E15] to-[#FF8A50]",
    "from-[#0078D7] to-[#00A9FF]",
    "from-[#9C27B0] to-[#BA68C8]",
    "from-[#4CAF50] to-[#81C784]"
  ];

  const progressBarColor = progressBarColors[index % progressBarColors.length];

  return (
    <motion.div 
      className="relative group perspective-1000 rounded-xl cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Badge catégorie */}
      {project.category && (
        <div className="absolute top-4 left-4 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="px-3 py-1 bg-black bg-opacity-50 backdrop-blur-sm text-white text-xs font-medium rounded-full"
          >
            {project.category}
          </motion.div>
        </div>
      )}
      
      {/* Badge featured */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="px-3 py-1 bg-[#FF5E15] text-white text-xs font-medium rounded-full flex items-center"
          >
            <span className="mr-1">★</span> Featured
          </motion.div>
        </div>
      )}
      
      <motion.div 
        className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 relative"
        style={{ 
          rotateX: rotateX,
          rotateY: rotateY
        }}
        whileHover={{ y: -10 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Barre de progression colorée en haut */}
        <div className={`h-1 w-full bg-gradient-to-r ${progressBarColor}`}></div>
        
        {/* Image avec overlay au survol */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image 
            src={project.imageSrc} 
            alt={project.imageAlt} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"
            initial={{ opacity: 0.3 }}
            whileHover={{ opacity: 0.7 }}
          ></motion.div>
          
          {/* Animation de pulsation au survol */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <FiArrowRight className="text-white text-lg" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Contenu de la carte */}
        <div className="p-7 relative">
          {/* Badges technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <motion.span 
                  key={i}
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -2, backgroundColor: "#f3f4f6" }}
                >
                  <span className="w-1.5 h-1.5 mr-1.5 rounded-full inline-block bg-gray-500"></span>
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <motion.span 
                  className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  +{project.technologies.length - 3}
                </motion.span>
              )}
            </div>
          )}
          
          {/* Titre avec animation */}
          <motion.h3 
            className="text-xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 text-sm mb-5 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>
          
          {/* Actions */}
          <div className="flex justify-between items-center">
            <motion.button 
              className="relative overflow-hidden px-4 py-2 rounded-md font-medium text-white bg-[#FF5E15] inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Voir le projet</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#FF5E15] to-[#FF8A50]"
                initial={{ x: "0%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.span 
                className="ml-2 relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.button>
            
            {/* Liens rapides */}
            <div className="flex space-x-3">
              {project.githubLink && (
                <motion.a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={16} />
                </motion.a>
              )}
              
              {project.demoLink && (
                <motion.a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Décoration */}
          <div className="absolute -bottom-5 -right-5 w-20 h-20 opacity-5">
            <svg viewBox="0 0 24 24" fill="#FF5E15" className="w-full h-full">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zm4-5a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ProjectPopupProps {
  project: Project;
  onClose: () => void;
}

const ProjectPopup = ({ project, onClose }: ProjectPopupProps) => {
  // Référence pour la détection du clic en dehors
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Gestion du clic en dehors pour fermer
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOutsideClick}
      >
        <motion.div 
          ref={popupRef}
          className="bg-white rounded-xl shadow-2xl relative max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {/* Barre supérieure avec titre et actions */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-2 h-6 bg-[#FF5E15] rounded-full mr-3"></span>
              {project.title}
            </h3>
            
            <div className="flex items-center gap-2">
              {project.githubLink && (
                <motion.a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={18} />
                </motion.a>
              )}
              
              {project.demoLink && (
                <motion.a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={18} />
                </motion.a>
              )}
              
              <motion.button 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiX size={18} />
              </motion.button>
            </div>
          </div>
          
          {/* Corps du popup avec scrolling si nécessaire */}
          <div className="flex-grow overflow-y-auto">
            {/* Image de couverture */}
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src={project.imageSrc} 
                alt={project.imageAlt} 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Contenu du projet */}
            <div className="p-6">
              {/* Tags du projet */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i}
                      className="px-3 py-1 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-xs font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}
              
              {/* Description détaillée */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <FiLayers className="mr-2 text-[#FF5E15]" />
                  À propos du projet
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros euismod, finibus est in, dictum arcu. 
                  Suspendisse non odio ut velit tristique facilisis. Vestibulum vitae risus massa.
                </p>
              </div>
              
              {/* Technologies utilisées */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <FiCode className="mr-2 text-[#FF5E15]" />
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Section CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <motion.a 
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium transition-all hover:bg-[#e54e0f] flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Visiter le site
                  <FiExternalLink className="ml-2" />
                </motion.a>
                
                <motion.button 
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium transition-all hover:bg-gray-50"
                  onClick={onClose}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Fermer
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Données des projets enrichies
  const projects: Project[] = [
    {
      imageSrc: '/images/project1.png',
      imageAlt: 'Project 1',
      title: 'Portfolio Personnel',
      description: 'Un portfolio moderne et responsive construit avec Next.js et TailwindCSS pour présenter mes projets et compétences.',
      link: '#',
      category: 'Web Design',
      tags: ['Portfolio', 'Personnel', 'Frontend'],
      technologies: ['Next.js', 'TailwindCSS', 'Framer Motion'],
      githubLink: 'https://github.com/username/project1',
      demoLink: 'https://project1.demo.com',
      featured: true
    },
    {
      imageSrc: '/images/project2.png',
      imageAlt: 'Project 2',
      title: 'Dashboard Analytics',
      description: 'Un tableau de bord analytique pour visualiser et analyser les données clients avec des graphiques interactifs.',
      link: '#',
      category: 'Application Web',
      tags: ['Dashboard', 'Analytics', 'Data Viz'],
      technologies: ['React', 'Redux', 'D3.js', 'Firebase'],
      githubLink: 'https://github.com/username/project2',
    },
    {
      imageSrc: '/images/project3.png',
      imageAlt: 'Project 3',
      title: 'E-commerce Mobile',
      description: 'Application mobile de e-commerce avec panier, paiement et suivi de commande.',
      link: '#',
      category: 'Mobile App',
      tags: ['E-commerce', 'Mobile', 'UX Design'],
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      demoLink: 'https://project3.demo.com',
    },
    {
      imageSrc: '/images/project4.png',
      imageAlt: 'Project 4',
      title: 'Chat AI Assistant',
      description: 'Un assistant conversationnel alimenté par l\'IA pour répondre aux questions des utilisateurs.',
      link: '#',
      category: 'AI',
      tags: ['Intelligence Artificielle', 'Chatbot', 'NLP'],
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      githubLink: 'https://github.com/username/project4',
      featured: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50/50">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FF5E15]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0078D7]/5 rounded-full blur-3xl"></div>
        
        <svg className="absolute top-0 right-0 w-32 h-32 text-[#FF5E15]/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M46.2,-76.1C59.9,-69.5,70.8,-56.3,79.2,-41.8C87.5,-27.2,93.4,-11.2,90.6,2.8C87.8,16.8,76.4,28.8,66.6,41.6C56.8,54.3,48.8,67.9,37,75.5C25.3,83.2,9.9,84.9,-5.1,82C-20.1,79.2,-34.7,71.8,-46,62.1C-57.3,52.3,-65.1,40.3,-70.8,27C-76.5,13.8,-79.9,-0.7,-77.8,-14.3C-75.7,-27.9,-68.2,-40.6,-58,-50.3C-47.8,-60,-35,-66.7,-21.8,-71.9C-8.7,-77,4.8,-80.5,19,-79.3C33.1,-78.1,48,-82.8,46.2,-76.1Z" transform="translate(100 100)" />
        </svg>
        
        <svg className="absolute bottom-0 left-0 w-48 h-48 text-[#0078D7]/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M45.4,-77.1C58.1,-69.3,67,-54.6,73.6,-39.8C80.2,-25,84.5,-10.1,82.7,4.1C80.9,18.2,73,31.5,64.1,43.7C55.2,55.9,45.4,67,33,74.4C20.5,81.8,5.5,85.5,-8.2,84C-21.9,82.4,-34.4,75.7,-46.7,67.6C-58.9,59.5,-70.9,50,-76.7,37.6C-82.5,25.3,-82.1,10.1,-79.3,-4.1C-76.5,-18.3,-71.4,-31.6,-63.5,-43.3C-55.7,-54.9,-45.1,-65,-33.1,-72.3C-21.1,-79.6,-7.7,-84.2,6.1,-84.7C19.8,-85.2,39.6,-81.5,45.4,-77.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-sm font-medium mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
            Découvrez mes <span className="text-[#FF5E15]">projets récents</span>
          </h2>
          <motion.p 
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Voici une sélection de projets sur lesquels j'ai travaillé récemment, démontrant mes compétences en développement et en design.
          </motion.p>
        </motion.div>

        {/* Projets Grid - Responsive avec effet de masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <RecentProjectCard 
              key={index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        {/* Bouton "Voir plus de projets" */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border-2 border-[#FF5E15] text-[#FF5E15] font-medium rounded-md hover:bg-[#FF5E15] hover:text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les projets
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Popup de projet */}
      {selectedProject && (
        <ProjectPopup 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default RecentProjects;