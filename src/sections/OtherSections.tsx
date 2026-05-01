import { motion } from 'motion/react';
import {
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Award,
  Medal,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { Section, SectionHeading, GlassCard, StaggerContainer, staggerItem } from '../components/Common';
import { experience, education, achievements, socialLinks } from '../constants';

// ── About ──────────────────────────────────────────────────────
export const About = () => (
  <Section id="about">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="About Me" />
        <div className="space-y-5 text-gray-400 text-[16px] leading-[1.8]">
          <p>
            I'm an{' '}
            <span className="text-white font-medium">
              AI & Data Science student and builder
            </span>{' '}
            who loves solving real-world problems using intelligent systems.
          </p>
          <p>
            My focus is on{' '}
            <span className="text-brand-purple-light font-medium">
              LLMs, NLP, and scalable full-stack applications
            </span>
            . I enjoy turning ideas into impactful products that actually help
            people.
          </p>

          <motion.a
            href="/Siddharth_s_Resume (2).pdf"
            download="Siddharth_Tripathi_Resume.pdf"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass border border-white/[0.06] text-white font-semibold hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 mt-3"
            id="about-download-resume"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <GlassCard className="border-brand-purple/[0.1] relative overflow-hidden">
          {/* Card glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-[60px] -z-10" />

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-light flex items-center justify-center text-white shadow-lg shadow-brand-purple/20">
              <Briefcase size={22} />
            </div>
            <div>
              <h4 className="text-white font-display font-bold text-lg">
                Current Status
              </h4>
              <p className="text-gray-500 text-sm">Open to Internships / Roles</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { value: '4+', label: 'Core Specializations', sub: 'AI, Full-Stack, NLP, Backend' },
              { value: '10+', label: 'Projects Completed', sub: 'From MVPs to Production Tools' },
              { value: '85%+', label: 'ML Model Accuracy', sub: 'Query Classification System' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex gap-5 items-start group"
              >
                <div className="text-3xl font-display font-bold text-gradient min-w-[3.5rem]">
                  {stat.value}
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px]">{stat.label}</p>
                  <p className="text-gray-500 text-sm">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </Section>
);

// ── Experience ─────────────────────────────────────────────────
export const Experience = () => (
  <Section id="experience">
    <SectionHeading title="Experience" />

    <div className="space-y-8 max-w-4xl">
      {experience.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="relative pl-8 border-l-2 border-white/[0.06] pb-4 group"
        >
          {/* Timeline dot */}
          <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-brand-purple ring-4 ring-brand-bg">
            <div className="absolute inset-0 rounded-full bg-brand-purple animate-ping opacity-25" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                {exp.role}
              </h3>
              <p className="text-brand-purple-light font-semibold text-lg">
                {exp.company}
              </p>
            </div>
            <span className="px-4 py-1.5 rounded-full glass border-0 text-xs text-gray-400 font-semibold tracking-wide whitespace-nowrap">
              {exp.period}
            </span>
          </div>

          <ul className="space-y-3">
            {exp.points.map((point, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + j * 0.05 }}
                className="flex gap-3 text-gray-400 text-[15px] leading-relaxed"
              >
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-purple/60 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

// ── Education + Achievements ───────────────────────────────────
const achievementIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
};

export const ExtraSections = () => (
  <Section>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Education */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shadow-lg shadow-brand-purple/20">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Academic Background
          </h2>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <GlassCard key={edu.degree}>
              <h4 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h4>
              <p className="text-brand-purple-light font-semibold mb-3">
                {edu.school}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">{edu.period}</span>
                <span className="px-3 py-1.5 rounded-lg bg-brand-purple/[0.08] border border-brand-purple/20 text-brand-purple-light font-semibold text-xs">
                  {edu.score}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shadow-lg shadow-brand-purple/20">
            <Trophy size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Awards & Certifications
          </h2>
        </div>
        <StaggerContainer className="space-y-4">
          {achievements.map((item, i) => {
            const Icon = achievementIcons[item.icon] || Trophy;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="p-5 rounded-2xl glass border-0 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-4 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-purple/[0.08] flex items-center justify-center text-brand-purple group-hover:bg-gradient-to-br group-hover:from-brand-purple group-hover:to-brand-purple-light group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Icon size={20} />
                </div>
                <span className="text-gray-300 font-medium text-[15px]">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  </Section>
);

// ── Contact ────────────────────────────────────────────────────
export const Contact = () => (
  <Section id="contact">
    <SectionHeading
      title="Let's build something great"
      subtitle="Have a project in mind or want to collaborate? Let's connect and make it happen."
      center
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left - Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Profile card */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-purple/30 shadow-xl shadow-brand-purple/10">
              <img
                src="/profile.jpg"
                alt="Siddharth Tripathi"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-400 rounded-full border-[3px] border-brand-bg shadow-sm shadow-green-400/30" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Siddharth Tripathi
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              AI Engineer & Full-Stack Developer
            </p>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/[0.08] border border-green-500/20 text-green-400 text-[11px] font-semibold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Available for work
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-3">
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl glass border-0 hover:bg-white/[0.05] transition-all duration-300 group"
            id="contact-email-link"
          >
            <div className="p-3 rounded-xl bg-brand-purple/[0.08] text-brand-purple group-hover:bg-gradient-to-br group-hover:from-brand-purple group-hover:to-brand-purple-light group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Email
              </p>
              <p className="text-white font-medium text-sm truncate">
                {socialLinks.email}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-600 group-hover:text-white transition-colors flex-shrink-0"
            />
          </a>

          <div className="flex items-center gap-4 p-5 rounded-2xl glass border-0">
            <div className="p-3 rounded-xl bg-brand-purple/[0.08] text-brand-purple">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Location
              </p>
              <p className="text-white font-medium text-sm">
                Nashik, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlassCard className="relative overflow-hidden" hover={false}>
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
            id="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-gray-600 focus:border-brand-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-gray-600 focus:border-brand-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300 text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-gray-600 focus:border-brand-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-brand-purple/20 transition-all duration-300 resize-none text-sm"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-display font-bold text-base shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/30 flex items-center justify-center gap-2.5 group transition-shadow duration-300"
              id="contact-submit"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </motion.button>
          </form>

          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/[0.05] blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-purple-light/[0.03] blur-[60px] -z-10" />
        </GlassCard>
      </motion.div>
    </div>
  </Section>
);
