import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export function ExperienceSection({ data }) {
  return (
    <section id="journey">
      <SectionTitle eyebrow="Growth Path" title={data.title} />
      <div className="relative ml-3 border-l border-violet-500/30 pl-7">
        {data.timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel mb-5 p-5"
          >
            <span className="absolute -left-3.5 mt-1.5 h-4 w-4 rounded-full border border-violet-500 bg-violet-300 dark:bg-violet-600" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{item.period}</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
