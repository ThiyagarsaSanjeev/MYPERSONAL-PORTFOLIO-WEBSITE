import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { socialLinks } from '../config/socialLinks'

const all = [
  { key: 'github', label: 'GitHub', icon: FaGithub },
  { key: 'linkedin', label: 'LinkedIn', icon: FaLinkedinIn },
  { key: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp },
  { key: 'email', label: 'Email', icon: FiMail },
]

export default function SocialLinks({ keys = ['github', 'linkedin', 'whatsapp', 'email'], className = '' }) {
  return (
    <ul className={`social ${className}`} aria-label="Social links">
      {all.filter((s) => keys.includes(s.key)).map(({ key, label, icon: Icon }) => {
        const href = socialLinks[key]
        const external = !href.startsWith('mailto:')
        return (
          <li key={key}>
            <motion.a
              href={href}
              data-tip={label}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.94 }}
            >
              <Icon aria-hidden="true" />
            </motion.a>
          </li>
        )
      })}
    </ul>
  )
}
