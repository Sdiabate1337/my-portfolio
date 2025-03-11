import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="hero-bg relative overflow-hidden py-20">
      {/* Background Elements - Même style que Hero */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Area */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="inline-block px-4 py-2 bg-[#FFF4E8] text-[#FF5E15] rounded-full text-sm font-medium mb-4">
              MY SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              My Quality Services
            </h2>
          </div>
          <motion.button 
            className="mt-6 md:mt-0 px-6 py-3 bg-[#FF5E15] text-white rounded hover:bg-[#e65513] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL SERVICES
          </motion.button>
        </motion.div>

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Service Cards */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Service Card 1 - Orange */}
            <motion.div 
              className="relative bg-white p-8 rounded-lg shadow-md border-l-4 border-[#FF5E15] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#FFF4E8] flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#FF5E15]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Backend Development</h3>
                  <p className="text-gray-600 mb-4">
                     Construire des architectures backend scalables, sécurisées et performantes pour des applications robustes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#FF5E15] rounded-full mr-2"></span>
                      TypeScript & Node.js
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#FF5E15] rounded-full mr-2"></span>
                      MongoDB & SQL
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#FF5E15] rounded-full mr-2"></span>
                      API Design
                    </li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#FFF4E8] group-hover:text-[#FFE0C4] transition-colors">
                  01
                </div>
              </div>
            </motion.div>

            {/* Service Card 2 - Green */}
            <motion.div 
              className="relative bg-white p-8 rounded-lg shadow-md border-l-4 border-[#4CAF50] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#4CAF50]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">CI/CD Automations</h3>
                  <p className="text-gray-600 mb-4">
                   Optimiser le déploiement avec des pipelines fluides, sécurisés et automatisés.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                      GitHub Actions & Jenkins
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                      Docker & Kubernetes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                      Sécurité & Monitoring
                    </li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#E8F5E9] group-hover:text-[#C8E6C9] transition-colors">
                  02
                </div>
              </div>
            </motion.div>

            {/* Service Card 3 - Purple */}
            <motion.div 
              className="relative bg-white p-8 rounded-lg shadow-md border-l-4 border-[#9C27B0] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#F3E5F5] flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#9C27B0]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">AI Agent Automation</h3>
                  <p className="text-gray-600 mb-4">
                   Créer des agents intelligents capables d’automatiser des processus complexes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#9C27B0] rounded-full mr-2"></span>
                      n8n & LangChain. 
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#9C27B0] rounded-full mr-2"></span>
                      LLM & Generative AI.
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#9C27B0] rounded-full mr-2"></span>
                      Data Processing.
                    </li>
                  </ul>
                </div>
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#F3E5F5] group-hover:text-[#E1BEE7] transition-colors">
                  03
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:w-2/5 space-y-6">
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md h-60"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full w-full">
                <Image 
                  src="/images/service-image-1.jpg" 
                  alt="Office workspace with plants" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x300/f9f9f9/333?text=Office+Workspace";
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md h-64"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full w-full">
                <Image 
                  src="/images/service-image-2.jpg" 
                  alt="UI/UX designs on devices" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x320/f9f9f9/333?text=UI/UX+Designs";
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md h-56"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full w-full">
                <Image 
                  src="/images/service-image-3.jpg" 
                  alt="Mobile app screens" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x280/f9f9f9/333?text=Mobile+App+Screens";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;