/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', 'bg-dash': 'var(--bg-dash)', panel: 'var(--panel)',
        'panel-hover': 'var(--panel-hover)', 'panel-frame-bar': 'var(--panel-frame-bar)',
        'panel-tab-active': 'var(--panel-tab-active)', border: 'var(--border)',
        'border-dash': 'var(--border-dash)', 'border-input': 'var(--border-input)',
        'border-strong': 'var(--border-strong)', 'border-btn2': 'var(--border-btn2)',
        'divider-soft': 'var(--divider-soft)', 'divider-softer': 'var(--divider-softer)',
        text: 'var(--text)', 'text-secondary': 'var(--text-secondary)', 'text-nav': 'var(--text-nav)',
        muted: 'var(--text-muted)', 'text-body2': 'var(--text-body2)', 'text-body3': 'var(--text-body3)',
        dim: 'var(--text-dim)', 'text-dimmer': 'var(--text-dimmer)', 'text-dimmest': 'var(--text-dimmest)',
        hamburger: 'var(--hamburger)', accent: 'var(--accent)', 'accent-hover': 'var(--accent-hover)',
        'accent-wash': 'var(--accent-wash)', 'accent-light-bg': 'var(--accent-light-bg)',
        error: 'var(--error)', 'wind-blue': 'var(--wind-blue)', 'battery-amber': 'var(--battery-amber)',
        'status-green': 'var(--status-green)', 'grid-line': 'var(--grid-line)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
}
