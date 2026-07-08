import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'Frontend',       skills: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'JavaScript'] },
  { title: 'Backend',        skills: ['Node.js', 'Express', 'Django', 'Python', 'Java', 'Socket.IO'] },
  { title: 'Databases',      skills: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'AI / ML',        skills: ['OpenAI API', 'Groq', 'Gemini', 'LLM integrations', 'AI pipeline design'] },
  { title: 'Tools & DevOps', skills: ['Docker', 'Git', 'GitHub', 'REST APIs', 'Microservices'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40">
      <div className="divider mb-28 md:mb-40" />
      <div className="container mx-auto px-6 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-4">Skills</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              What I work<br /><span className="italic">with</span>
            </h2>
          </div>
          <p className="text-muted-fg font-light text-sm md:text-base max-w-xs leading-relaxed">
            The languages, frameworks, and tools I reach for to build things that last.
          </p>
        </motion.div>

        <div>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid grid-cols-12 items-start gap-6 py-8 border-t border-border/40 hover:border-primary/30 transition-colors"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="font-display text-lg font-light text-muted-fg group-hover:text-foreground transition-colors italic">
                  {cat.title}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill}
                    className="px-4 py-1.5 rounded-full border border-border/60 text-foreground/80 text-sm font-light tracking-wide hover:border-primary/50 hover:text-foreground transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </div>
    </section>
  );
}