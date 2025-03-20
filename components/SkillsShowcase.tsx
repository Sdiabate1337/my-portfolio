import { motion, Variants } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

interface Skill {
  icon: React.ReactNode;
  text: string;
}

interface SkillsShowcaseProps {
  itemVariants: Variants;
  skills: Skill[];
  activeSkillIndex: number | null;
  setActiveSkillIndex: Dispatch<SetStateAction<number | null>>;
  skillPillVariants: Variants;
}

const SkillsShowcase = ({
  itemVariants,
  skills,
  activeSkillIndex,
  setActiveSkillIndex,
  skillPillVariants
}: SkillsShowcaseProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="skills-showcase absolute -bottom-6 right-0 md:bottom-0 md:right-0 z-10 perspective"
    >
      <div className="flex flex-wrap gap-2 md:gap-3 justify-end">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={skillPillVariants}
            whileHover="hover"
            whileTap="tap"
            className={`skill-pill flex items-center px-3 py-1.5 rounded-full border text-sm font-medium transition-all ${
              activeSkillIndex === index
                ? "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 shadow-md"
                : "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200"
            }`}
            onHoverStart={() => setActiveSkillIndex(index)}
            onHoverEnd={() => setActiveSkillIndex(null)}
            role="button"
            aria-pressed={activeSkillIndex === index}
          >
            <span className="mr-1.5 text-[#3B82F6]">{skill.icon}</span>
            <span>{skill.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;