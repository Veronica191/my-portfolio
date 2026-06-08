import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Modern front-end skills and tools
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">{group.category}</p>
              </div>
              <div className="grid gap-4">
                {group.items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-base font-medium text-slate-900">{skill.name}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
