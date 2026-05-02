import { useState } from 'react'
import { FiDownload, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ theme, setTheme }) {
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="glass-panel fixed left-1/2 top-3 z-50 w-[95%] max-w-6xl -translate-x-1/2 px-3 py-3 backdrop-blur-xl sm:px-6">
      <nav className="flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="text-sm font-semibold tracking-wide sm:text-base">
          &lt;{portfolioData.identity.name}/&gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          
          {/* Download CV (hide on very small screens) */}
          <a
            href={portfolioData.identity.resumeUrl}
            download
            className="btn-secondary hidden items-center gap-2 sm:flex"
          >
            <FiDownload />
            <span className="hidden lg:inline">Download CV</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="btn-icon"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="btn-icon md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 rounded-xl p-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Mobile CV Button */}
            <a
              href={portfolioData.identity.resumeUrl}
              download
              className="btn-secondary mt-2 flex items-center justify-center gap-2"
            >
              <FiDownload />
              Download CV
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}
