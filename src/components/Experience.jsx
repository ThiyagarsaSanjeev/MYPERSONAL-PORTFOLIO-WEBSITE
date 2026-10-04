import { FiBriefcase } from 'react-icons/fi'
import { Reveal, SectionHeading } from './Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading title="Experience" text="Hands-on training in real work environments." />
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.role} delay={i * 0.1} className="timeline__item">
              <span className="timeline__icon"><FiBriefcase aria-hidden="true" /></span>
              <div className="card">
                <div className="timeline__top">
                  <h3>{e.role}</h3>
                  {e.duration && <span className="pill">{e.duration}</span>}
                </div>
                <p className="timeline__org">{e.org}</p>
                <ul className="bullets">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <ul className="badges" aria-label="Skills gained">{e.skills.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
