'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiSearch, FiX, FiExternalLink, FiGithub, FiFilter, FiCode, FiLayers, FiTag } from 'react-icons/fi';
import ProjectPopup, { Project } from '../../components/ProjectPopup';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Références pour les animations au scroll
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Données de tous les projets
  const allProjects: Project[] = [
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
        Ce projet final de l'école 42 m'a permis de développer une application web complète avec une architecture microservices. J'ai implémenté:
        <br/><br/>
        • Un système d'authentification OAuth avec double facteur<br/>
        • Un jeu de ping-pong en temps réel avec matchmaking<br/>
        • Une interface de chat avec canaux publics/privés et messages directs<br/>
        • Un système de profil utilisateur avec avatars et statistiques<br/>
        • Un tableau de classement global des joueurs
        <br/><br/>
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
        Djula révolutionne l'expérience d'achat en transformant WhatsApp en plateforme e-commerce intelligente:
        <br/><br/>
        • Interface conversationnelle intuitive exploitant l'API WhatsApp Business<br/>
        • Intégration d'OpenAI pour comprendre les intentions d'achat et recommander des produits<br/>
        • Architecture backend robuste avec Supabase pour la gestion des données<br/>
        • Authentification sécurisée via le numéro de téléphone WhatsApp<br/>
        • Système de paiement intégré avec suivi de commande en temps réel
        <br/><br/>
        Ce projet répond aux besoins des marchés émergents où WhatsApp est le principal canal de communication numérique, permettant aux commerçants d'accéder à un public plus large avec moins de friction.
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
        Cub3D est une recréation du moteur révolutionnaire de Wolfenstein 3D, le premier véritable FPS de l'histoire du jeu vidéo:
        <br/><br/>
        • Implémentation complète du raycasting pour créer l'illusion de 3D dans un environnement 2D<br/>
        • Rendu en temps réel avec contrôle fluide de la caméra (rotation, déplacement)<br/>
        • Chargement de cartes personnalisées à partir de fichiers de configuration<br/>
        • Gestion des textures murales et des sprites<br/>
        • Optimisations performantes pour maintenir un framerate élevé
        <br/><br/>
        Ce projet m'a permis d'approfondir mes connaissances en mathématiques 3D, en programmation graphique bas niveau, et en optimisation d'algorithmes.
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
        Minishell est une réplique simplifiée mais fonctionnelle du shell Bash, avec:
        <br/><br/>
        • Un lexer et parser robustes pour interpréter les commandes utilisateur<br/>
        • Exécution de commandes avec recherche dans le PATH<br/>
        • Gestion des variables d'environnement et des expansions<br/>
        • Implémentation des redirections (>, <, >>, <<) et des pipes (|)<br/>
        • Gestion des signaux (Ctrl+C, Ctrl+D, Ctrl+\\)<br/>
        • Builtins intégrés (cd, echo, pwd, export, unset, env, exit)
        <br/><br/>
        Ce projet m'a permis de comprendre en profondeur le fonctionnement d'un shell et les subtilités de la programmation système UNIX, notamment la création et la gestion des processus, les descripteurs de fichiers et les signaux.
      `
    },
    {
      imageSrc: '/images/philosophers.png',
      imageAlt: 'Philosophers',
      title: 'Philosophers',
      description: 'Simulation du problème classique des philosophes dîneurs, explorant la synchronisation entre threads et la prévention des deadlocks.',
      link: 'https://github.com/yourusername/philosophers',
      category: 'System Programming',
      tags: ['Concurrence', 'Threads', 'Mutex', '42 Project'],
      technologies: ['C', 'Threads', 'Mutex', 'Semaphores', 'Mémoire partagée'],
      githubLink: 'https://github.com/yourusername/philosophers',
      demoLink: 'https://philosophers-demo.example.com',
      featured: false,
      detailedDescription: `
        Le projet Philosophers est une simulation du problème classique des philosophes dîneurs, un exercice de synchronisation et de gestion des ressources:
        <br/><br/>
        • Utilisation de threads pour simuler les philosophes<br/>
        • Synchronisation avec mutex et sémaphores pour éviter les conditions de course<br/>
        • Implémentation de la gestion des ressources partagées (fourchettes)<br/>
        • Prévention des deadlocks avec des algorithmes de synchronisation avancés<br/>
        • Visualisation en temps réel de l'état des philosophes (mange, pense, attend)
        <br/><br/>
        Ce projet m'a permis de maîtriser les concepts de concurrence, de synchronisation et de gestion des ressources en environnement multi-threadé.
      `
    },
    {
      imageSrc: '/images/fdf.png',
      imageAlt: 'FdF - Fil de Fer',
      title: 'FdF',
      description: 'Visualiseur 3D wireframe transformant une carte de points en représentation tridimensionnelle manipulable.',
      link: 'https://github.com/yourusername/fdf',
      category: 'Graphisme',
      tags: ['3D', 'Visualisation', 'Wireframe', '42 Project'],
      technologies: ['C', 'MiniLibX', 'Mathématiques 3D', 'Bresenham'],
      githubLink: 'https://github.com/yourusername/fdf',
      featured: false,
      detailedDescription: `
        FdF (Fil de Fer) est un visualiseur 3D en wireframe qui convertit des données d'élévation en représentation tridimensionnelle:
        <br/><br/>
        • Lecture et parsing de fichiers contenant une grille de valeurs d'altitude<br/>
        • Projection isométrique ou perspective au choix<br/>
        • Rotation, translation et zoom interactifs<br/>
        • Gestion de différentes couleurs selon l'altitude<br/>
        • Implémentation de l'algorithme de Bresenham pour le tracé de lignes<br/>
        • Optimisation des performances pour des cartes à haute densité
        <br/><br/>
        Ce projet m'a familiarisé avec les concepts fondamentaux de la représentation graphique 3D: matrices de transformation, projections, et tracé de lignes efficace.
      `
    },
    {
      imageSrc: '/images/inception.png',
      imageAlt: 'Inception',
      title: 'Inception',
      description: 'Infrastructure conteneurisée multi-services incluant NGINX, WordPress, MariaDB, et plus, déployée avec Docker compose.',
      link: 'https://github.com/yourusername/inception',
      category: 'Sysadmin & Infra',
      tags: ['DevOps', 'Conteneurisation', 'Infrastructure', '42 Project'],
      technologies: ['Docker', 'Docker Compose', 'NGINX', 'WordPress', 'MariaDB'],
      githubLink: 'https://github.com/yourusername/inception',
      featured: false,
      detailedDescription: `
        Inception est un projet d'infrastructure qui m'a permis de maîtriser les conteneurs Docker:
        <br/><br/>
        • Création d'une infrastructure complète multi-services avec Docker Compose<br/>
        • Configuration d'un serveur NGINX avec SSL/TLS<br/>
        • Déploiement d'une application WordPress avec base de données MariaDB<br/>
        • Configuration des volumes persistants pour les données<br/>
        • Mise en place de réseaux Docker isolés<br/>
        • Sécurisation de l'ensemble de l'infrastructure
        <br/><br/>
        J'ai appris à construire des images Docker optimisées (sans utilisateur root, taille minimale) et à orchestrer des services interdépendants.
      `
    },
    {
      imageSrc: '/images/push_swap.png',
      imageAlt: 'Push Swap',
      title: 'Push Swap',
      description: 'Algorithme de tri optimisé utilisant deux piles et un ensemble limité d\'opérations pour trier des entiers avec un minimum d\'instructions.',
      link: 'https://github.com/yourusername/push_swap',
      category: 'Algo & Utils',
      tags: ['Algorithmes', 'Tri', 'Optimisation', '42 Project'],
      technologies: ['C', 'Structures de données', 'Algorithmes de tri'],
      githubLink: 'https://github.com/yourusername/push_swap',
      demoLink: 'https://push-swap-visualizer.example.com',
      featured: false,
      detailedDescription: `
        Push Swap est un défi algorithmique demandant de trier des données avec un ensemble limité d'opérations:
        <br/><br/>
        • Développement d'un algorithme de tri adapté à une structure de données contrainte (deux piles)<br/>
        • Opérations limitées: swap, push, rotate et reverse rotate<br/>
        • Optimisation pour minimiser le nombre d'opérations<br/>
        • Visualisation du processus de tri<br/>
        • Gestion de différentes tailles d'entrée avec des stratégies adaptées
        <br/><br/>
        Ce projet m'a permis d'affiner mes compétences en algorithmique et d'optimiser un processus sous contraintes particulières.
      `
    },
    {
      imageSrc: '/images/ftirc.png',
      imageAlt: 'ft-irc',
      title: 'ft-irc',
      description: 'Serveur IRC conforme aux protocoles standard, permettant aux clients IRC réels de se connecter et d\'interagir sur différents canaux.',
      link: 'https://github.com/yourusername/ft-irc',
      category: 'Réseaux',
      tags: ['IRC', 'Serveur', 'Protocole', '42 Project'],
      technologies: ['C++', 'Sockets', 'Protocoles réseau', 'Programmation asynchrone'],
      githubLink: 'https://github.com/yourusername/ft-irc',
      featured: false,
      detailedDescription: `
        ft-irc est une implémentation d'un serveur IRC (Internet Relay Chat) conforme aux RFC:
        <br/><br/>
        • Développement d'un serveur multithreadé capable de gérer plusieurs connexions simultanées<br/>
        • Implémentation du protocole IRC avec gestion des commandes standard<br/>
        • Création et gestion de canaux avec différents modes (privé, modéré, etc.)<br/>
        • Système d'authentification et de privilèges (opérateurs)<br/>
        • Compatibilité avec les clients IRC existants comme HexChat, WeeChat, etc.
        <br/><br/>
        Ce projet m'a permis d'approfondir mes connaissances en programmation réseau, en gestion de protocoles et en développement de serveurs concurrents.
      `
    },
    {
      imageSrc: '/images/libft.png',
      imageAlt: 'Libft',
      title: 'Libft',
      description: 'Bibliothèque C personnalisée implémentant des fonctions standards de la libc et des utilitaires de manipulation de données.',
      link: 'https://github.com/yourusername/libft',
      category: 'Algo & Utils',
      tags: ['Bibliothèque', 'Fondamentaux C', '42 Project'],
      technologies: ['C', 'Structures de données', 'Gestion mémoire'],
      githubLink: 'https://github.com/yourusername/libft',
      featured: false,
      detailedDescription: `
        Libft est une bibliothèque C personnalisée implémentant diverses fonctions de la libc et des utilitaires:
        <br/><br/>
        • Réimplémentation de fonctions standard (printf, malloc, strcpy, etc.)<br/>
        • Création de structures de données (listes chaînées, arbres, etc.)<br/>
        • Fonctions de manipulation de chaînes, de mémoire et de caractères<br/>
        • Optimisation des performances et de la gestion mémoire<br/>
        • Création d'une API cohérente et bien documentée
        <br/><br/>
        Ce projet fondamental m'a permis de comprendre les mécanismes internes du langage C et de créer une boîte à outils personnalisée que j'utilise dans tous mes autres projets.
      `
    },
    {
      imageSrc: '/images/born2beroot.png',
      imageAlt: 'Born2beRoot',
      title: 'Born2beRoot',
      description: 'Configuration et sécurisation d\'un serveur Debian avec services essentiels, partitionnement LVM et stratégie de sécurité stricte.',
      link: 'https://github.com/yourusername/born2beroot',
      category: 'Sysadmin & Infra',
      tags: ['Sécurité', 'Linux', 'Serveur', '42 Project'],
      technologies: ['Debian', 'Bash', 'LVM', 'SELinux', 'SSH'],
      githubLink: 'https://github.com/yourusername/born2beroot',
      featured: false,
      detailedDescription: `
        Born2beRoot m'a permis de créer et configurer un serveur Linux sécurisé de A à Z:
        <br/><br/>
        • Installation de Debian avec partitionnement LVM chiffré<br/>
        • Configuration d'une politique de sécurité stricte avec SELinux et AppArmor<br/>
        • Configuration du pare-feu avec UFW<br/>
        • Mise en place d'une politique de mots de passe forte<br/>
        • Configuration de SSH sécurisé (clés, port non standard)<br/>
        • Monitoring système avec script cron
        <br/><br/>
        Ce projet m'a fourni des bases solides en administration système Linux et en sécurisation de serveurs.
      `
    },
    {
      imageSrc: '/images/ft_printf.png',
      imageAlt: 'ft_printf',
      title: 'ft_printf',
      description: 'Réimplémentation personnalisée de la fonction printf() de la libc, avec gestion des conversions et formattage.',
      link: 'https://github.com/yourusername/ft_printf',
      category: 'Algo & Utils',
      tags: ['C', 'Parsing', 'Formatage', '42 Project'],
      technologies: ['C', 'Gestion de variadic functions', 'Buffers'],
      githubLink: 'https://github.com/yourusername/ft_printf',
      featured: false,
      detailedDescription: `
        ft_printf est ma version personnalisée de la célèbre fonction printf de la libc:
        <br/><br/>
        • Implémentation du parsing des spécificateurs de format (%d, %s, %p, etc.)<br/>
        • Gestion des flags de précision, largeur et modificateurs<br/>
        • Support pour différents types de données (int, char, string, pointeur)<br/>
        • Conversion des nombres en différentes bases (décimal, hexadécimal, octal)<br/>
        • Optimisation des performances avec système de buffer
        <br/><br/>
        Ce projet m'a permis de comprendre en profondeur le fonctionnement des fonctions à nombre variable d'arguments en C et les mécanismes de formatage textuel.
      `
    },
    {
      imageSrc: '/images/get_next_line.png',
      imageAlt: 'Get Next Line',
      title: 'Get Next Line',
      description: 'Fonction permettant de lire ligne par ligne depuis un descripteur de fichier, avec gestion efficace de la mémoire.',
      link: 'https://github.com/yourusername/get_next_line',
      category: 'Algo & Utils',
      tags: ['C', 'File I/O', 'Buffer', '42 Project'],
      technologies: ['C', 'Gestion de descripteurs', 'Allocation dynamique'],
      githubLink: 'https://github.com/yourusername/get_next_line',
      featured: false,
      detailedDescription: `
        Get Next Line (GNL) est une fonction permettant de lire un fichier ligne par ligne:
        <br/><br/>
        • Gestion efficace de la lecture avec un buffer de taille variable<br/>
        • Support de multiples descripteurs de fichiers simultanés<br/>
        • Optimisation de la mémoire avec réutilisation des buffers<br/>
        • Gestion propre des cas limites (EOF, erreurs, etc.)<br/>
        • Performance optimisée même pour de très grands fichiers
        <br/><br/>
        Ce projet m'a permis de maîtriser les opérations d'entrée/sortie en C et la gestion fine de la mémoire dans un contexte de lecture séquentielle.
      `
    }
  ];

  // Filtrer les projets en fonction de la catégorie active et du terme de recherche
  useEffect(() => {
    let filtered = allProjects;
    
    // Filtrage par catégorie
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    // Filtrage par recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
    filtered = filtered.filter((project: Project) => 
      project.title.toLowerCase().includes(term) || 
      project.description.toLowerCase().includes(term) ||
      (project.tags && project.tags.some((tag: string) => tag.toLowerCase().includes(term))) ||
      (project.technologies && project.technologies.some((tech: string) => tech.toLowerCase().includes(term)))
    );
    }
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchTerm]);

  // Liste des catégories uniques + "Tous"
  const categories = ['all', ...Array.from(new Set(allProjects.map(p => p.category))).filter(Boolean)] as string[];
  
  // Fonction pour obtenir la couleur en fonction de la catégorie
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'System Programming': return 'bg-purple-500';
      case 'Graphisme': return 'bg-emerald-500';
      case 'Sysadmin & Infra': return 'bg-blue-500';
      case 'Algo & Utils': return 'bg-amber-500';
      case 'Fullstack': return 'bg-rose-500';
      case 'IA & Commerce': return 'bg-cyan-500';
      case 'Réseaux': return 'bg-indigo-500';
      case 'all': return 'bg-gray-800';
      default: return 'bg-[#FF5E15]';
    }
  };

  // Fonction pour obtenir le texte de la catégorie
  const getCategoryLabel = (category: string) => {
    return category === 'all' ? 'Tous les projets' : category;
  };

  return (
    <>
      <Header />

      {/* Hero section améliorée */}
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-[#2a1a12]"
      >
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Cercles décoratifs */}
            <motion.div 
              className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#FF5E15]/30 blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -30, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
              animate={{ 
                x: [0, -40, 0],
                y: [0, 20, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut" 
              }}
            />
            
            {/* Grille */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)',
              backgroundSize: '30px 30px'
            }} />
            
            {/* Lignes animées */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 98%, white 98%), linear-gradient(transparent 98%, white 98%)',
                backgroundSize: '100px 100px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '100px 100px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
        
        <motion.div 
          className="container mx-auto px-6 py-16 relative z-10"
          style={{ y, opacity }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-[#FF5E15]/20 text-[#FF5E15] text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              PORTFOLIO DE PROJETS
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Mon <span className="text-[#FF5E15]">parcours technique</span> <br/> à travers mes réalisations
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Découvrez les projets qui ont façonné mon expertise en développement, 
              de la programmation système à la création d'applications web modernes.
            </motion.p>
            
            {/* Statistiques rapides */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF5E15] mb-2">{allProjects.length}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Projets</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF5E15] mb-2">{Array.from(new Set(allProjects.map(p => p.category))).length}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Catégories</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF5E15] mb-2">{allProjects.filter(p => p.featured).length}</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Projets vedettes</div>
              </div>
            </motion.div>
            
            {/* Indicateur de défilement */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div 
                  className="w-1.5 h-3 bg-white rounded-full mt-2"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              <div className="text-white/50 text-xs mt-2 text-center">Défiler</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <main className="min-h-screen bg-gray-50">
        <section className="py-20 px-4 container mx-auto">
          {/* Zone de filtres améliorée */}
          <div className="mb-16 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#FF5E15] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
              Trouver un projet
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Recherche avec animation */}
              <motion.div 
                className="relative w-full md:w-72"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5E15]/50 focus:border-[#FF5E15] transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                {searchTerm && (
                  <motion.button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    onClick={() => setSearchTerm('')}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX />
                  </motion.button>
                )}
              </motion.div>

              {/* Bouton filtre mobile */}
              <motion.button
                className="md:hidden flex items-center px-4 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium w-full"
                onClick={() => setShowFilters(!showFilters)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.98 }}
              >
                <FiFilter className="mr-2" />
                {showFilters ? "Masquer les filtres" : "Afficher les filtres"}
              </motion.button>

              {/* Filtres desktop améliorés */}
              <div className="hidden md:flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      activeFilter === category
                        ? `${getCategoryColor(category)} text-white shadow-md`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveFilter(category)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {category === "all" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                    )}
                    {category === "System Programming" && <FiCode className="h-4 w-4" />}
                    {category === "Graphisme" && <FiLayers className="h-4 w-4" />}
                    {category === "Algo & Utils" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    {getCategoryLabel(category)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Filtres mobile avec animation */}
            <AnimatePresence>
              {showFilters && (
                <motion.div 
                  className="md:hidden mt-4 grid grid-cols-2 gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeFilter === category
                          ? `${getCategoryColor(category)} text-white shadow-md`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setActiveFilter(category);
                        setShowFilters(false);
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      {getCategoryLabel(category)}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Statistiques de résultats avec animation */}
            <motion.div 
              className="text-sm text-gray-500 mt-4 flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <span className="font-medium text-gray-900">{filteredProjects.length}</span> projet{filteredProjects.length !== 1 && 's'} trouvé{filteredProjects.length !== 1 && 's'}
              </div>
              
              {activeFilter !== 'all' && (
                <button 
                  className="text-[#FF5E15] hover:underline flex items-center"
                  onClick={() => setActiveFilter('all')}
                >
                  Réinitialiser les filtres <FiX className="ml-1" />
                </button>
              )}
            </motion.div>
          </div>

          {/* Liste des projets avec layout masonry */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="group relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Badge catégorie */}
                  {project.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`px-3 py-1 ${getCategoryColor(project.category)} text-white text-xs font-medium rounded-full shadow-sm`}>
                        {project.category}
                      </div>
                    </div>
                  )}
                  
                  {/* Badge featured */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-xs font-medium rounded-full shadow-sm flex items-center">
                        <span className="mr-1">★</span> Vedette
                      </div>
                    </div>
                  )}
                  
                  {/* Image avec overlay au survol */}
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
                  </div>
                  
                  {/* Contenu avec animation */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF5E15] transition-colors">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Tags avec effet staggered */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <motion.span 
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md flex items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                          >
                            <FiTag className="mr-1 text-gray-400" size={10} />
                            {tag}
                          </motion.span>
                        ))}
                        {project.tags.length > 3 && (
                          <motion.span 
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            +{project.tags.length - 3}
                          </motion.span>
                        )}
                      </div>
                    )}
                    
                    {/* Technologies utilisées */}
                    {project.technologies && (
                      <div className="mb-5">
                        <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Technologies</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Bouton avec effet */}
                    <div className="flex justify-between items-center mt-4">
                      <motion.button 
                        className="px-5 py-2.5 bg-[#FF5E15] text-white rounded-lg font-medium transition-all flex items-center"
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.05, backgroundColor: "#e54e0f" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Voir les détails
                        <FiExternalLink className="ml-2" />
                      </motion.button>
                      
                      <div className="flex gap-2">
                        {project.githubLink && (
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                            whileHover={{ y: -2 }}
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
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-20 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.img 
                src="/images/empty-state.svg" 
                alt="Aucun résultat" 
                className="w-64 h-64 mx-auto mb-6 opacity-70"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-gray-500 text-lg mb-6">Aucun projet ne correspond à vos critères</p>
              <motion.button 
                className="px-6 py-3 bg-[#FF5E15] text-white rounded-lg font-medium shadow-md"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Réinitialiser les filtres
              </motion.button>
            </motion.div>
          )}

          {/* Lien de retour à l'accueil */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/">
              <motion.div
                className="inline-flex items-center px-6 py-3 border-2 border-[#FF5E15] text-[#FF5E15] font-medium rounded-xl hover:bg-[#FF5E15] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Retour à l'accueil
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Popup de détails du projet */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectsPage;