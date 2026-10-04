import { Reveal, SectionHeading } from './Reveal'
import CountUp from './CountUp'

const stats = [
  { to: 5, label: 'Projects completed' },
  { to: 10, suffix: '+', label: 'Technologies' },
  { text: 'Trainee', label: 'Experience' },
  { text: 'HNDIT', label: 'Currently learning' },
]
const languages = ['Tamil - Fluent', 'English - Intermediate']
const interests = ['Coding', 'Web design', 'Photography & editing', 'Video editing', 'Reading']

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About me" />
        <div className="about">
          <Reveal className="about__text">
            <p>
              I&apos;m Thiyagarasa Sanjeev, a Junior Web Developer from Sri Lanka, studying for a Higher National Diploma in
              Information Technology (HNDIT) at SLIATE. I turn ideas into clean, responsive websites and web apps that are
              easy to use and easy to maintain.
            </p>
            <p>
              I enjoy the full path of a project: building the interface with React, structuring data with PHP and MySQL,
              and polishing the details until it feels right on every screen size.
            </p>
            <p>
              <strong>Career goal:</strong> to grow into a professional software developer in a development-focused team,
              and to keep learning modern tools along the way.
            </p>
            <h3>Languages</h3>
            <ul className="badges">{languages.map((l) => <li key={l}>{l}</li>)}</ul>
            <h3>Interests</h3>
            <ul className="badges">{interests.map((l) => <li key={l}>{l}</li>)}</ul>
          </Reveal>
          <ul className="stats">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 0.07} className="stat">
                <strong>{s.text ?? <CountUp to={s.to} suffix={s.suffix} />}</strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
