export interface LogoProps {
  variant?: 'dark' | 'light'
  cell?: number
  gap?: number
  withWordmark?: boolean
  wordmarkSize?: number
}

const COL_DARK = ['var(--logo-d1)', 'var(--logo-d2)', 'var(--logo-d3)']
const COL_LIGHT = ['var(--logo-l1)', 'var(--logo-l2)', 'var(--logo-l3)']

export default function Logo({
  variant = 'dark',
  cell = 6.5,
  gap,
  withWordmark = true,
  wordmarkSize = 18,
}: LogoProps) {
  const g = gap ?? cell * 0.38
  const cols = variant === 'light' ? COL_LIGHT : COL_DARK
  const size = cell * 3 + g * 2
  const roundedRadius = cell * 0.31
  const rects = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const i = r * 3 + c
      const isSquare = i === 5 // row2,col3 -> rounded square
      rects.push(
        <rect
          key={i}
          x={c * (cell + g)}
          y={r * (cell + g)}
          width={cell}
          height={cell}
          rx={isSquare ? roundedRadius : cell / 2}
          ry={isSquare ? roundedRadius : cell / 2}
          fill={cols[c]}
        />,
      )
    }
  }
  const wordColor = variant === 'light' ? 'var(--bg)' : 'var(--text)'
  const dotColor = variant === 'light' ? 'var(--accent-light-bg)' : 'var(--accent)'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {rects}
      </svg>
      {withWordmark && (
        <span style={{ fontWeight: 700, fontSize: wordmarkSize, letterSpacing: '-0.01em', color: wordColor }}>
          datamindz<span style={{ color: dotColor }}>.io</span>
        </span>
      )}
    </span>
  )
}
