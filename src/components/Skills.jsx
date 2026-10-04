import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading title="Skills" text="The bar shows my own self-assessment, not a test score." />
        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.title} className="skill-group">
              <Reveal as="h3">{g.title}</Reveal>
              <div className="grid grid--skills">
                {g.skills.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.06} className="card skill">
                    <div className="skill__top">
                      <s.icon className="skill__icon" aria-hidden="true" />
                      <h4>{s.name}</h4>
                    </div>
                    <p>{s.desc}</p>
                    <div className="bar" role="img" aria-label={`${s.name}: ${s.level}% self-assessed`}>
                      <motion.div
                        className="bar__fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
