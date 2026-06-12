import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Veronica Akwojinga</p>
          <p className="mt-2 text-sm text-slate-400">© {new Date().getFullYear()} Veronica Kat. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-88}
              duration={500}
              className="cursor-pointer text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
