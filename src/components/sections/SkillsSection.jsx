import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export function SkillsSection({ data }) {
  return (
    <section id="skills">
      <SectionTitle eyebrow="Expertise" title={data.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass-panel p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="inline-flex items-center gap-2 text-base font-semibold">
                  <Icon className="text-xl text-violet-600 dark:text-violet-300" />
                  {skill.name}
                </p>
                <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
