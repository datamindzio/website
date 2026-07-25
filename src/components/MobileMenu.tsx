import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { ENERGYATLAS_URL, CONTACT_EMAIL } from '../lib/constants'

const LINKS = [
  { to: '/services', label: 'Services', n: '01' },
  { to: '/projects', label: 'Projects', n: '02' },
  { to: '/about', label: 'About', n: '03' },
  { to: '/contact', label: 'Contact', n: '04' },
]

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const { pathname } = useLocation()
  const prevPathname = useRef(pathname)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      onClose()
    }
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__top">
        <Link to="/" onClick={onClose}><Logo /></Link>
        <button className="mobile-menu__close" aria-label="Close menu" onClick={onClose}>✕</button>
      </div>
      <ul className="mobile-menu__links">
        {LINKS.map((l) => (
          <li key={l.to}>
            <Link to={l.to} onClick={onClose}>{l.label}<span className="mobile-menu__num">{l.n}</span></Link>
          </li>
        ))}
      </ul>
      <div className="mobile-menu__foot">
        <a className="btn btn-primary" href={ENERGYATLAS_URL} target="_blank" rel="noopener" onClick={onClose}>Explore EnergyAtlas →</a>
        <a className="mobile-menu__mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </div>
  )
}
