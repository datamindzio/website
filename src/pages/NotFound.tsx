import Eyebrow from '../components/primitives/Eyebrow'
import Button from '../components/primitives/Button'

export default function NotFound() {
  return (
    <section className="hero-grid" style={{ padding: '120px var(--gutter)', textAlign: 'center' }}>
      <Eyebrow tone="dim">ERROR / 404</Eyebrow>
      <h1 style={{ fontSize: 54, margin: '16px 0' }}>Page not found.</h1>
      <p className="lead" style={{ maxWidth: '46ch', margin: '0 auto 28px' }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button to="/">Back to home</Button>
    </section>
  )
}
