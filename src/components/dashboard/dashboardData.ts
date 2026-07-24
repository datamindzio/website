export interface Bar { pv: number; wind: number; batt: number; op: number }
export interface Asset {
  name: string
  type: 'PV' | 'WIND' | 'BATTERY'
  typeColor: string
  cap: string
  out: string
  status: string
  statusColor: string
}

const pv =   [42, 55, 68, 60, 72, 80, 64, 58, 70, 84, 76, 88, 95, 78, 66, 74, 90, 82, 96, 104, 86, 70, 60, 52, 58, 64, 70, 62]
const wind = [30, 24, 36, 44, 28, 32, 40, 46, 34, 26, 38, 50, 42, 36, 30, 44, 52, 38, 28, 34, 46, 40, 36, 44, 38, 30, 36, 42]
const batt = [10, 14, 8, 12, 16, 10, 14, 12, 8, 14, 10, 16, 12, 10, 14, 10, 8, 12, 16, 14, 10, 12, 14, 10, 12, 14, 10, 12]

export const bars: Bar[] = pv.map((p, i) => ({ pv: p, wind: wind[i], batt: batt[i], op: i >= 21 ? 0.38 : 1 }))

const cyan = 'var(--accent)'
const blue = 'var(--wind-blue)'
const amber = 'var(--battery-amber)'
const green = 'var(--status-green)'
const gray = 'var(--text-dim)'

export const assets: Asset[] = [
  { name: 'Solarpark Nordfeld', type: 'PV', typeColor: cyan, cap: '22.4 MWp', out: '18.6 MWh', status: 'NOMINAL', statusColor: green },
  { name: 'Coastal Wind Cluster A', type: 'WIND', typeColor: blue, cap: '18.0 MW', out: '15.2 MWh', status: 'NOMINAL', statusColor: green },
  { name: 'BESS Hub Ost', type: 'BATTERY', typeColor: amber, cap: '12.0 MWh', out: '9.1 MWh', status: 'CHARGING', statusColor: amber },
  { name: 'Rooftop Portfolio City-South', type: 'PV', typeColor: cyan, cap: '8.6 MWp', out: '6.4 MWh', status: 'NOMINAL', statusColor: green },
  { name: 'Turbine Site Hochland 3', type: 'WIND', typeColor: blue, cap: '6.0 MW', out: '3.1 MWh', status: 'MAINTENANCE', statusColor: gray },
]
