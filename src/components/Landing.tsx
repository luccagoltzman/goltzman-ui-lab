import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div className="logo">
            <div className="logo-symbol" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l4 8 8 2-8 2-4 8-4-8-8-2 8-2 4-8z" fill="currentColor"/></svg>
            </div>
            <span>Etran</span>
          </div>
          <button type="button" className="btn-primary">Get started</button>
        </nav>
        <header className="sidebar-header">
          <h1 className="sidebar-title">Money transfers made simple</h1>
          <p className="sidebar-subtitle">No personal credit checks or founder guarantee.</p>
        </header>
        <section className="offerings">
          <h2 className="offerings-label">Our offerings</h2>
          <div className="modules">
            <a href="#productivity" className="nav-card">
              <span className="nav-card-icon" aria-hidden>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2L12 8L18 9.5L12 11L10.5 17L9 11L3 9.5L9 8L10.5 2Z" fill="currentColor"/></svg>
              </span>
              <span className="nav-card-text">Instant<br />Productivity</span>
            </a>
            <a href="#expense" className="nav-card">
              <span className="nav-card-icon" aria-hidden>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2C5.81 2 2 5.81 2 10.5S5.81 19 10.5 19 19 15.19 19 10.5 15.19 2 10.5 2zm0 15c-3.59 0-6.5-2.91-6.5-6.5S6.91 4 10.5 4 17 6.91 17 10.5 14.09 17 10.5 17z" fill="currentColor"/></svg>
              </span>
              <span className="nav-card-text">Expense<br />Management</span>
            </a>
            <a href="#technology" className="nav-card">
              <span className="nav-card-icon" aria-hidden>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2l1.5 5 5 1.5-5 1.5-1.5 5-1.5-5-5-1.5 5-1.5L10.5 2z" fill="currentColor"/></svg>
              </span>
              <span className="nav-card-text">Advanced<br />Technology</span>
            </a>
          </div>
        </section>
        <div className="sidebar-links">
          <a href="#contact">Contact</a>
          <a href="#social">Social</a>
          <a href="#address">Address</a>
          <a href="#legal">Legal Terms</a>
        </div>
      </aside>

      <main className="main">
        <section className="header-container">
          <div className="header-image" role="img" aria-label="Header visual" />
          <h2 className="header-tagline">We escalate transfer efficiency and productivity</h2>
          <div className="logo-wall">
            <div className="logos">
              <span className="logo-item">Blooming</span>
              <span className="logo-item">BuildRight</span>
              <span className="logo-item">Flowbot</span>
              <span className="logo-item">Expor</span>
              <span className="logo-item">Partner</span>
            </div>
          </div>
        </section>

        <section className="section get-more-done">
          <div className="section-header">
            <h2 className="heading-1">Get more done in a week</h2>
            <p className="section-desc">Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized</p>
          </div>
          <div className="bento">
            <div className="bento-row">
              <div className="bento-card">
                <span className="bento-big">2x</span>
                <p className="bento-title">Double Your Productivity</p>
              </div>
              <div className="bento-card bento-card-icon">
                <span className="bento-icon" aria-hidden>⚡</span>
                <p className="bento-title">Efficiency Increase Per Transfer</p>
              </div>
            </div>
            <div className="bento-row">
              <div className="bento-card bento-card-wide">
                <span className="bento-icon" aria-hidden>💰</span>
                <p className="bento-title">Centralize Your Finances</p>
              </div>
              <div className="bento-card">
                <span className="bento-big">130%</span>
                <p className="bento-title">More Activity</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reliable">
          <h2 className="heading-1">The Most Reliable App</h2>
          <div className="benefits">
            <article className="benefit-card">
              <div className="benefit-image benefit-image-1" />
              <div className="benefit-info">
                <h3 className="benefit-title">Scale Your Team, Not Your Card Expenses</h3>
                <p className="benefit-desc">Issue virtual and physical cards at no additional cost to support teams of any size.</p>
              </div>
            </article>
            <article className="benefit-card">
              <div className="benefit-image benefit-image-2" />
              <div className="benefit-info">
                <h3 className="benefit-title">Effortless Paper Tracking, Mobile Convenience</h3>
                <p className="benefit-desc">Get precise control—at scale—with the ability to lock any card and restrict any type of spend.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="image-breaker">
          <div className="breaker-image" />
        </section>

        <section className="section first-class">
          <div className="section-header first-class-header">
            <h2 className="heading-1 heading-1-light">First class software</h2>
            <p className="section-desc section-desc-light">Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.</p>
          </div>
          <div className="icon-cards">
            <div className="icon-card">
              <div className="icon-card-box icon-1" />
              <span>Safe Storage</span>
            </div>
            <div className="icon-card">
              <div className="icon-card-box icon-2" />
              <span>Secure</span>
            </div>
            <div className="icon-card">
              <div className="icon-card-box icon-3" />
              <span>Earn Interest</span>
            </div>
            <div className="icon-card">
              <div className="icon-card-box icon-4" />
              <span>Family Plans</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <div className="cta-copy">
              <h2 className="cta-title">Download Etran and manage everything from your phone.</h2>
              <button type="button" className="btn-primary btn-cta">Get started</button>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-left" aria-hidden />
          <div className="footer-right">
            <div className="footer-contact">
              <h3 className="footer-label">Contact</h3>
              <div className="footer-links">
                <a href="mailto:hello@figma.com">hello@figma.com</a>
                <a href="#instagram">Instagram</a>
                <a href="#x">X</a>
                <a href="#linkedin">LinkedIn</a>
              </div>
            </div>
            <div className="footer-legal">
              <a href="#terms">Terms &amp; Conditions</a>
              <a href="#privacy">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
