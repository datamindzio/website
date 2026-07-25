export interface KpiCardProps {
  label: string
  labelColor?: string
  value: string
  unit: string
  footnote?: string
  footnoteColor?: string
  progress?: number // 0–100; renders an amber progress bar instead of a footnote
}

export default function KpiCard({ label, labelColor = 'var(--text-dim)', value, unit, footnote, footnoteColor = 'var(--text-dim)', progress }: KpiCardProps) {
  return (
    <div className="card" style={{ padding: '20px 22px', borderColor: 'var(--border-dash)' }}>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.12em', color: labelColor }}>{label}</div>
      <div style={{ marginTop: 10, fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em' }}>
        {value} <span style={{ fontSize: 15, color: 'var(--text-dim)', fontWeight: 400 }}>{unit}</span>
      </div>
      {progress != null ? (
        <div style={{ marginTop: 8, height: 6, borderRadius: 3, background: 'var(--divider-soft)', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--battery-amber)' }} />
        </div>
      ) : (
        <div className="mono" style={{ marginTop: 6, fontSize: 11.5, color: footnoteColor }}>{footnote}</div>
      )}
    </div>
  )
}
