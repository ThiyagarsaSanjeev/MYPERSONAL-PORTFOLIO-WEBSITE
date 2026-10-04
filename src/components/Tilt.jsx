import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export default function Tilt({ children, className }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div className={className} onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX, rotateY, transformPerspective: 900 }}>
      {children}
    </motion.div>
  )
}
