import { motion } from 'framer-motion';
import { Github, ArrowDown, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px]" style={{ background: 'rgba(212,168,83,0.06)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px]"  style={{ background: 'rgba(212,168,83,0.04)' }} />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6"
        >
          Full-Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-light leading-tight text-foreground mb-5"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.01em' }}
        >
          Aditi <span className="italic text-primary">Bhalla</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="h-px w-16 mx-auto mb-6" style={{ background: 'rgba(212,168,83,0.4)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
          className="text-sm md:text-base text-muted-fg max-w-md mx-auto leading-relaxed mb-10 font-light"
        >
          Building across the full stack — from responsive web apps and microservices to AI-powered tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-fg text-sm font-medium tracking-wide hover:opacity-90 transition-all"
          >
            View Projects
          </button>
          <a href="https://github.com/aditibh19" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-border/60 text-foreground/80 text-sm font-medium hover:text-foreground transition-all flex items-center gap-2">
            <Github size={14} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditi-bhalla-279a6b291/" target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-border/60 text-foreground/80 text-sm font-medium hover:text-foreground transition-all flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-fg/50 hover:text-muted-fg transition-colors focus:outline-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.button>
    </section>
  );
}