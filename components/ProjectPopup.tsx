import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiX, FiGithub, FiCode, FiLayers } from 'react-icons/fi';

// Interface pour le type Project
export interface Project {
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
  detailedDescription?: string;
}

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

  // Fonction pour choisir la couleur d'accent en fonction de la catégorie
  const getCategoryAccentColor = (category: string) => {
    switch(category) {
      case 'System Programming': return 'bg-purple-500';
      case 'Graphisme': return 'bg-emerald-500';
      case 'Sysadmin & Infra': return 'bg-blue-500';
      case 'Algo & Utils': return 'bg-amber-500';
      case 'Fullstack': return 'bg-rose-500';
      case 'IA & Commerce': return 'bg-cyan-500';
      case 'Réseaux': return 'bg-indigo-500';
      default: return 'bg-[#FF5E15]';
    }
  };

  const accentColor = project.category ? 
    getCategoryAccentColor(project.category) : 
    'bg-[#FF5E15]';
  
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
              <span className={`w-2 h-6 ${accentColor} rounded-full mr-3`}></span>
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
                
                {/* Description détaillée spécifique à chaque projet */}
                {project.detailedDescription ? (
                  <div className="text-gray-600 leading-relaxed">
                    <p className="mb-4">{project.description}</p>
                    <p dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                )}
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
                {(project.link || project.demoLink || project.githubLink) && (
                  <motion.a 
                    href={project.demoLink || project.githubLink || project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium transition-all hover:bg-[#e54e0f] flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {project.demoLink ? 'Voir la démo' : project.githubLink ? 'Voir le code' : 'Visiter le site'}
                    <FiExternalLink className="ml-2" />
                  </motion.a>
                )}
                
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

export default ProjectPopup;