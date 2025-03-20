import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';

interface PhotoMosaicProps {
  isHoveringPhoto: boolean;
  setIsHoveringPhoto: Dispatch<SetStateAction<boolean>>;
  photoMosaicVariants: Variants;
  photoItemVariants: Variants;
  floatVariants: Variants;
}

const PhotoMosaic = ({ 
  isHoveringPhoto, 
  setIsHoveringPhoto, 
  photoMosaicVariants, 
  photoItemVariants, 
  floatVariants 
}: PhotoMosaicProps) => {
  return (
    <motion.div 
      className="w-full lg:w-5/12 mb-12 lg:mb-0 relative"
      variants={photoItemVariants}
      onHoverStart={() => setIsHoveringPhoto(true)}
      onHoverEnd={() => setIsHoveringPhoto(false)}
    >
      <motion.div 
        className="photo-mosaic"
        variants={photoMosaicVariants}
      >
        {/* Main photo */}
        <div className="relative h-[500px] md:h-[580px] rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/images/diabate-se.jpeg" 
            alt="Diabate Sekou" 
            fill
            priority // Ajout de l'attribut priority
            className="object-cover"
            style={{
              transform: isHoveringPhoto ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.6s ease-out',
              objectPosition: 'center top'
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-4 right-4 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full"
            variants={floatVariants}
            animate="float"
          />
          
          <motion.div 
            className="absolute bottom-20 -right-6 w-12 h-12 bg-[#FF5E15]/20 backdrop-blur-sm rounded-full"
            variants={floatVariants}
            animate="float"
            transition={{ delay: 0.5 }}
          />
          
          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-gray-900/90 to-gray-900/0">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">Diabate Sekou</div>
                <div className="text-white/70 text-sm">Digital Architect</div>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoMosaic;