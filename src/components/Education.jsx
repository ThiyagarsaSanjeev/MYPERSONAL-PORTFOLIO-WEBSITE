import { FiBookOpen } from 'react-icons/fi'
import { Reveal, SectionHeading } from './Reveal'
import { education } from '../data/experience'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" />
        <ol className="timeline">
          {education.map((e) => (
            <Reveal as="li" key={e.title} className="timeline__item">
              <span className="timeline__icon"><FiBookOpen aria-hidden="true" /></span>
              <div className="card">
                <div className="timeline__top">
                  <h3>{e.title}</h3>
                  {e.duration && <span className="pill">{e.duration}</span>}
                </div>
                <p className="timeline__org">{e.org}</p>
                <p>{e.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
