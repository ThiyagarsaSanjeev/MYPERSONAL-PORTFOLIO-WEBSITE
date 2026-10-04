import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaPhp, FaReact } from 'react-icons/fa'
import { SiJavascript, SiMysql } from 'react-icons/si'
import { FiArrowRight, FiDownload, FiMessageCircle } from 'react-icons/fi'
import SocialLinks from './SocialLinks'
import { cv } from '../config/socialLinks'

const symbols = [
  { t: '</>', x: '8%', y: '22%', d: 0 },
  { t: '{ }', x: '44%', y: '12%', d: 1.2 },
  { t: '=>', x: '90%', y: '30%', d: 0.6 },
  { t: '[ ]', x: '76%', y: '82%', d: 1.8 },
  { t: '();', x: '14%', y: '84%', d: 0.9 },
]

const chips = [
  { name: 'React', icon: FaReact, style: { top: '6%', left: '-4%' }, d: 0 },
  { name: 'PHP', icon: FaPhp, style: { top: '22%', right: '-6%' }, d: 1 },
  { name: 'MySQL', icon: SiMysql, style: { bottom: '14%', right: '-2%' }, d: 2 },
  { name: 'JavaScript', icon: SiJavascript, style: { bottom: '4%', left: '-2%' }, d: 1.5 },
]

const roles = ['Junior Web Developer', 'React Developer', 'PHP & MySQL Developer']

function useTypewriter(words, enabled) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (!enabled) return undefined
    let w = 0
    let i = words[0].length
    let deleting = true
    let timer
    const tick = () => {
      const word = words[w]
      if (deleting) {
        i -= 1
        setText(word.slice(0, i))
        if (i === 0) { deleting = false; w = (w + 1) % words.length; timer = setTimeout(tick, 300); return }
        timer = setTimeout(tick, 35)
      } else {
        i += 1
        setText(words[w].slice(0, i))
        if (i === words[w].length) { deleting = true; timer = setTimeout(tick, 2200); return }
        timer = setTimeout(tick, 70)
      }
    }
    timer = setTimeout(tick, 2600)
    return () => clearTimeout(timer)
  }, [words, enabled])
  return text
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const role = useTypewriter(roles, !reduce)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="glow glow--a" />
        <div className="glow glow--b" />
        {symbols.map((s) => (
          <span key={s.t} className="float-sym" style={{ left: s.x, top: s.y, animationDelay: `${s.d}s` }}>{s.t}</span>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <i key={i} className="dot" style={{ left: `${(i * 83) % 100}%`, top: `${(i * 47) % 100}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__copy" initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }}>
          <motion.p variants={item} className="status"><span className="status__dot" /> Available for freelance projects</motion.p>
          <motion.h1 variants={item} id="hero-title">Hi, I&apos;m <span className="grad">Sanjeev</span></motion.h1>
          <motion.p variants={item} className="hero__role" aria-label="Junior Web Developer">
            <span aria-hidden="true">{role}</span><span className="caret" aria-hidden="true" />
          </motion.p>
          <motion.p variants={item} className="hero__text">
            I build modern, responsive and user-focused web applications with clean code and modern technologies.
          </motion.p>
          <motion.div variants={item} className="hero__cta">
            <a className="btn btn--primary" href="#projects">View My Work <FiArrowRight aria-hidden="true" /></a>
            <a className="btn btn--ghost" href={cv.path} download={cv.fileName}><FiDownload aria-hidden="true" /> Download CV</a>
            <a className="btn btn--ghost" href="#contact"><FiMessageCircle aria-hidden="true" /> Let&apos;s Talk</a>
          </motion.div>
          <motion.div variants={item}><SocialLinks /></motion.div>
        </motion.div>

        <motion.div
          className="portrait"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="portrait__ring" aria-hidden="true" />
          <div className="portrait__img">
            <img src={`${import.meta.env.BASE_URL}sanjeev.jpg`} alt="Portrait of Sanjeev wearing a black suit" width="800" height="800" />
          </div>
          {chips.map(({ name, icon: Icon, style, d }) => (
            <span key={name} className="chip" style={{ ...style, animationDelay: `${d}s` }} aria-hidden="true">
              <Icon /> {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
