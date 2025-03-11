import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiArrowRight, FiCode, FiServer, FiCpu } from 'react-icons/fi';

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  const plans = [
    {
      title: 'Backend Development',
      price: '150',
      color: '#3182CE', // blue-600
      gradient: 'from-blue-400 to-blue-600',
      icon: <FiServer className="w-7 h-7" />,
      popular: false,
      buttonStyle: 'border-2 border-[#FF5E15] text-[#FF5E15] hover:bg-[#FF5E15] hover:text-white',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Développement avec TypeScript & Node.js',
        'Configuration et gestion de bases de données MongoDB & SQL',
        'Conception et implémentation d\'API RESTful',
        'Documentation API complète',
        'Support technique 30 jours',
      ],
    },
    {
      title: 'CI/CD Automations',
      price: '180',
      color: '#FF5E15', // orange-500
      gradient: 'from-orange-400 to-orange-600',
      icon: <FiCode className="w-7 h-7" />,
      popular: true,
      buttonStyle: 'bg-[#FF5E15] text-white border-2 border-[#FF5E15] hover:bg-orange-600',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Mise en place de pipelines CI/CD avec GitHub Actions & Jenkins',
        'Conteneurisation et orchestration avec Docker & Kubernetes',
        'Sécurité et monitoring des déploiements',
        'Tests automatisés et intégration continue',
        'Support technique 60 jours',
      ],
    },
    {
      title: 'AI Agent Automation',
      price: '200',
      color: '#805AD5', // purple-600
      gradient: 'from-purple-400 to-purple-600',
      icon: <FiCpu className="w-7 h-7" />,
      popular: false,
      buttonStyle: 'border-2 border-[#FF5E15] text-[#FF5E15] hover:bg-[#FF5E15] hover:text-white',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Automatisation des workflows avec n8n & LangChain',
        'Développement d\'IA générative avec LLM & Generative AI',
        'Traitement et analyse des données',
        'Agents d\'automatisation personnalisés',
        'Support technique 90 jours',
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-200 to-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-200 to-orange-200 opacity-20 blur-3xl"></div>
        
        {/* Particules flottantes */}
        <motion.div 
          className="absolute w-3 h-3 rounded-full bg-orange-300/40"
          style={{ top: '10%', left: '5%' }}
          animate={{ 
            y: [0, 15, 0], 
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-2 h-2 rounded-full bg-blue-300/40"
          style={{ top: '30%', right: '10%' }}
          animate={{ 
            y: [0, -10, 0], 
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-4 h-4 rounded-full bg-purple-300/40"
          style={{ bottom: '20%', left: '15%' }}
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 text-[#FF5E15] font-medium text-sm">
              TARIFICATION
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight mt-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Des Plans Tarifaires <span className="text-[#FF5E15]">Adaptés</span> à Vos Besoins
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choisissez l'offre qui correspond le mieux à votre projet et bénéficiez d'un service personnalisé et professionnel.
          </motion.p>
        </div>

        {/* Grille de cartes de tarification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
            >
              {/* Effet de bordure animé */}
              {hoveredPlan === index && (
                <motion.div 
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `linear-gradient(90deg, ${plan.color}33, ${plan.color}00, ${plan.color}33)`,
                    backgroundSize: "200% 100%",
                    border: `2px solid ${plan.color}22`
                  }}
                  layoutId={`border-${index}`}
                />
              )}
              
              {/* Badge "Populaire" */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="relative">
                    <div className="w-24 h-24 overflow-hidden absolute -top-12 -right-12">
                      <div className="absolute -rotate-45 bg-[#FF5E15] text-white text-xs font-medium py-1 px-6 text-center w-32 top-[4.5rem] -right-[0.5rem]">
                        POPULAIRE
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-8 relative z-10">
                {/* En-tête de la carte */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.gradient} text-white mr-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                </div>
                
                {/* Prix */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-gray-500 text-lg">€</span>
                    <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                    <span className="text-gray-500 text-lg ml-1">/mois</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Facturation mensuelle, sans engagement</p>
                </div>
                
                <hr className="border-gray-100 mb-6" />
                
                {/* Liste des avantages */}
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                    >
                      <div className="mr-3 mt-1">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${plan.color}15` }}>
                          <FiCheck className="w-3 h-3" style={{ color: plan.color }} />
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Bouton d'action */}
                <motion.button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center ${plan.buttonStyle}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{plan.buttonText}</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ 
                      x: hoveredPlan === index ? [0, 4, 0] : 0
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: hoveredPlan === index ? Infinity : 0,
                      repeatType: "loop"
                    }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </motion.button>
                
                {/* Élément décoratif */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5" style={{ color: plan.color }}>
                  {plan.icon && (
                    <div className="w-full h-full">
                      {React.cloneElement(plan.icon as React.ReactElement, { className: "w-full h-full" })}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Ornement bas */}
              {plan.popular && (
                <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Section FAQ ou appel à l'action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">Vous ne trouvez pas ce que vous cherchez?</p>
          <motion.button 
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-[#FF5E15] border-2 border-[#FF5E15] hover:bg-[#FF5E15] hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-moi pour une offre personnalisée
            <FiArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;