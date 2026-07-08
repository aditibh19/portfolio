import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, X } from 'lucide-react';
import axios from 'axios';

const placeholderGradients = [
  'linear-gradient(135deg, #1a1208, #2a1f0a)',
  'linear-gradient(135deg, #0a0f1a, #0f1a2a)',
  'linear-gradient(135deg, #0f1a0a, #1a2a0f)',
  'linear-gradient(135deg, #1a0a0f, #2a0f1a)',
  'linear-gradient(135deg, #0a1a1a, #0f2a2a)',
  'linear-gradient(135deg, #1a0f0a, #2a1a0f)',
  'linear-gradient(135deg, #0f0a1a, #1a0f2a)',
  'linear-gradient(135deg, #1a1a0a, #2a2a0f)',
];

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.35) }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className="group flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
      style={{ boxShadow: 'none' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: '#1C170F' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: placeholderGradients[index % placeholderGradients.length] }}
          >
            <span className="font-display text-2xl font-light italic text-center px-4" style={{ color: 'rgba(212,168,83,0.35)' }}>
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-light text-foreground group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>
          <ArrowUpRight size={15} className="text-muted-fg/30 group-hover:text-primary transition-all flex-shrink-0 mt-0.5" />
        </div>

        <p className="text-muted-fg text-xs font-light leading-relaxed flex-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded-full border border-border/50 text-muted-fg/60 text-[10px] font-light tracking-wide">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-0.5 rounded-full border border-border/50 text-muted-fg/40 text-[10px] font-light">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-border/30 mt-auto">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-fg hover:text-foreground transition-colors">
            <Github size={12} /> Code
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-muted-fg hover:text-primary transition-colors">
              <ArrowUpRight size={12} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(19,16,10,0.85)', backdropFilter: 'blur(16px' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-card border border-border/60 rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.6)' }}
      >
        {/* Close button */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-fg hover:text-foreground transition-colors focus:outline-none"
          style={{ background: 'rgba(19,16,10,0.7)', backdropFilter: 'blur(8px)' }}>
          <X size={14} />
        </button>

        {/* Image */}
        <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#1C170F' }}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1a1208, #2a1f0a)' }}>
              <span className="font-display text-3xl font-light italic" style={{ color: 'rgba(212,168,83,0.4)' }}>
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 space-y-5">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">{project.title}</h3>
            <p className="text-muted-fg font-light leading-relaxed">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-border/60 text-muted-fg/80 text-xs font-light tracking-wide">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-border/40">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 text-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-all">
              <Github size={14} /> View Code
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-fg text-sm font-medium hover:opacity-90 transition-all">
                <ArrowUpRight size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-28 md:py-40">
      <div className="divider mb-28 md:mb-40" />
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              Selected<br /><span className="italic">projects</span>
            </h2>
          </div>
          <p className="text-muted-fg font-light text-sm md:text-base max-w-xs leading-relaxed">
            Click any project to see full details.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-muted-fg font-light text-sm py-12 text-center">Loading projects…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} onClick={() => setSelected(project)} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}