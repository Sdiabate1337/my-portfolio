import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      title: 'Backend Development',
      price: '$150 /mois',
      color: 'text-blue-600',
      buttonStyle: 'border border-orange-500 text-orange-500',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Développement avec TypeScript & Node.js',
        'Configuration et gestion de bases de données MongoDB & SQL',
        'Conception et implémentation d\'API RESTful',
      ],
    },
    {
      title: 'CI/CD Automations',
      price: '$180 /mois',
      color: 'text-orange-500',
      buttonStyle: 'bg-orange-500 text-white',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Mise en place de pipelines CI/CD avec GitHub Actions & Jenkins',
        'Conteneurisation et orchestration avec Docker & Kubernetes',
        'Sécurité et monitoring des déploiements',
      ],
    },
    {
      title: 'AI Agent Automation',
      price: '$200 /mois',
      color: 'text-blue-600',
      buttonStyle: 'border border-orange-500 text-orange-500',
      buttonText: 'Choisir ce plan',
      benefits: [
        'Automatisation des workflows avec n8n & LangChain',
        'Développement d\'IA générative avec LLM & Generative AI',
        'Traitement et analyse des données',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container mx-auto px-4 text-center">
        <button className="px-4 py-2 rounded-full bg-orange-500 text-white font-medium mb-4">
          PRICING
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] max-w-3xl mx-auto leading-tight mb-12">
          Les Meilleurs Plans de Tarification Pour Obtenir Votre Meilleur Tarif
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-lg font-bold ${plan.color} mb-2`}>{plan.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <p className={`text-2xl font-bold ${plan.color} mb-4`}>{plan.price}</p>
              <hr className="border-gray-200 mb-4" />
              <ul className="text-left mb-6">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className={`px-4 py-2 rounded-md font-medium transition-all ${plan.buttonStyle} hover:bg-orange-500 hover:text-white`}>
                {plan.buttonText} &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;