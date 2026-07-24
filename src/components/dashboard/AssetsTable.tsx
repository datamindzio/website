import { assets } from './dashboardData'

const COLS = '2fr 1fr 1fr 1fr 1fr'

export default function AssetsTable() {
  return (
    <div className="card" style={{ overflow: 'hidden', borderColor: 'var(--border-dash)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border-dash)' }}>
        <div style={{ fontWeight: 600, fontSize: 15.5 }}>Top assets</div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>VIEW ALL 57 →</span>
      </div>
      <div className="mono" style={{ display: 'grid', gridTemplateColumns: COLS, padding: '10px 24px', fontSize: 10, letterSpacing: '.1em', color: 'var(--text-dimmer)', borderBottom: '1px solid var(--divider-soft)' }}>
        <span>ASSET</span><span>TYPE</span><span>CAPACITY</span><span>OUTPUT (7D)</span><span>STATUS</span>
      </div>
      {assets.map((a) => (
        <div key={a.name} style={{ display: 'grid', gridTemplateColumns: COLS, padding: '14px 24px', fontSize: 13.5, borderBottom: '1px solid var(--divider-softer)', alignItems: 'center' }}>
          <span style={{ fontWeight: 500 }}>{a.name}</span>
          <span className="mono" style={{ fontSize: 11, color: a.typeColor }}>{a.type}</span>
          <span style={{ color: 'var(--text-muted)' }}>{a.cap}</span>
          <span style={{ color: 'var(--text-muted)' }}>{a.out}</span>
          <span className="mono" style={{ fontSize: 11, color: a.statusColor }}>{a.status}</span>
        </div>
      ))}
    </div>
  )
}
