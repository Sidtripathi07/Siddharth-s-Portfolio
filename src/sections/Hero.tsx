import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { socialLinks } from '../constants';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="order-2 lg:order-1"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-purple/[0.08] border border-brand-purple/20 text-brand-purple-light text-xs font-semibold uppercase tracking-[0.15em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-extrabold text-white leading-[1.08] mb-7 tracking-tight"
          >
            Solving{' '}
            <span className="text-gradient">real world problems</span>{' '}
            that matter & create impact.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            I fuse AI, data, and code to build intelligent systems that solve real-world challenges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-semibold flex items-center gap-2.5 shadow-xl shadow-brand-purple/25 hover:shadow-brand-purple/40 transition-shadow duration-300 group"
              id="hero-view-projects"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </motion.a>
            <motion.a
              href="/Siddharth_s_Resume (2).pdf"
              download="Siddharth_Tripathi_Resume.pdf"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-2xl glass border border-white/[0.08] text-white font-semibold flex items-center gap-2.5 hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              id="hero-download-resume"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-gray-600 text-xs font-medium uppercase tracking-widest mr-2">Connect</span>
            <div className="w-8 h-[1px] bg-white/10" />
            {[
              { icon: Github, href: socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass border-0 text-gray-500 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Animated Background Rings */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none" aria-hidden="true">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] border border-brand-purple/[0.12] rounded-[40%]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] border border-brand-purple-light/[0.06] rounded-[45%]"
            />
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-purple rounded-full glow-purple" />
            </motion.div>
          </div>

          {/* Floating Profile Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            {/* Image Container with gradient border */}
            <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-brand-purple via-brand-purple-light to-brand-purple-deep">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-[calc(2rem-3px)] overflow-hidden bg-brand-bg">
                <img
                  src="/profile.jpg"
                  alt="Siddharth Tripathi"
                  className="w-full h-full object-cover object-top scale-[1.02] hover:scale-110 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
            </div>

            {/* Glow behind image */}
            <div className="absolute -inset-8 bg-brand-purple/20 blur-[80px] -z-10 rounded-full" />
            <div className="absolute -inset-4 bg-brand-purple-light/10 blur-[50px] -z-10 rounded-full" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl glass-strong border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-white text-xs font-semibold">AI Engineer</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 border border-white/10 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 bg-brand-purple rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
