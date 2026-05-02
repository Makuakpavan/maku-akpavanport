import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export function ProjectsSection({ data }) {
  const LiveIcon = data.links.live
  const RepoIcon = data.links.repo

  return (
    <section id="projects">
      <SectionTitle
        eyebrow="Portfolio Work"
        title={data.title}
        description="Each project demonstrates UI quality, code organization, and practical product thinking."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {data.items.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-panel flex flex-col p-6"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((stackItem) => (
                <li
                  key={stackItem}
                  className="rounded-full border border-violet-400/35 bg-violet-500/10 px-3 py-1 text-xs text-violet-700 dark:text-violet-200"
                >
                  {stackItem}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="btn-secondary inline-flex items-center gap-2" href={project.liveUrl} target="_blank" rel="noreferrer">
                <LiveIcon />
                Live Demo
              </a>
              <a className="btn-secondary inline-flex items-center gap-2" href={project.githubUrl} target="_blank" rel="noreferrer">
                <RepoIcon />
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
