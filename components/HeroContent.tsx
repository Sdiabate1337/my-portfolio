import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface HeroContentProps {
  itemVariants: Variants;
  textRevealVariants: Variants;
  nameText: string;
  titleText: string;
  nameLetterVariants: Variants; // Retiré le ? pour le rendre obligatoire
  prefersReducedMotion?: boolean; // Ajout de cette propriété
}

const HeroContent = ({ 
  itemVariants, 
  textRevealVariants, 
  nameText, 
  titleText,
  nameLetterVariants,
  prefersReducedMotion = false
}: HeroContentProps) => {
  return (
    <>
      {/* Services description with enhanced animation */}
      <motion.div 
        variants={itemVariants}
        className="mb-8 relative"
      >
        <div className="inline-block px-4 py-2 bg-[#E9F0FF] rounded-full text-sm text-[#3B82F6] font-semibold mb-4">
          Digital Architect • DevSecOp
        </div>
      </motion.div>

      {/* Main heading with letter animation */}
      <motion.div
        variants={itemVariants}
        className="relative z-10 mb-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <span className="block text-custom-blue">
            Bonjour, je suis{" "} {/* Changé en français pour cohérence */}
            <span className="relative inline-block">
              {nameText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={nameLetterVariants}
                  className="inline-block"
                  aria-hidden="true" // Pour l'accessibilité, le texte complet est déjà lisible
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <span className="sr-only">{nameText}</span> {/* Version accessible pour les lecteurs d'écran */}
            </span>
          </span>
          <span className="block mt-2 text-[#FF5E15] text-stroke-sm">
            {titleText}
          </span>
        </h1>
        
        <motion.p 
          className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl"
          variants={textRevealVariants}
        >
          Je crée des <strong>architectures scalables</strong> et{" "}
          <strong>sécurisées</strong> pour des applications complexes, en
          utilisant les dernières technologies et les meilleures pratiques.
        </motion.p>
        
        <motion.div 
          variants={textRevealVariants}
          className="flex flex-wrap gap-3"
        >
          <Link href="/contact" aria-label="Me contacter">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-custom-blue text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              role="button"
            >
              Me contacter
              <FaArrowRight className="ml-2" aria-hidden="true" />
            </motion.div>
          </Link>
          
          <Link href="/about" aria-label="En savoir plus">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-all"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              role="button"
            >
              En savoir plus
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;