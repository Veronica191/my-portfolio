import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
]

const resumeUrl = new URL('../assets/resume.pdf', import.meta.url).href

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 font-semibold text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-sky-500 text-white shadow-sm">
            V
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Veronica</p>
            <p className="text-sm text-slate-900">Frontend Developer</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-88}
              duration={500}
              className="cursor-pointer text-sm font-medium text-slate-600 transition hover:text-sky-600"
              activeClass="text-sky-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumeUrl}
            download="Veronica-Katugu-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-slate-900"
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-88}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-sky-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeUrl}
              download="Veronica-Katugu-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-slate-900"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
