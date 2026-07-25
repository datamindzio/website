const ROWS = [
  { l: 'PV PEAK', v: '11:40 · 14.8 MW' },
  { l: 'WIND PEAK', v: '18:20 · 9.1 MW' },
  { l: 'DISCHARGE WINDOW', v: '19:00–22:00' },
]

export default function ForecastPanel() {
  return (
    <div className="card" style={{ padding: '22px 24px', flex: 1, borderColor: 'var(--border-dash)' }}>
      <div style={{ fontWeight: 600, fontSize: 15.5 }}>Tomorrow's forecast</div>
      <div style={{ marginTop: 14, fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--accent)' }}>+12.3%</div>
      <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: 'var(--text-body3)' }}>
        Expected vs. today — clear skies over the PV cluster, steady 11 m/s coastal wind.
      </div>
      <div className="mono" style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 11.5 }}>
        {ROWS.map((r) => (
          <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-dim)' }}>{r.l}</span><span>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
