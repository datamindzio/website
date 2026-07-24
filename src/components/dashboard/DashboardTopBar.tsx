import type { CSSProperties } from 'react'
import Logo from '../Logo'

const tab = (active: boolean): CSSProperties => ({
  padding: '7px 14px', borderRadius: 5, fontSize: 13.5,
  background: active ? 'var(--panel-tab-active)' : 'transparent',
  color: active ? 'var(--text)' : 'var(--text-body3)',
})

export default function DashboardTopBar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', borderBottom: '1px solid var(--border-dash)', background: 'var(--panel)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Logo cell={6} gap={2} withWordmark={false} />
          <span style={{ fontWeight: 700, fontSize: 16 }}>EnergyAtlas</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--text-dimmer)', border: '1px solid var(--border-input)', borderRadius: 3, padding: '2px 6px' }}>BY DATAMINDZ</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <span style={tab(true)}>Overview</span>
          <span style={tab(false)}>Assets</span>
          <span style={tab(false)}>Forecast</span>
          <span style={tab(false)}>MCP API</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, color: 'var(--status-green)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--status-green)' }} />LIVE
        </div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--text-body3)', border: '1px solid var(--border-input)', borderRadius: 5, padding: '7px 14px' }}>24 JUL 2026 · 14:32 UTC</div>
      </div>
    </nav>
  )
}
