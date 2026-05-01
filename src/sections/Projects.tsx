import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Section, SectionHeading, StaggerContainer, staggerItem } from '../components/Common';
import { projects } from '../constants';

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeading
        title="Selected Projects"
        subtitle="A collection of systems where LLMs and robust backend architectures converge to solve real problems."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={staggerItem}
            className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-brand-purple/20 transition-all duration-500 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-56 md:h-64 overflow-hidden bg-brand-bg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Floating Tech Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/[0.08] text-white/80 shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Quick action buttons on hover */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-purple-light transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {project.highlight && (
                <div className="mb-5 p-3 rounded-xl bg-brand-purple/[0.06] border border-brand-purple/[0.1] flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-brand-purple" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-brand-purple animate-ping opacity-50" />
                  </div>
                  <span className="text-sm font-semibold text-brand-purple-light">
                    {project.highlight}
                  </span>
                </div>
              )}

              {/* Bottom tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl border border-white/[0.08] text-white font-semibold text-sm tracking-wide bg-white/[0.03] hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-purple-light hover:border-transparent hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                id={`project-${project.id}-view`}
              >
                View Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/btn:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Subtle hover glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-brand-purple/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        ))}
      </StaggerContainer>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="https://github.com/Sidtripathi07"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border-0 text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300 group"
          id="github-explore-cta"
        >
          <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-sm font-medium">Explore more repos on GitHub</span>
        </a>
      </motion.div>
    </Section>
  );
};
