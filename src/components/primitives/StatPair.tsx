export interface StatPairProps { value: string; label: string }

export default function StatPair({ value, label }: StatPairProps) {
  return (
    <div>
      <div className="stat-pair__value">{value}</div>
      <div className="stat-pair__label">{label}</div>
    </div>
  )
}
