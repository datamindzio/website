import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

function Brand() {
  return (
    <Link className="brand" to="/">
      <span className="dot"><span /></span> DATAMINDZ<span style={{ color: 'var(--cyan)' }}>.IO</span>
    </Link>
  )
}

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'active' : ''
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isStorage = location.pathname === '/storage'
  const ctaLabel = isStorage ? 'Start free trial' : 'Book a free audit'

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container nav">
        <Brand />
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={navClass}>Services</NavLink></li>
          <li><NavLink to="/storage" className={navClass}>Storage</NavLink></li>
          <li><NavLink to="/about" className={navClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
          <li><Link to="/contact" className="btn btn--primary btn--sm">{ctaLabel}</Link></li>
        </ul>
        <div className="nav-cta">
          <Link to="/contact" className="btn btn--primary btn--sm">{ctaLabel}</Link>
          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
