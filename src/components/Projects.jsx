import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal, SectionHeading } from './Reveal'
import Tilt from './Tilt'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" text="Selected work, each with the problem it solved." />
        <div className="grid grid--projects">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.id} delay={(i % 3) * 0.08}>
              <Tilt className="card project">
              <motion.button
                type="button"
                className="project__img"
                onClick={() => setSelected(p)}
                aria-label={`Open case study: ${p.title}`}
                whileHover={{ scale: 1.015 }}
              >
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              </motion.button>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p className="project__sub">{p.subtitle}</p>
                <p>{p.description}</p>
                <ul className="badges" aria-label="Technologies">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="project__actions">
                  <button type="button" className="btn btn--primary btn--sm" onClick={() => setSelected(p)}>
                    View Project <FiArrowUpRight aria-hidden="true" />
                  </button>
                  <a className="btn btn--ghost btn--sm" href={p.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
