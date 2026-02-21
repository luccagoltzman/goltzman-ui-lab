import './DesignerPicker.css'

type DesignerPickerProps = {
  onSelectDesigner: (id: 'designer1' | 'designer2') => void
}

const DESIGNERS = [
  {
    id: 'designer1' as const,
    title: 'Etran',
    description: 'Landing page com sidebar, seções animadas e fluxo Get Started.',
  },
  {
    id: 'designer2' as const,
    title: 'Hero Aperture',
    description: 'Hero moderno e animado — Film Production, Scotland.',
  },
]

export default function DesignerPicker({ onSelectDesigner }: DesignerPickerProps) {
  return (
    <div className="designer-picker">
      <h1 className="designer-picker-title">Escolha um designer</h1>
      <p className="designer-picker-subtitle">
        Selecione qual projeto você quer visualizar.
      </p>
      <div className="designer-picker-grid">
        {DESIGNERS.map((d) => (
          <button
            key={d.id}
            type="button"
            className="designer-picker-card"
            onClick={() => onSelectDesigner(d.id)}
          >
            <span className="designer-picker-card-title">{d.title}</span>
            <span className="designer-picker-card-desc">{d.description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
