import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Server, Brain, Globe, Zap } from 'lucide-react';
import { Section, SectionHeading, StaggerContainer, staggerItem } from '../components/Common';
import { skills, techStack } from '../constants';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  server: Server,
  brain: Brain,
  globe: Globe,
  zap: Zap,
};

export const Skills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="skills">
      <SectionHeading
        title="Areas of Expertise"
        subtitle="Specialized domains where I bridge the gap between complex algorithms and intuitive user experiences."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Accordion */}
        <StaggerContainer className="space-y-3">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Brain;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={skill.title}
                variants={staggerItem}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 rounded-2xl transition-all duration-400 border ${
                    isOpen
                      ? 'bg-brand-purple/[0.08] border-brand-purple/20'
                      : 'bg-white/[0.02] border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.04]'
                  }`}
                  aria-expanded={isOpen}
                  id={`skill-accordion-${index}`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shadow-lg shadow-brand-purple/25'
                          : 'bg-white/[0.04] text-gray-500 group-hover:text-brand-purple'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className={`text-lg font-display font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                      }`}
                    >
                      {skill.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isOpen ? 'text-brand-purple' : 'text-gray-600'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 text-gray-400 bg-white/[0.01] rounded-b-2xl border-x border-b border-white/[0.04]">
                        <p className="mb-5 leading-relaxed text-[15px]">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.skills.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/[0.06] hover:border-brand-purple/30 hover:text-brand-purple-light transition-all duration-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/[0.06] blur-[80px] -z-10" />
            
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Technologies I Use
            </h3>
            <p className="text-gray-500 text-sm mb-8">Tools and frameworks in my daily workflow</p>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/[0.04] transition-all duration-300 cursor-default group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center overflow-hidden p-2.5 group-hover:border-brand-purple/20 group-hover:bg-brand-purple/[0.06] transition-all duration-300">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-${
                        tech.icon === 'firebase' || tech.icon === 'scikitlearn' ? 'plain' : 'original'
                      }.svg`}
                      alt={tech.name}
                      className="w-full h-full grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${tech.name}&backgroundColor=8b5cf6`;
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 group-hover:text-gray-300 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
