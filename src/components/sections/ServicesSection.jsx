import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export function ServicesSection({ data }) {
  return (
    <section id="services">
      <SectionTitle eyebrow="Value I Bring" title={data.title} />
      <div className="grid gap-4 sm:grid-cols-2">
        {data.items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="glass-panel flex items-center gap-3 p-5"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-600 dark:text-violet-300">
              {index + 1}
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
