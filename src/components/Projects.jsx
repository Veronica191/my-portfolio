import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Selected projects built with React
          </h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured Project</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{project.title}</h3>
                </div>
                <p className="text-base leading-7 text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-slate-900"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
