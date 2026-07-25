import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  to?: string
  href?: string
  external?: boolean
  children: ReactNode
  className?: string
}

export default function Button({ variant = 'primary', to, href, external, children, className = '' }: ButtonProps) {
  const cls = `btn btn-${variant} ${className}`.trim()
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener' } : {}
    return <a href={href} className={cls} {...ext}>{children}</a>
  }
  return <button type="submit" className={cls}>{children}</button>
}
