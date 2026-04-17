import { useEffect, useMemo, useState } from 'react'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navbar,
  ParticleBackground,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
} from './components'
import { portfolioData } from './data/portfolioData'

function App() {
  const [theme, setTheme] = useState('dark')
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = storedTheme ?? (preferredDark ? 'dark' : 'light')
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <ParticleBackground />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-12 pt-28 sm:px-8 md:gap-28">
        <HeroSection data={portfolioData.hero} />
        <AboutSection data={portfolioData.about} />
        <SkillsSection data={portfolioData.skills} />
        <ProjectsSection data={portfolioData.projects} />
        <ExperienceSection data={portfolioData.journey} />
        <ServicesSection data={portfolioData.services} />
        <ContactSection data={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.identity.name} year={currentYear} />
    </div>
  )
}

export default App
