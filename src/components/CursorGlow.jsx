import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useSpring(useMotionValue(-500), { stiffness: 120, damping: 20 })
  const y = useSpring(useMotionValue(-500), { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined
    setEnabled(true)
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return enabled ? <motion.div className="cursor-glow" style={{ x, y }} aria-hidden="true" /> : null
}
