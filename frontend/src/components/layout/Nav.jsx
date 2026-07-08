import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About',    id: 'about' },
  { name: 'Skills',   id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact',  id: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'bg-card/80 backdrop-blur-xl border border-border/60 shadow-2xl'
              : 'bg-card/40 backdrop-blur-md border border-border/30'
          }`}
        >
          <button
            onClick={() => scrollTo('hero')}
            className="font-display text-xl font-semibold italic text-foreground hover:text-primary transition-colors focus:outline-none"
          >
            AB.
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 text-sm font-medium text-muted-fg hover:text-foreground rounded-full hover:bg-white/5 transition-all focus:outline-none tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center px-5 py-2 rounded-full bg-primary text-primary-fg text-sm font-medium tracking-wide hover:opacity-90 transition-all focus:outline-none"
          >
            Say hello
          </button>

          <button
            className="md:hidden text-foreground p-1 focus:outline-none"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-2xl font-semibold italic text-foreground">AB.</span>
              <button onClick={() => setMobileOpen(false)} className="text-foreground p-2 focus:outline-none" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-4xl font-display font-light text-left text-foreground/60 hover:text-foreground transition-colors py-3 border-b border-border/30 focus:outline-none"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-4 rounded-full bg-primary text-primary-fg font-medium text-lg tracking-wide hover:opacity-90 transition-all focus:outline-none"
              >
                Say hello
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}