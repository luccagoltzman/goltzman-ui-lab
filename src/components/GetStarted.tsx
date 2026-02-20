import { useState } from 'react'
import './GetStarted.css'
import logoEtran from '../assets/icons/logoEntran.svg'
import footerLogo from '../assets/footer/logo.svg'
import footerEtran from '../assets/footer/etran.svg'

type GetStartedProps = {
  onBack: () => void
}

export default function GetStarted({ onBack }: GetStartedProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const WHATSAPP_NUMBER = '5598981358595'

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const phrase = 'Parabéns pelo belo trabalho nessa landing page!'
    const who = [name.trim(), email.trim()].filter(Boolean).join(' - ')
    const text = who ? `${phrase}\n\nCadastro: ${who}` : phrase
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="get-started">
      <aside className="get-started-sidebar">
        <nav className="get-started-nav">
          <div className="get-started-logo">
            <img src={logoEtran} alt="" className="logo-symbol" aria-hidden />
            <span>Etran</span>
          </div>
          <button
            type="button"
            className="get-started-back"
            onClick={onBack}
            aria-label="Voltar para a página inicial"
          >
            Back
          </button>
        </nav>
        <div className="get-started-sidebar-content">
          <h2 className="get-started-sidebar-title">
            Money transfers made simple
          </h2>
          <p className="get-started-sidebar-subtitle">
            No personal credit checks or founder guarantee. Start in minutes.
          </p>
        </div>
        <div className="get-started-footer-brand">
          <img src={footerLogo} alt="" aria-hidden />
          <img src={footerEtran} alt="Etran" />
        </div>
      </aside>

      <main className="get-started-main">
        <div className="get-started-card">
          <h1 className="get-started-heading">Get started</h1>
          <p className="get-started-desc">
            Enter your details below and we’ll get you set up with Etran.
          </p>
          <form onSubmit={handleSubmit} className="get-started-form">
            <label htmlFor="get-started-name" className="get-started-label">
              Name
            </label>
            <input
              id="get-started-name"
              type="text"
              className="get-started-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <label htmlFor="get-started-email" className="get-started-label">
              Email
            </label>
            <input
              id="get-started-email"
              type="email"
              className="get-started-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <button type="submit" className="btn-primary get-started-submit">
              Continue
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
