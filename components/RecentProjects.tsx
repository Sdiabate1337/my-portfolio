import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface RecentProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
  onClick: () => void;
}

const RecentProjectCard = ({ imageSrc, imageAlt, title, description, link, onClick }: RecentProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="relative w-full h-48 mb-4">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          layout="fill" 
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-block px-4 py-2 bg-[#FF5E15] text-white rounded-md font-medium transition-all hover:bg-[#e54e0f]"
      >
        Voir le projet
      </a>
    </motion.div>
  );
};

interface ProjectPopupProps {
  project: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    link: string;
  };
  onClose: () => void;
}

const ProjectPopup = ({ project, onClose }: ProjectPopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg relative max-w-lg w-full">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative w-full h-48 mb-4">
          <Image 
            src={project.imageSrc} 
            alt={project.imageAlt} 
            layout="fill" 
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <a 
          href={project.link} 
          className="inline-block px-4 py-2 bg-[#FF5E15] text-white rounded-md font-medium transition-all hover:bg-[#e54e0f]"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  interface Project {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    link: string;
  }
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      imageSrc: '/images/project1.png',
      imageAlt: 'Project 1',
      title: 'Projet 1',
      description: 'Description du projet 1.',
      link: '#'
    },
    {
      imageSrc: '/images/project2.png',
      imageAlt: 'Project 2',
      title: 'Projet 2',
      description: 'Description du projet 2.',
      link: '#'
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight">
            Mes Projets Récents
          </h2>
          <p className="text-gray-600 text-sm mt-4">
            Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RecentProjectCard 
              key={index}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              link={project.link}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectPopup 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default RecentProjects;