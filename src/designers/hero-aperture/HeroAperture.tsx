import { useEffect, useRef, useState } from 'react'
import './HeroAperture.css'
import heroBg from '../designer2/assets/images/image 42.png'
import heroVideoBg from '../designer2/assets/images/image (2).png'
import heroVideo from '../designer2/assets/video/97289-649760967_small.mp4'
import filmImage from '../designer2/assets/images/FILM.png'

type HeroApertureProps = {
  onBackToPicker: () => void
}

export default function HeroAperture({ onBackToPicker }: HeroApertureProps) {
  const [loaded, setLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className={`hero-aperture ${loaded ? 'loaded' : ''}`}>
      {/* Camadas decorativas: imagem de fundo + overlay + grid (Figma) */}
      <div
        className="hero-aperture-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="hero-aperture-overlay" aria-hidden />
      <div className="hero-aperture-grid" aria-hidden />

      <div className="hero-aperture-container">
        <header className="hero-aperture-header">
          <div className="hero-aperture-logo">
            <span className="hero-aperture-logo-icon" aria-hidden />
            <span className="hero-aperture-logo-text">APERTURE</span>
          </div>
          <p className="hero-aperture-tagline">
            Film Production
            <br />
            Based in Scotland, UK
          </p>
          <nav className="hero-aperture-nav">
            <a href="#work">Work</a>
            <span className="hero-aperture-nav-sep">Services</span>
            <span className="hero-aperture-nav-sep">About</span>
          </nav>
          <a href="#contact" className="hero-aperture-cta">
            Work with Us
          </a>
        </header>

        <div className="hero-aperture-main">
          <section className="hero-aperture-left">
            <div className="hero-aperture-video-zone">
              <div className="hero-aperture-glows" aria-hidden />
              <button
                type="button"
                className={`hero-aperture-play ${playing ? 'is-playing' : ''}`}
                aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                onClick={toggleVideo}
              >
                <span className="hero-aperture-play-icon" />
              </button>
              <div className="hero-aperture-video-box">
                <video
                  ref={videoRef}
                  className="hero-aperture-video"
                  src={heroVideo}
                  poster={heroVideoBg}
                  loop
                  muted
                  playsInline
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />
              </div>
            </div>
            <h2 className="hero-aperture-title">ICELAND 2025</h2>
          </section>

          <p className="hero-aperture-scroll-hint">(Scroll)</p>

          <div className="hero-aperture-right">
            <img
              src={filmImage}
              alt="FILM"
              className="hero-aperture-film"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-aperture-back"
        onClick={onBackToPicker}
      >
        Voltar aos designers
      </button>
    </div>
  )
}
