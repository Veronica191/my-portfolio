import { motion } from 'framer-motion'

const profileImage = new URL('../assets/images/WhatsApp Image 2026-06-06 at 14.46.56.jpeg', import.meta.url).href

const infoCards = [
  { title: 'Degree Program', value: 'Bachelor of Science in Computer Science' },
  { title: 'Current Focus', value: 'Frontend Development & UI Design' },
  { title: 'Learning Goal', value: 'Build polished web applications with React' },
  { title: 'Location', value: 'Ghana, Accra' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A focused learner building web experiences
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl shadow-slate-950/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_35%)]" />
            <img
              src={profileImage}
              alt="Veronica Akwojinga profile"
              className="relative rounded-[1.5rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              I am a Computer Science student and frontend developer passionate about crafting responsive,
              accessible, and elegant user interfaces. My learning journey includes frontend development training
              through ALX, and I enjoy exploring modern React workflows, animations, and performance-focused UI.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-3 text-base font-medium text-slate-900">{card.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
