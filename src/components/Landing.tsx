import './Landing.css'
import logoEtran from '../assets/icons/logoEntran.svg'
import iconInstant from '../assets/icons/iconInstant.svg'
import iconExpense from '../assets/icons/iconExpense.svg'
import iconAdvanced from '../assets/icons/iconAdvanced.svg'
import headerImage from '../assets/images/Header image.png'
import brandBlooming from '../assets/brands/brandBlooming.svg'
import brandBuildRight from '../assets/brands/brandBuildRight.svg'
import brandFlowbot from '../assets/brands/brandFlowbot.svg'
import brandExpor from '../assets/brands/brandExpor.svg'
import brandRedo from '../assets/brands/brandRedo.svg'
import iconEfficiency from '../assets/icons/iconEfficiency.svg'
import iconCentralizeYourFinances from '../assets/icons/iconCentralizeYourFinanceses.svg'
import benefitImage1 from '../assets/images/Benefit image.png'
import benefitImage2 from '../assets/images/Benefit image (1).png'

export default function Landing() {
  return (
    <div className="landing">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div className="logo">
            <img src={logoEtran} alt="" className="logo-symbol" aria-hidden />
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
                <img src={iconInstant} alt="" />
              </span>
              <span className="nav-card-text">Instant<br />Productivity</span>
            </a>
            <a href="#expense" className="nav-card">
              <span className="nav-card-icon" aria-hidden>
                <img src={iconExpense} alt="" />
              </span>
              <span className="nav-card-text">Expense<br />Management</span>
            </a>
            <a href="#technology" className="nav-card">
              <span className="nav-card-icon" aria-hidden>
                <img src={iconAdvanced} alt="" />
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
          <img src={headerImage} alt="Money transfers made simple - transferências, juros e pagamentos no celular" className="header-image" />
          <h2 className="header-tagline">We escalate transfer efficiency and productivity</h2>
          <div className="logo-wall">
            <div className="logos">
              <img src={brandBlooming} alt="Blooming" className="logo-item-img" />
              <img src={brandBuildRight} alt="BuildRight" className="logo-item-img" />
              <img src={brandFlowbot} alt="Flowbot" className="logo-item-img" />
              <img src={brandExpor} alt="Expor" className="logo-item-img" />
              <img src={brandRedo} alt="Redo" className="logo-item-img" />
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
                <img src={iconEfficiency} alt="" className="bento-icon-img" aria-hidden />
                <p className="bento-title">Efficiency Increase Per Transfer</p>
              </div>
            </div>
            <div className="bento-row">
              <div className="bento-card bento-card-wide">
                <img src={iconCentralizeYourFinances} alt="" className="bento-icon-img" aria-hidden />
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
              <img src={benefitImage1} alt="" className="benefit-image" />
              <div className="benefit-info">
                <h3 className="benefit-title">Scale Your Team, Not Your Card Expenses</h3>
                <p className="benefit-desc">Issue virtual and physical cards at no additional cost to support teams of any size.</p>
              </div>
            </article>
            <article className="benefit-card">
              <img src={benefitImage2} alt="" className="benefit-image" />
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
            <h2 className="heading-1 heading-1-green">First class software</h2>
            <p className="section-desc">Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.</p>
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
