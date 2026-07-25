import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface BrowserFrameProps { url?: string; to?: string; children: ReactNode }

export default function BrowserFrame({ url, to, children }: BrowserFrameProps) {
  const body = to
    ? <Link to={to} className="frame-body">{children}</Link>
    : <div className="frame-body">{children}</div>
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dot" /><span className="frame-dot" /><span className="frame-dot" />
        {url && <span className="frame-url">{url}</span>}
      </div>
      {body}
    </div>
  )
}
