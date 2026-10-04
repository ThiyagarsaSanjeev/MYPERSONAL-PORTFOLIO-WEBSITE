import { motion } from 'framer-motion'
import { FiBriefcase, FiCode, FiLayout, FiSmartphone, FiTool, FiUser } from 'react-icons/fi'
import { Reveal, SectionHeading } from './Reveal'

const services = [
  { icon: FiCode, title: 'React Website Development', text: 'Fast, component-based websites and web apps built with React.' },
  { icon: FiSmartphone, title: 'Responsive Website Development', text: 'Layouts that look right on phones, tablets and desktops.' },
  { icon: FiBriefcase, title: 'Business Website Development', text: 'Clear, professional sites that present your company and services.' },
  { icon: FiUser, title: 'Portfolio Website Development', text: 'Personal sites that showcase your work and get you hired.' },
  { icon: FiLayout, title: 'UI Development', text: 'Turning designs into clean, accessible interface code.' },
  { icon: FiTool, title: 'Website Maintenance', text: 'Updates, fixes and improvements to keep your site healthy.' },
]

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHeading title="Services" text="What I can build for you." />
        <div className="grid grid--cards">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div className="card service" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <span className="icon-box"><s.icon aria-hidden="true" /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
