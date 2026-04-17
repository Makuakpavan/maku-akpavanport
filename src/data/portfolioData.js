import {
  FaCss3Alt,
  FaExternalLinkAlt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from 'react-icons/fa'
import { SiFramer, SiRedux, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'

export const portfolioData = {
  identity: {
    name: 'Akpavan Maku Paul',
    role: 'React Frontend Engineer',
    email: 'makuakpavan021@mail.com',
    location: 'Remote / Worldwide',
    resumeUrl: '/resume.pdf',
  },
  hero: {
    badge: 'Open to Frontend Roles',
    title: 'Frontend Developer Crafting Beautiful & High-Performance Web Experiences',
    subtitle:
      'I design and ship polished React interfaces that boost engagement, improve performance, and make products feel premium from first click.',
    ctaPrimary: { label: 'View Projects', href: '#projects' },
    ctaSecondary: { label: 'Contact Me', href: '#contact' },
    stats: [
      { label: 'Production Projects', value: '12+' },
      { label: 'Lighthouse Performance', value: '95+' },
      { label: 'Years Learning & Building', value: '3+' },
    ],
  },
  about: {
    title: 'About Me',
    description:
      'I am AKPAVAN MAKU PAUL, a frontend-focused developer with a product mindset. My journey started with static pages and evolved into shipping full-featured React applications with API integrations, reusable component systems, and thoughtful UX. I thrive in team environments where clean code, fast iteration, and customer impact matter.',
    highlights: [
      'Strong foundation in modern React ecosystem and component architecture',
      'Comfortable collaborating with designers, backend teams, and product managers',
      'Focused on accessibility, maintainability, and measurable performance improvements',
    ],
  },
  skills: {
    title: 'Tech Stack & Skills',
    items: [
      { name: 'React', icon: FaReact, level: 92 },
      { name: 'JavaScript', icon: FaJsSquare, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 82 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 92 },
      { name: 'Redux', icon: SiRedux, level: 75 },
      { name: 'Framer Motion', icon: SiFramer, level: 78 },
      { name: 'Node.js APIs', icon: FaNodeJs, level: 70 },
      { name: 'Git & GitHub', icon: FaGitAlt, level: 88 },
      { name: 'Vite', icon: SiVite, level: 84 },
      { name: 'Figma to Code', icon: FaFigma, level: 86 },
    ],
  },
  projects: {
    title: 'Featured Projects',
    items: [
      {
        name: 'Ai Analytics marketing Dashboard',
        description:
          'A modern, high-performance marketing analytics platform built with Next.js 15, TypeScript, and Vanilla CSS. This dashboard provides real-time insights into marketing campaigns, audience demographics, and AI-driven growth opportunities.',
        stack: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
        liveUrl: 'https://marketinganalyticsapp.vercel.app',
        githubUrl: 'https://github.com/Makuakpavan/Marketinganalyticsapp.git',
      },
      {
        name: 'Automobile Sale site ',
        description:
          'A modern, responsive car dealer website to browse inventory, explore vehicle details, and connect with our sales team.',
        stack: ['React', 'TypeScript',],
        liveUrl: 'https://carapp-phi.vercel.app',
        githubUrl: 'https://github.com/Makuakpavan/carapp.git',
      },
      {
        name: 'Expense Tracker(personal ledger)',
        description:
          'Personal productivity app to manage job applications with Kanban board interactions and clean UI micro-interactions.',
        stack: ['React', 'Framer Motion', 'Firebase', 'Tailwind'],
        liveUrl: 'https://personal-ledger-sigma.vercel.app/',
        githubUrl: 'https://github.com/Makuakpavan/personal-ledger.git',
      },
      {
        name: 'Crypto Dashoard',
        description:
          'Personal productivity app to manage job applications with Kanban board interactions and clean UI micro-interactions.',
        stack: ['React', 'Vite', 'API' , 'Tailwind'],
        liveUrl: 'https://cryptodash-sand.vercel.app/',
        githubUrl: 'https://github.com/Makuakpavan/Cryptodash.git',
      },
      {
        name: 'Weather app',
        description:
          'Personal productivity app to manage job applications with Kanban board interactions and clean UI micro-interactions.',
        stack: ['React', 'Vite', 'API' , 'Tailwind'],
        liveUrl: 'https://weatherapp-khaki-pi.vercel.app/',
        githubUrl: 'https://github.com/Makuakpavan/weatherapp.git',
      },
      {
        name: 'Structural Porfolio website',
        description:
          'Personal productivity app to manage job applications with Kanban board interactions and clean UI micro-interactions.',
        stack: ['React', 'Vite', 'Tailwind'],
        liveUrl: 'https://structuralportfolio.vercel.app/',
        githubUrl: 'https://github.com/Makuakpavan/Structuralportfolio.git',
      },
    ],
    links: {
      live: FaExternalLinkAlt,
      repo: FaGithub,
    },
  },
  journey: {
    title: 'Experience & Learning Journey',
    timeline: [
      {
        period: '2023',
        title: 'Frontend Fundamentals',
        description:
          'Built 20+ UI components and landing pages while mastering responsive layouts, accessibility basics, and semantic HTML.',
      },
      {
        period: '2024',
        title: 'React Projects & APIs',
        description:
          'Shipped practical React applications with routing, state management, and REST integrations while improving code structure.',
      },
      {
        period: '2025',
        title: 'Production Readiness',
        description:
          'Focused on performance optimization, testing workflows, reusable design systems, and collaboration in agile delivery.',
      },
      {
        period: 'Now',
        title: 'Hiring-Ready Frontend Engineer',
        description:
          'Actively seeking frontend opportunities where product quality, velocity, and team impact are core priorities.',
      },
    ],
  },
  services: {
    title: 'What I Can Build',
    items: [
      'High-converting landing pages for startups and products',
      'SaaS dashboards with reusable design systems',
      'Interactive web apps with API integration',
      'Performance and UX improvements for existing React products',
    ],
  },
  contact: {
    title: 'Let Us Build Something Great',
    intro:
      'I am available for frontend roles and freelance collaborations. Send me a message and I will get back within 24 hours.',
    social: [
      { label: 'GitHub', href: 'https://github.com/Makuakpavan', icon: FaGithub },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/maku-akpavan-5b2b30315', icon: FaLinkedin },
      { label: 'Twitter', href: 'https://twitter.com', icon: FaTwitter },
    ],
  },
}
