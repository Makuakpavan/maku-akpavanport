import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-violet-500 dark:text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
