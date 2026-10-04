import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ title, text }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      <motion.span className="head-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }} />
      {text && <p>{text}</p>}
    </Reveal>
  )
}
