import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [error, setError]     = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="divider mb-28 md:mb-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-[120px] pointer-events-none rounded-full"
        style={{ background: 'rgba(212,168,83,0.06)' }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              Let's work<br /><span className="italic">together</span>
            </h2>

            {/* Social links */}
            <div className="mt-12 space-y-4">
              {[
                { href: 'mailto:bhallaaditi19@gmail.com',                   icon: Mail,    label: 'Email',    display: 'bhallaaditi19@gmail.com' },
                { href: 'https://www.linkedin.com/in/aditi-bhalla-279a6b291/', icon: Linkedin, label: 'LinkedIn', display: 'aditi-bhalla-279a6b291' },
                { href: 'https://github.com/aditibh19',                     icon: Github,  label: 'GitHub',   display: 'aditibh19' },
              ].map(({ href, icon: Icon, label, display }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center justify-between py-4 border-t border-border/40 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary/50 transition-all">
                      <Icon size={14} className="text-muted-fg group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-fg/60 tracking-wide uppercase font-medium">{label}</p>
                      <p className="text-foreground text-xs font-light group-hover:text-primary transition-colors">{display}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-fg/40 group-hover:text-primary transition-colors" />
                </a>
              ))}
              <div className="border-t border-border/40" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ delay: 0.15 }}
            className="md:col-span-8"
          >
            <p className="text-muted-fg font-light text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Open to full-time roles, freelance projects, and thoughtful collaborations.
              Drop me a message and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-fg font-medium mb-2">Name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    className="w-full bg-card border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-fg/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-fg font-medium mb-2">Email</label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required type="email"
                    placeholder="your@email.com"
                    className="w-full bg-card border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-fg/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-fg font-medium mb-2">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={6}
                  placeholder="Tell me about your project or idea…"
                  className="w-full bg-card border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-fg/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <p className="text-sm font-light" style={{ color: '#6ee7b7' }}>
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-light text-red-400">{error}</p>
              )}

              <button
                type="submit" disabled={status === 'sending'}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-fg text-sm font-medium tracking-wide hover:opacity-90 transition-all disabled:opacity-50"
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-24 pt-8 border-t border-border/30 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm font-light italic text-muted-fg/50">© {new Date().getFullYear()} Aditi Bhalla</p>
          <p className="text-xs text-muted-fg/40 tracking-wide font-light">Designed & built with care</p>
        </div>
      </div>
    </section>
  );
}