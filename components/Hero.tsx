import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaArrowRight, FaCode, FaDocker, FaGit, FaMicrochip } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Photo Mosaic with enhanced layout */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="photo-mosaic">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[450px] md:h-[500px] relative"
              >
                <div className="tile tile-large col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/images/photo1.jpg" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-transform">
                  <Image 
                    src="/images/photo2.jpg" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-transform">
                  <Image 
                    src="/images/photo3.jpg" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="tile col-span-1 row-span-1 relative rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-transform">
                  <Image 
                    src="/images/photo4.jpg" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="tile tile-wide col-span-2 row-span-1 relative rounded-xl overflow-hidden shadow-lg transform hover:translate-y-[-5px] transition-transform">
                  <Image 
                    src="/images/photo5.jpg" 
                    alt="Diabate Sekou" 
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -left-4 -bottom-4 w-8 h-8 rounded-full bg-custom-orange"></div>
                <div className="absolute -right-4 -top-4 w-20 h-1 bg-custom-orange"></div>
              </motion.div>
            </div>
          </div>

          {/* Right side - Content with improved spacing and hierarchy */}
          <div className="w-full lg:w-7/12 lg:pl-16 xl:pl-20 relative">
            {/* Services description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-sm uppercase tracking-wider text-custom-orange font-semibold mb-4">Professional Services</h2>
              <p className="text-gray-800 leading-relaxed mb-8 text-lg">
              Digital Architect @42Network(1337Benguerir) | Passionné de DevSecOps, Je conçois des architectures logicielles scalables, sécurisées et adaptées aux startups et PME, garantissant performance, fiabilité et évolution sans friction.
              </p>
              
              <Link 
                href="/portfolio" 
                className="btn-primary group"
              >
                <span>MY PORTFOLIO</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-blue mb-4 leading-tight">
                Hi, I&apos;m Diabate Sekou 
                <span className="block mt-2 text-custom-orange">Digital architect & DevSecOp</span>
              </h1>
              
              {/* Experience badge */}
              <div className="inline-flex items-center mt-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-custom-orange mr-2"></div>
                <span className="text-sm text-gray-700">Over 3 years of problem solving</span>
              </div>
            </motion.div>

            {/* Skills showcase with enhanced design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="skills-showcase absolute bottom-4 right-4 md:bottom-0 md:right-10 z-10"
            >
              <div className="bg-white/90 backdrop-blur-sm px-6 py-5 rounded-xl shadow-xl border-t border-l border-white/50">
                <div className="flex items-center justify-center mb-3">
                  <span className="bg-custom-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mr-2">
                    Skills
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-r from-custom-orange/50 to-transparent"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mb-3">
                  <SkillPill icon={<FaCode className="mr-1" />} text="C/C++" />
                  <SkillPill icon={<FaCode className="mr-1" />} text="TypeScript" />
                  <SkillPill icon={<FaDocker className="mr-1" />} text="Docker" />
                  <SkillPill icon={<FaGit className="mr-1" />} text="Git" />
                  <SkillPill icon={<FaMicrochip className="mr-1" />} text="Microservices" />
                </div>
                
                <div className="flex items-center justify-center text-xs text-gray-500 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-custom-orange h-3 w-3" />
                    ))}
                  </div>
                  <span className="ml-2">Professional proficiency</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill pill component
interface SkillPillProps {
  icon: React.ReactNode;
  text: string;
}

const SkillPill = ({ icon, text }: SkillPillProps) => (
  <div className="skill-pill flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-800 font-medium hover:shadow-md transition-all transform hover:-translate-y-0.5">
    {icon}
    {text}
  </div>
);

export default Hero;
