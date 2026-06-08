import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Let&apos;s build something together
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-slate-950">Contact information</p>
            <p className="mt-4 text-slate-600">
              Reach out for collaborations or internship opportunities related to frontend development and software engineering.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="space-y-1 rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Email</p>
                <a href="mailto:veronijinga2003@gmail.com" className="text-sky-600 hover:underline">
                  veronijinga2003@gmail.com
                </a>
              </div>
              <div className="space-y-1 rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">GitHub</p>
                <a href="https://github.com/Veronica191" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                  github.com/Veronica191
                </a>
              </div>
              <div className="space-y-1 rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">LinkedIn</p>
                <a href="https://www.linkedin.com/in/veronica-akwojinga-031269287/" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                  linkedin.com/in/veronica-akwojinga-031269287/
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-slate-600">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium transition hover:border-sky-200 hover:text-sky-700"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium transition hover:border-sky-200 hover:text-sky-700"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:veronica.katugu@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium transition hover:border-sky-200 hover:text-sky-700"
              >
                <FaEnvelope className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            noValidate
          >
            {submitted && (
              <div className="mb-6 rounded-3xl border border-sky-200 bg-sky-50 p-4 text-sm text-slate-900">
                Thank you! Your message has been received and I will contact you soon.
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-sm text-rose-600">{errors.name}</p>}
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                  placeholder="Your email"
                />
                {errors.email && <p className="text-sm text-rose-600">{errors.email}</p>}
              </label>
            </div>
            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-700">
              Subject
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                placeholder="Project subject"
              />
              {errors.subject && <p className="text-sm text-rose-600">{errors.subject}</p>}
            </label>
            <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                placeholder="Tell me about your project"
              />
              {errors.message && <p className="text-sm text-rose-600">{errors.message}</p>}
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
