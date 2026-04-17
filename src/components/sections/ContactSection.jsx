import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import { SectionTitle } from '../ui/SectionTitle'

const initialValues = { name: '', email: '', message: '' }

export function ContactSection({ data }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required.'
    if (!values.email.trim()) nextErrors.email = 'Email is required.'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Use a valid email address.'
    if (!values.message.trim() || values.message.length < 16) nextErrors.message = 'Message should be at least 16 characters.'
    return nextErrors
  }

  const onChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <section id="contact">
      <SectionTitle eyebrow="Get In Touch" title={data.title} description={data.intro} />
      <div className="grid gap-6 md:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          onSubmit={onSubmit}
          className="glass-panel space-y-4 p-6"
          noValidate
        >
          <InputField label="Name" name="name" value={values.name} onChange={onChange} error={errors.name} />
          <InputField label="Email" name="email" value={values.email} onChange={onChange} error={errors.email} />
          <InputField
            label="Message"
            name="message"
            value={values.message}
            onChange={onChange}
            error={errors.message}
            isTextArea
          />
          <button type="submit" className="btn-primary w-full justify-center">
            Send Message
          </button>
          {submitted ? (
            <p className="text-sm text-emerald-600 dark:text-emerald-300">
              Message validated successfully. Connect this form to your API or form provider to deliver emails.
            </p>
          ) : null}
        </motion.form>
        <div className="space-y-4">
          <div className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">Email</p>
            <a href={`mailto:${portfolioData.identity.email}`} className="mt-2 block text-lg font-semibold">
              {portfolioData.identity.email}
            </a>
          </div>
          <div className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Icon />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, name, value, onChange, error, isTextArea = false }) {
  const shared = `mt-2 w-full rounded-xl border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm outline-none transition focus:border-violet-500 dark:border-slate-700 dark:bg-slate-900/70`
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {isTextArea ? (
        <textarea className={shared} name={name} value={value} rows={5} onChange={onChange} />
      ) : (
        <input className={shared} type={name === 'email' ? 'email' : 'text'} name={name} value={value} onChange={onChange} />
      )}
      {error ? <span className="mt-1 block text-xs text-rose-500">{error}</span> : null}
    </label>
  )
}
