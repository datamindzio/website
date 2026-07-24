import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../lib/constants'

const LINKS: [string, string][] = [
  ['/services', 'Services'], ['/projects', 'Projects'], ['/about', 'About'], ['/contact', 'Contact'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 DataMindz</span>
      <nav className="footer-links">
        {LINKS.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
      </nav>
      <a className="footer-mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </footer>
  )
}
