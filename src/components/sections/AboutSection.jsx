import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export function AboutSection({ data }) {
  return (
    <section id="about">
      <SectionTitle eyebrow="Who I Am" title={data.title} description={data.description} />
      <div className="grid gap-4 md:grid-cols-3">
        {data.highlights.map((item, index) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="glass-panel p-5"
          >
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
