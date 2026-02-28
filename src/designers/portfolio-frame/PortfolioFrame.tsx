import './PortfolioFrame.css'
import heroBg from '../designer3/assets/images/Frame 89 (1).png'
import imageLawyer from '../designer3/assets/images/imageLawyer.png'

type PortfolioFrameProps = {
  onBackToPicker: () => void
}

export default function PortfolioFrame({ onBackToPicker }: PortfolioFrameProps) {
  return (
    <div className="portfolio-frame">
      <div
        className="portfolio-frame-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="portfolio-frame-overlay" aria-hidden />
      <header className="portfolio-frame-header">
        <div className="portfolio-frame-logo" aria-hidden>
          {/* Logo: você coloca a imagem depois */}
        </div>
        <nav className="portfolio-frame-nav">
          <a href="#expertise">Expertise</a>
          <a href="#thought">Thought Leadership</a>
          <a href="#news">News &amp; Events</a>
          <a href="#legacy">Legacy</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" className="portfolio-frame-cta-nav">
          Book an appointment
        </button>
      </header>

      <main className="portfolio-frame-hero">
        <p className="portfolio-frame-copyright" aria-hidden>
          Ratulonit @ 2024
        </p>

        <div className="portfolio-frame-hero-inner">
          <section className="portfolio-frame-hero-left">
            <h1 className="portfolio-frame-headline">
              The Law Is The Public Conscience
            </h1>
            <p className="portfolio-frame-desc">
              Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo
              tortor. Nam sed tempor sapien. Interdum et
            </p>
            <div className="portfolio-frame-actions">
              <button type="button" className="portfolio-frame-btn-primary">
                Practicing Area
              </button>
              <button type="button" className="portfolio-frame-btn-secondary">
                Book an appointment
              </button>
            </div>
          </section>

          <aside className="portfolio-frame-hero-right">
            <div className="portfolio-frame-image-wrap">
              <img
                src={imageLawyer}
                alt=""
                className="portfolio-frame-image-placeholder"
                aria-hidden
              />
            </div>
          </aside>
        </div>

        <div className="portfolio-frame-circle-text" aria-hidden>
          <span className="portfolio-frame-circle-text-inner">
            THE LAW NO ONE IS ABOVE
          </span>
        </div>

        <button
          type="button"
          className="portfolio-frame-scroll-top"
          aria-label="Scroll to top"
        >
          <span className="portfolio-frame-scroll-top-icon" />
        </button>
      </main>

      <button
        type="button"
        className="portfolio-frame-back"
        onClick={onBackToPicker}
      >
        Voltar aos designers
      </button>
    </div>
  )
}
