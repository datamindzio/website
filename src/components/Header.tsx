import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { ENERGYATLAS_URL } from '../lib/constants'

const NAV = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo"><Logo /></Link>
        <ul className="nav-links">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={ENERGYATLAS_URL} target="_blank" rel="noopener">EXPLORE ENERGYATLAS →</a>
        <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span /><span />
        </button>
      </nav>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}
