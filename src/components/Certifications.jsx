import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'ALX Frontend Development',
    issuer: 'ALX Africa',
    date: '2026',
    image: new URL('../assets/images/69-front-end-web-development-certificate-veronica-akwojinga (2).png', import.meta.url).href,
  },
  {
    title: 'WomenTechster Bootcamp',
    issuer: 'Tech4Dev',
    date: '2026',
    image: new URL('../assets/images/Veronica_Akwojinga_WT_Launchpad_2026_certificate (1).png', import.meta.url).href,
  },
  {
    title: 'Central Live Radio internship',
    issuer: 'Central University, Ghana',
    date: '2025',
    image: new URL('../assets/images/Veronica_cert.png', import.meta.url).href,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Certifications</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Certificates earned through learning and practice
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <img src={cert.image} alt={`${cert.title} certificate`} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{cert.issuer}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{cert.title}</h3>
                <p className="mt-4 text-sm text-slate-600">Awarded in {cert.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
