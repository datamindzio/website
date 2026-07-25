import type { ReactNode } from 'react'

export interface EyebrowProps { tone?: 'accent' | 'dim'; children: ReactNode; className?: string }

export default function Eyebrow({ tone = 'accent', children, className = '' }: EyebrowProps) {
  return <div className={`eyebrow ${tone === 'dim' ? 'eyebrow--dim' : ''} ${className}`.trim()}>{children}</div>
}
