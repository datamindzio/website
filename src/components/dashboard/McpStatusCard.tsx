export default function McpStatusCard() {
  return (
    <div className="card" style={{ padding: '20px 24px', borderColor: 'var(--border-dash)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 600, fontSize: 14.5 }}>MCP server</div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--status-green)', border: '1px solid oklch(0.4 0.08 160)', borderRadius: 3, padding: '2px 7px' }}>CONNECTED</span>
      </div>
      <div className="mono" style={{ marginTop: 10, fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.7 }}>
        mcp://energyatlas.datamindz.io<br />14 tools · 3 agents active
      </div>
    </div>
  )
}
