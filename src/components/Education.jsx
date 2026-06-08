import { motion } from 'framer-motion'

const educationTimeline = [
  {
    institution: 'Central University, Ghana',
    program: 'Bachelor of Science in Computer Science',
    date: '2024 - Expected 2028',
    description:
      'Focused on software engineering principles, data structures, algorithms, and modern web development practices.',
  },
  {
    institution: 'African Science Academy (ASA)',
    program: 'A levels in Mathematics, Physics, and pure Mathematics',
    date: '2023 - 2024 ',
    description:
      'Intensive 10 month program covering advanced topics in mathematics and physics, preparing for university-level education for African Girls in STEM.',
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Education</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Academic timeline and learning journey
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-sky-100" />
          <div className="space-y-10">
            {educationTimeline.map((item) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="absolute left-[-0.75rem] top-10 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg">
                  ✓
                </span>
                <div className="pl-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.program}</h3>
                  <p className="mt-2 text-base text-slate-600">{item.institution}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
