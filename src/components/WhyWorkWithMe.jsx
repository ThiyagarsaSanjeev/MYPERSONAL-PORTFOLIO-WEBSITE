import { FiBookOpen, FiLayers, FiMonitor, FiTarget, FiTerminal, FiUsers } from 'react-icons/fi'
import { Reveal, SectionHeading } from './Reveal'

const reasons = [
  { icon: FiTerminal, title: 'Clean Code', text: 'Readable, organised code that is easy to extend later.' },
  { icon: FiMonitor, title: 'Responsive Design', text: 'Every page tested from small phones to large screens.' },
  { icon: FiLayers, title: 'Modern UI', text: 'Contemporary, consistent interfaces without clutter.' },
  { icon: FiUsers, title: 'Client-focused Development', text: 'Clear communication and work built around your goals.' },
  { icon: FiBookOpen, title: 'Continuous Learning', text: 'Always improving with current tools and best practices.' },
  { icon: FiTarget, title: 'Problem Solving', text: 'Breaking down tough requirements into working solutions.' },
]

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHeading title="Why Work With Me?" />
        <div className="grid grid--cards">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05} className="card why">
              <r.icon className="why__icon" aria-hidden="true" />
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
