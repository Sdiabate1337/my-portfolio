import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-transparent rounded-full -mr-32 -mt-16 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-transparent rounded-full -ml-40 -mb-20 opacity-50"></div>

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
          <Link href="/services">
            <motion.div 
              className="mt-6 md:mt-0 px-6 py-3 bg-[#FF5E15] text-white rounded hover:bg-[#e65513] transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL SERVICES
            </motion.div>
          </Link>
        </motion.div>

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Service Cards */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Service Card 1 - Orange */}
            <motion.div 
              className="relative bg-[#FFF4E8] p-8 rounded-lg shadow-md border-l-4 border-[#FF5E15] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#FF5E15] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#FFE0C4] group-hover:text-[#FF5E15] transition-colors">
                  01
                </div>
              </div>
            </motion.div>

            {/* Service Card 2 - Green */}
            <motion.div 
              className="relative bg-[#E8F5E9] p-8 rounded-lg shadow-md border-l-4 border-[#4CAF50] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#4CAF50] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#C8E6C9] group-hover:text-[#4CAF50] transition-colors">
                  02
                </div>
              </div>
            </motion.div>

            {/* Service Card 3 - Purple */}
            <motion.div 
              className="relative bg-[#F3E5F5] p-8 rounded-lg shadow-md border-l-4 border-[#9C27B0] group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="w-14 h-14 rounded-full bg-[#9C27B0] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">AI Agent Automation</h3>
                  <p className="text-gray-600 mb-4">
                   Créer des agents intelligents capables d'automatiser des processus complexes.
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
                <div className="absolute top-0 right-0 mt-6 mr-8 text-5xl font-bold text-[#E1BEE7] group-hover:text-[#9C27B0] transition-colors">
                  03
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Creative Design Illustrations */}
          <div className="w-full lg:w-2/5 space-y-6">
            {/* Backend Development - Creative Design */}
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg h-60 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E15] to-[#FF9D6C] opacity-90"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
              
              {/* Code-like Elements */}
              <div className="absolute top-4 left-4 right-4 h-8 bg-black/20 rounded flex items-center px-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
                <h3 className="font-mono text-white text-4xl font-bold mb-2 tracking-tighter">
                  <span className="opacity-70">{"<"}</span>
                  Backend
                  <span className="opacity-70">{"/>"}</span>
                </h3>
                <p className="text-white/80 font-mono text-sm tracking-tight mb-4 text-center">
                  Node.js • TypeScript • API • MongoDB
                </p>
                <div className="relative">
                  {/* Server Icon */}
                  <div className="w-16 h-16 border-2 border-white/50 rounded-lg flex items-center justify-center mx-auto">
                    <div className="w-10 h-2 bg-white/70 rounded-full mb-1"></div>
                    <div className="w-10 h-2 bg-white/70 rounded-full"></div>
                  </div>
                  {/* Connection Lines */}
                  <div className="absolute top-full left-1/2 w-0.5 h-6 bg-white/50"></div>
                </div>
              </div>
              
              {/* Animation dots */}
              <motion.div 
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>
            
            {/* CI/CD Automations - Creative Design */}
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg h-64 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#81C784] opacity-90"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
                <h3 className="font-mono text-white text-4xl font-bold mb-2 tracking-tighter">CI/CD</h3>
                
                {/* Pipeline Flow Animation */}
                <div className="relative w-48 h-20 mb-3">
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 -translate-y-1/2"></div>
                  
                  {/* Nodes with Animation */}
                  <motion.div 
                    className="absolute top-1/2 left-0 w-6 h-6 rounded-full bg-white -translate-y-1/2 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0px white", "0 0 10px white", "0 0 0px white"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <span className="text-green-600 font-bold text-xs">1</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0px white", "0 0 10px white", "0 0 0px white"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className="text-green-600 font-bold text-xs">2</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0px white", "0 0 10px white", "0 0 0px white"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-green-600 font-bold text-xs">3</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-3/4 w-6 h-6 rounded-full bg-white -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0px white", "0 0 10px white", "0 0 0px white"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  >
                    <span className="text-green-600 font-bold text-xs">4</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 right-0 w-6 h-6 rounded-full bg-white -translate-y-1/2 flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0px white", "0 0 10px white", "0 0 0px white"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  >
                    <span className="text-green-600 font-bold text-xs">5</span>
                  </motion.div>
                  
                  {/* Moving Dot */}
                  <motion.div 
                    className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-white/80 -translate-y-1/2"
                    animate={{ 
                      left: ["0%", "100%"],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>
                
                <p className="text-white/80 font-mono text-sm tracking-tight text-center">
                  Pipelines • GitHub Actions • Docker • K8s
                </p>
              </div>
            </motion.div>
            
            {/* AI Agent Automation - Creative Design */}
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg h-56 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9C27B0] to-[#BA68C8] opacity-90"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10">
                <h3 className="font-mono text-white text-4xl font-bold mb-4 tracking-tighter">
                  <span className="opacity-70">AI</span>•Agent
                </h3>
                
                {/* Brain Network Visualization */}
                <div className="relative w-40 h-20 mb-2">
                  {/* Nodes */}
                  <motion.div 
                    className="absolute w-4 h-4 bg-white rounded-full"
                    style={{ left: '20%', top: '10%' }}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.8)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-3 h-3 bg-white/80 rounded-full"
                    style={{ left: '65%', top: '15%' }}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.8)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-5 h-5 bg-white rounded-full"
                    style={{ left: '45%', top: '40%' }}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0.8)", "0 0 10px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.8)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-3 h-3 bg-white/80 rounded-full"
                    style={{ left: '10%', top: '65%' }}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.8)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.1 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute w-4 h-4 bg-white/90 rounded-full"
                    style={{ left: '75%', top: '70%' }}
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0.8)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>
                  
                  {/* Connection Lines */}
                  <div className="absolute w-px h-14 bg-white/30" style={{ left: '21%', top: '11%', transform: 'rotate(60deg)' }}></div>
                  <div className="absolute w-px h-24 bg-white/30" style={{ left: '46%', top: '15%', transform: 'rotate(105deg)' }}></div>
                  <div className="absolute w-px h-16 bg-white/30" style={{ left: '46%', top: '42%', transform: 'rotate(150deg)' }}></div>
                  <div className="absolute w-px h-30 bg-white/30" style={{ left: '47%', top: '42%', transform: 'rotate(30deg)' }}></div>
                </div>
                
                <p className="text-white/80 font-mono text-sm tracking-tight text-center">
                  LangChain • LLMs • n8n • Agents
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;