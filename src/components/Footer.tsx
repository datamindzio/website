import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="dot"><span /></span> DATAMINDZ<span style={{ color: 'var(--cyan)' }}>.IO</span>
            </Link>
            <p className="muted" style={{ marginTop: '14px', maxWidth: '34ch' }}>
              Data consulting &amp; EU-native object storage. Based in Poland · serving the EU.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/storage">Storage</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href="mailto:hello@datamindz.io">hello@datamindz.io</a></li>
              <li>
                <a href="https://www.linkedin.com/company/datamindz" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li><Link to="/contact">Book a free audit</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DATAMINDZ.IO — All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
