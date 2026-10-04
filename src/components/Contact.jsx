import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiCheckCircle, FiMail, FiSend } from 'react-icons/fi'
import { Reveal } from './Reveal'
import { contactInfo, socialLinks } from '../config/socialLinks'

const channels = [
  { label: 'Email', icon: FiMail, href: socialLinks.email },
  { label: 'WhatsApp', icon: FaWhatsapp, href: socialLinks.whatsapp },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: socialLinks.linkedin },
  { label: 'GitHub', icon: FaGithub, href: socialLinks.github },
]

export default function Contact() {
  const formRef = useRef(null)
  const [sent, setSent] = useState(null) // 'email' | 'whatsapp' | null

  const send = (via) => {
    const form = formRef.current
    if (!form.reportValidity()) return
    const { name, email, message } = Object.fromEntries(new FormData(form))
    const body = `${message}\n\nFrom: ${name} (${email})`

    if (via === 'email') {
      const to = socialLinks.email.replace('mailto:', '')
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`
    } else {
      window.open(`${socialLinks.whatsapp}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
    }
    setSent(via)
    form.reset()
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <Reveal className="contact__info">
          <h2>Let&apos;s build something together.</h2>
          <p>Have a project, a job opportunity or a question? Send a message and I&apos;ll reply as soon as I can.</p>
          <p className="status"><span className="status__dot" /> Available for freelance projects and opportunities.</p>
          <p className="contact__direct">
            <a href={socialLinks.email}>{contactInfo.email}</a>
            <a href={`tel:${contactInfo.phoneIntl}`}>{contactInfo.phone}</a>
          </p>
          <ul className="channels">
            {channels.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon aria-hidden="true" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={formRef} className="card form" onSubmit={(e) => { e.preventDefault(); send('email') }} noValidate={false}>
            <label>Name
              <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
            </label>
            <label>Email
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>Message
              <textarea name="message" rows="5" required placeholder="Tell me about your project" />
            </label>
            <div className="form__actions">
              <button type="submit" className="btn btn--primary"><FiSend aria-hidden="true" /> Send by email</button>
              <button type="button" className="btn btn--ghost" onClick={() => send('whatsapp')}>
                <FaWhatsapp aria-hidden="true" /> Send on WhatsApp
              </button>
            </div>
            <p className="form__note">This site has no server. Your message opens in your email app or WhatsApp.</p>
            <AnimatePresence>
              {sent && (
                <motion.p className="form__success" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <FiCheckCircle aria-hidden="true" />
                  {sent === 'email' ? 'Your email app should open with the message ready to send.' : 'WhatsApp opened in a new tab with your message ready to send.'}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
