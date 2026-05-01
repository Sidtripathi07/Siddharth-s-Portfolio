import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { CursorGlow, BackgroundGradients, FloatingParticles } from './components/VisualEffects';
import { Hero } from './sections/Hero';
import { About, Experience, ExtraSections, Contact } from './sections/OtherSections';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { socialLinks } from './constants';

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/[0.04] relative bg-brand-bg">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start gap-4">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-purple to-brand-purple-light flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand-purple/20 group-hover:scale-105 transition-transform">
            ST
          </div>
          <span className="text-white font-display font-semibold text-lg tracking-tight">
            Siddharth<span className="text-brand-purple">.</span>
          </span>
        </a>
        <p className="text-gray-600 text-sm max-w-xs text-center md:text-left leading-relaxed">
          Designing and coding intelligent systems with a focus on impact and scalability.
        </p>
      </div>

      <div className="flex gap-8">
        {['About', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex gap-3">
        {[
          { icon: Github, href: socialLinks.github, label: 'GitHub' },
          { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
          { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noreferrer' : undefined}
            className="p-2.5 rounded-xl glass border-0 text-gray-500 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
      <p>© {new Date().getFullYear()} Siddharth Tripathi. All rights reserved.</p>
      <p className="flex items-center gap-1.5 text-gray-500">
        Built with
        <Heart size={12} className="text-red-400" />
        using React & Tailwind
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-purple/30">
      <CursorGlow />
      <BackgroundGradients />
      <FloatingParticles />

      <Navbar />

      <main>
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
          <Skills />
          <Experience />
          <Projects />
          <ExtraSections />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
