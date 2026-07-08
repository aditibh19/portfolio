import { motion } from 'framer-motion';

const stats = [
  { value: '12+', label: 'Projects shipped' },
  { value: '5+',  label: 'Technologies' },
  { value: 'Full',label: 'Stack coverage' },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="divider mb-28 md:mb-40" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              The person<br /><span className="italic">behind the code</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-8 space-y-6 text-muted-fg font-light leading-[1.85] text-base md:text-lg"
          >
            <p>
              I am a full-stack developer with hands-on experience building web apps, microservices,
              real-time systems, and AI-powered applications. I thrive at the intersection of
              product engineering and system design — writing code that works and that people actually want to use.
            </p>
            <p>
              I work across the entire stack — from crafting responsive React frontends to engineering
              scalable Node.js and Django backends. My foundation spans relational and NoSQL databases,
              alongside deep integrations with advanced LLMs to create intelligent, context-aware tools.
            </p>
            <p>
              Beyond web development, I'm comfortable with Java and deploying containerised architectures
              with Docker. I'm drawn to problems that are hard to get right, and I care deeply about
              the craft of building well-considered, resilient software.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl md:text-4xl font-light text-primary mb-1">{s.value}</p>
                  <p className="text-xs text-muted-fg/70 tracking-wide font-medium uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}