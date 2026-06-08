import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const resumeUrl = new URL('../assets/images/Veronica_Resume.pdf', import.meta.url).href
const profileImage = new URL('../assets/images/profile.jpeg', import.meta.url).href

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-80 bg-sky-100 opacity-70" />
      <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              Hello, I’m Veronica
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Hi, I'm Veronica Akwojinga
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Computer Science Student | Frontend Developer and Data Analyst student at ALX.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Passionate about building responsive web applications and continuously learning modern web technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
              >
                View Projects
              </a>
              <a
                href={resumeUrl}
                download="Veronica_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/Veronica191"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-sky-600"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/veronica-akwojinga-031269287/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-sky-600"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="mailto:veronijinga2003@gmail.com"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-sky-600"
              >
                <FaEnvelope className="h-5 w-5" />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/5 ring-1 ring-slate-200"
          >
            <div className="absolute -left-12 top-10 h-24 w-24 rounded-full bg-sky-200 blur-2xl" />
            <img
              src={profileImage}
              alt="Veronica Katugu profile"
              className="relative z-10 mx-auto h-full w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
