import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiArrowRight, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import ProjectPopup, { Project } from './ProjectPopup';

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
  
  // Barre de progression avec couleurs basées sur la catégorie
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'System Programming': return 'from-purple-500 to-purple-300';
      case 'Graphisme': return 'from-emerald-500 to-emerald-300';
      case 'Sysadmin & Infra': return 'from-blue-500 to-blue-300';
      case 'Algo & Utils': return 'from-amber-500 to-amber-300';
      case 'Fullstack': return 'from-rose-500 to-rose-300';
      case 'IA & Commerce': return 'from-cyan-500 to-cyan-300';
      case 'Réseaux': return 'from-indigo-500 to-indigo-300';
      default: return 'from-[#FF5E15] to-[#FF8A50]';
    }
  };

  const progressBarColor = project.category ? 
    getCategoryColor(project.category) : 
    'from-[#FF5E15] to-[#FF8A50]';

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
        </div>
        
        {/* Contenu de la carte */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-6">{project.description}</p>
          
          {/* Technologies (limitées à 3 avec compteur pour le reste) */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700">{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700">+{project.technologies.length - 3}</span>
              )}
            </div>
          )}
          
          {/* Liens du projet */}
          <div className="flex justify-between items-center">
            <motion.button
              className="text-[#FF5E15] font-medium text-sm flex items-center"
              whileHover={{ x: 3 }}
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Voir le projet
              <FiExternalLink className="ml-1" />
            </motion.button>
            
            <div className="flex gap-2">
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <FiGithub size={16} />
                </motion.a>
              )}
              
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <FiExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Données des projets réels
  const projects: Project[] = [
    {
      imageSrc: '/images/transcendance.png',
      imageAlt: 'ft-transcendance',
      title: 'ft-transcendance',
      description: 'Plateforme de jeu de ping-pong en ligne avec authentification, chat en temps réel et classements.',
      link: 'https://github.com/yourusername/ft-transcendance',
      category: 'Fullstack',
      tags: ['Web', 'Jeu', 'Temps Réel', '42 Project'],
      technologies: ['JavaScript vanilla', 'Python', 'Docker', 'WebSocket', 'Microservices'],
      githubLink: 'https://github.com/yourusername/ft-transcendance',
      demoLink: 'https://ft-transcendance-demo.example.com',
      featured: true,
      detailedDescription: `
        Ce projet final de l'école 42 m'a permis de développer une application web complète avec une architecture microservices. J'ai implémenté:<br/><br/>
        • Un système d'authentification OAuth avec double facteur<br/>
        • Un jeu de ping-pong en temps réel avec matchmaking<br/>
        • Une interface de chat avec canaux publics/privés et messages directs<br/>
        • Un système de profil utilisateur avec avatars et statistiques<br/>
        • Un tableau de classement global des joueurs<br/><br/>
        L'architecture backend utilise des microservices Python communicant via API REST, tandis que le frontend est conçu en JavaScript vanilla pour des performances optimales.
      `
    },
    {
      imageSrc: '/images/djula.png',
      imageAlt: 'Djula - Commerce conversationnel',
      title: 'Djula',
      description: 'Plateforme e-commerce conversationnelle sur WhatsApp permettant aux utilisateurs d\'acheter via messagerie grâce à l\'IA.',
      link: 'https://github.com/yourusername/djula',
      category: 'IA & Commerce',
      tags: ['E-commerce', 'WhatsApp', 'AI', 'Conversationnel'],
      technologies: ['TypeScript', 'Supabase', 'WhatsApp Business API', 'OpenAI'],
      githubLink: 'https://github.com/yourusername/djula',
      demoLink: 'https://djula-demo.example.com',
      featured: true,
      detailedDescription: `
        Djula est une innovation dans le domaine du commerce conversationnel:<br/><br/>
        • Interface conversationnelle intuitive sur WhatsApp<br/>
        • Intégration avec l'API OpenAI pour comprendre les requêtes clients<br/>
        • Système de recommandation de produits personnalisé<br/>
        • Traitement sécurisé des paiements via WhatsApp<br/>
        • Suivi des commandes et communication automatisée<br/>
        • Analytics pour comprendre le comportement des utilisateurs<br/><br/>
        Ce projet novateur représente l'intersection entre l'IA, le e-commerce et les plateformes de messagerie, offrant une nouvelle façon d'acheter en ligne sans friction.
      `
    },
    {
      imageSrc: '/images/cub3d.png',
      imageAlt: 'Cub3D - Raycasting Engine',
      title: 'Cub3D',
      description: 'Moteur de rendu 3D inspiré de Wolfenstein 3D, créant une vue dynamique dans un labyrinthe avec techniques de raycasting.',
      link: 'https://github.com/yourusername/cub3d',
      category: 'Graphisme',
      tags: ['3D', 'Raycasting', 'Jeu vidéo', '42 Project'],
      technologies: ['C', 'MiniLibX', 'Mathématiques 3D', 'Algorithmes'],
      githubLink: 'https://github.com/yourusername/cub3d',
      featured: false,
      detailedDescription: `
        Dans ce projet graphique inspiré du légendaire Wolfenstein 3D, j'ai:<br/><br/>
        • Implémenté un moteur de rendu 3D complet basé sur la technique du raycasting<br/>
        • Développé un parseur de configuration pour charger des cartes de niveau<br/>
        • Créé un système de collision et de mouvement fluide dans l'environnement<br/>
        • Ajouté des textures sur les murs avec mapping correct<br/>
        • Géré efficacement le rendu des sprites et des objets<br/>
        • Optimisé les performances pour maintenir un framerate stable<br/><br/>
        Ce projet a considérablement renforcé ma compréhension des mathématiques 3D et des techniques graphiques fondamentales utilisées dans le développement de jeux.
      `
    },
    {
      imageSrc: '/images/minishell.png',
      imageAlt: 'Minishell',
      title: 'Minishell',
      description: 'Implémentation d\'un shell minimaliste reproduisant les fonctionnalités de base de bash, avec gestion des processus et redirections.',
      link: 'https://github.com/yourusername/minishell',
      category: 'System Programming',
      tags: ['Shell', 'Unix', 'Processus', '42 Project'],
      technologies: ['C', 'Processus', 'Descripteurs de fichiers', 'Parsing'],
      githubLink: 'https://github.com/yourusername/minishell',
      featured: true,
      detailedDescription: `
        Dans ce projet de programmation système, j'ai développé:<br/><br/>
        • Un interpréteur de commandes shell minimaliste en C<br/>
        • Un parseur robuste pour analyser les entrées utilisateur<br/>
        • La gestion des processus avec fork() et execve()<br/>
        • L'implémentation des redirections (>, >>, <) et des pipes (|)<br/>
        • La gestion des variables d'environnement et des signaux<br/>
        • Les commandes intégrées (cd, echo, pwd, export, unset, env, exit)<br/><br/>
        Ce projet m'a permis d'acquérir une compréhension approfondie du fonctionnement des shells Unix et de la gestion des processus.
      `
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50/50">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
          <Link href="/projects" passHref>
            <motion.div 
              className="inline-flex items-center px-6 py-3 border-2 border-[#FF5E15] text-[#FF5E15] font-medium rounded-md hover:bg-[#FF5E15] hover:text-white transition-colors group cursor-pointer"
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
            </motion.div>
          </Link>
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