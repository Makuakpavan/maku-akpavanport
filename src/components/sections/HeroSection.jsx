import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'

export function HeroSection({ data }) {
  return (
    <section id="hero" className="grid items-center gap-10 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 inline-flex rounded-full border border-violet-400/50 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-200">
          {data.badge}
        </p>
        <h1 className="text-balance text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl">
          {data.title}
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300">{data.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={data.ctaPrimary.href} className="btn-primary">
            {data.ctaPrimary.label}
          </a>
          <a href={data.ctaSecondary.href} className="btn-secondary">
            {data.ctaSecondary.label}
          </a>
          <a href={portfolioData.identity.resumeUrl} className="btn-secondary inline-flex items-center gap-2" download>
            <FiDownload />
            Download CV
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-panel relative p-7"
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">Recruiter Snapshot</p>
        <ul className="mt-6 grid gap-4">
          {data.stats.map((stat) => (
            <li key={stat.label} className="rounded-xl bg-white/50 p-4 dark:bg-slate-900/50">
              <p className="text-3xl font-black text-violet-600 dark:text-violet-300">{stat.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
