import { bars } from './dashboardData'

const legend = [
  { c: 'var(--accent)', t: 'PV' },
  { c: 'var(--wind-blue)', t: 'WIND' },
  { c: 'var(--battery-amber)', t: 'BATTERY' },
]

export default function ProductionChart() {
  return (
    <div className="card" style={{ padding: '22px 24px', borderColor: 'var(--border-dash)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 600, fontSize: 15.5 }}>Production — retrospect &amp; forecast</div>
        <div className="mono" style={{ display: 'flex', gap: 16, fontSize: 10.5, color: 'var(--text-body3)' }}>
          {legend.map((l) => (
            <span key={l.t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 9, height: 9, borderRadius: 2, background: l.c }} />{l.t}
            </span>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 20, display: 'flex', alignItems: 'flex-end', gap: 5, height: 190, borderBottom: '1px solid var(--border)' }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: 2, height: 190, opacity: b.op }}>
            <div style={{ height: b.pv, background: 'var(--accent)', borderRadius: '2px 2px 0 0' }} />
            <div style={{ height: b.wind, background: 'var(--wind-blue)', borderRadius: 2 }} />
            <div style={{ height: b.batt, background: 'var(--battery-amber)', borderRadius: 2 }} />
          </div>
        ))}
      </div>
      <div className="mono" style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text-dimmer)' }}>
        <span>JUL 17</span><span>JUL 19</span><span>JUL 21</span><span>JUL 23</span>
        <span style={{ color: 'var(--accent)' }}>TODAY</span><span>JUL 26 (FCST)</span><span>JUL 28 (FCST)</span>
      </div>
    </div>
  )
}
