import { portfolioData } from '../../data/portfolioData'

export function Footer({ name, year }) {
  return (
    <footer className="mx-auto mt-8 w-full max-w-6xl px-5 pb-10 sm:px-8">
      <div className="glass-panel flex flex-col gap-2 px-5 py-4 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>{name} - React Frontend Engineer</p>
        <p>
          {portfolioData.identity.location} - {portfolioData.identity.email}
        </p>
        <p>{year} All Rights Reserved.</p>
      </div>
    </footer>
  )
}
