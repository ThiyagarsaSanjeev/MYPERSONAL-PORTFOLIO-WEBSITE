import SocialLinks from './SocialLinks'
import { navItems } from '../data/nav'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="logo">Sanjeev<span>.dev</span></a>
          <p>Building modern digital experiences.</p>
          <SocialLinks />
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            {navItems.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>
      </div>
      <p className="footer__copy container">&copy; 2026 Sanjeev. All rights reserved.</p>
    </footer>
  )
}
