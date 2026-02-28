import { useEffect, useState } from 'react'
import './DesignerPicker.css'

type DesignerPickerProps = {
  onSelectDesigner: (id: 'designer1' | 'designer2' | 'designer3') => void
}

const DESIGNERS = [
  {
    id: 'designer1' as const,
    title: 'Etran',
    description: 'Landing page com sidebar, seções animadas e fluxo Get Started.',
    accent: 'green',
  },
  {
    id: 'designer2' as const,
    title: 'Hero Aperture',
    description: 'Hero moderno e animado — Film Production, Scotland.',
    accent: 'film',
  },
  {
    id: 'designer3' as const,
    title: 'Portfolio Law',
    description: 'Primeira seção (hero) — The Law Is The Public Conscience.',
    accent: 'gold',
  },
]

export default function DesignerPicker({ onSelectDesigner }: DesignerPickerProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div className={`designer-picker ${loaded ? 'loaded' : ''}`}>
      <div className="designer-picker-bg" aria-hidden />
      <div className="designer-picker-noise" aria-hidden />

      <div className="designer-picker-content">
        <header className="designer-picker-header">
          <p className="designer-picker-label">UI Lab</p>
          <h1 className="designer-picker-title">Escolha um projeto</h1>
          <p className="designer-picker-subtitle">
            Selecione qual experiência você quer explorar.
          </p>
        </header>

        <div className="designer-picker-grid">
          {DESIGNERS.map((d, i) => (
            <button
              key={d.id}
              type="button"
              className={`designer-picker-card designer-picker-card--${d.accent}`}
              onClick={() => onSelectDesigner(d.id)}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className="designer-picker-card-glow" aria-hidden />
              <span className="designer-picker-card-index">0{i + 1}</span>
              <span className="designer-picker-card-title">{d.title}</span>
              <span className="designer-picker-card-desc">{d.description}</span>
              <span className="designer-picker-card-arrow" aria-hidden />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
