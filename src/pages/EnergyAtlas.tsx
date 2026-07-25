import type { CSSProperties } from 'react'
import DashboardTopBar from '../components/dashboard/DashboardTopBar'
import KpiCard from '../components/dashboard/KpiCard'
import ProductionChart from '../components/dashboard/ProductionChart'
import ForecastPanel from '../components/dashboard/ForecastPanel'
import McpStatusCard from '../components/dashboard/McpStatusCard'
import AssetsMap from '../components/dashboard/AssetsMap'
import AssetsTable from '../components/dashboard/AssetsTable'

const range = (active: boolean): CSSProperties => ({
  padding: '6px 12px', borderRadius: 4,
  ...(active
    ? { background: 'var(--accent)', color: 'var(--bg)', fontWeight: 500 }
    : { border: '1px solid var(--border-input)', color: 'var(--text-body3)' }),
})

export default function EnergyAtlas() {
  return (
    <div className="dash">
      <DashboardTopBar />
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em' }}>Portfolio overview</h1>
          <div className="mono" style={{ display: 'flex', gap: 6, fontSize: 11.5 }}>
            <span style={range(false)}>24H</span><span style={range(true)}>7D</span>
            <span style={range(false)}>30D</span><span style={range(false)}>YTD</span>
          </div>
        </div>

        <div className="dash-kpis">
          <KpiCard label="TOTAL PRODUCTION" value="148.2" unit="MWh" footnote="▲ 6.4% vs last week" footnoteColor="var(--status-green)" />
          <KpiCard label="PV OUTPUT" labelColor="var(--accent)" value="82.6" unit="MWh" footnote="56% of mix · 41 sites" />
          <KpiCard label="WIND OUTPUT" labelColor="var(--wind-blue)" value="51.9" unit="MWh" footnote="35% of mix · 12 turbines" />
          <KpiCard label="BATTERY SOC" labelColor="var(--battery-amber)" value="76" unit="%" progress={76} />
        </div>

        <div className="dash-2x1">
          <ProductionChart />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ForecastPanel />
            <McpStatusCard />
          </div>
        </div>

        <div className="card" style={{ overflow: 'hidden', borderColor: 'var(--border-dash)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: '1px solid var(--border-dash)' }}>
            <div style={{ fontWeight: 600, fontSize: 15.5 }}>Assets map</div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>57 SITES · NORTHERN GRID REGION</span>
          </div>
          <AssetsMap />
        </div>

        <AssetsTable />
      </div>
    </div>
  )
}
