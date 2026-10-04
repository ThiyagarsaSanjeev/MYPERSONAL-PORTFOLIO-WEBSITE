import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiCheck, FiExternalLink, FiX } from 'react-icons/fi'

export default function ProjectModal({ project: p, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <button ref={closeRef} className="icon-btn modal__close" onClick={onClose} aria-label="Close case study">
          <FiX aria-hidden="true" />
        </button>

        <header className="modal__head">
          <h3 id="modal-title">{p.title}</h3>
          <p>{p.subtitle}</p>
        </header>

        <div className="modal__shots">
          {p.screenshots.map((src, i) => (
            <img key={src} src={src} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" />
          ))}
        </div>

        <div className="modal__cols">
          <section><h4>Overview</h4><p>{p.overview}</p></section>
          <section><h4>Problem</h4><p>{p.problem}</p></section>
          <section><h4>Solution</h4><p>{p.solution}</p></section>
        </div>

        <section>
          <h4>Main features</h4>
          <ul className="checks">
            {p.features.map((f) => <li key={f}><FiCheck aria-hidden="true" /> {f}</li>)}
          </ul>
        </section>

        <section>
          <h4>Technologies</h4>
          <ul className="badges">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>

        <div className="modal__actions">
          {p.live && (
            <a className="btn btn--primary" href={p.live} target="_blank" rel="noopener noreferrer">
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          )}
          <a className="btn btn--primary" href={p.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
