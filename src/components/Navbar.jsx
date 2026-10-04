import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import SocialLinks from './SocialLinks'
import { navItems } from '../data/nav'
import { cv } from '../config/socialLinks'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const Theme = theme === 'dark' ? FiSun : FiMoon

  return (
    <motion.header
      className={`nav ${scrolled || open ? 'nav--glass' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="nav__inner container" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          Sanjeev<span>.dev</span>
        </a>

        <ul className="nav__links">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
                {active === id && <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <SocialLinks keys={['github', 'linkedin']} className="social--nav" />
          <a className="btn btn--sm btn--primary nav__cv" href={cv.path} download={cv.fileName}>
            <FiDownload aria-hidden="true" /> <span>Download CV</span>
          </a>
          <button className="icon-btn" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <Theme aria-hidden="true" />
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>
                </li>
              ))}
            </ul>
            <div className="mobile__foot">
              <SocialLinks />
              <a className="btn btn--primary" href={cv.path} download={cv.fileName}>
                <FiDownload aria-hidden="true" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
