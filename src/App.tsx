import { useState } from 'react'
import './App.css'
import DesignerPicker from './components/DesignerPicker'
import Landing from './components/Landing'
import GetStarted from './components/GetStarted'
import HeroAperture from './designers/hero-aperture/HeroAperture'
import PortfolioFrame from './designers/portfolio-frame/PortfolioFrame'

type View = 'picker' | 'designer1' | 'designer2' | 'designer3' | 'designer1-get-started'

function App() {
  const [view, setView] = useState<View>('picker')

  const goToPicker = () => setView('picker')

  if (view === 'picker') {
    return (
      <DesignerPicker
        onSelectDesigner={(id) => setView(id)}
      />
    )
  }

  if (view === 'designer2') {
    return <HeroAperture onBackToPicker={goToPicker} />
  }

  if (view === 'designer3') {
    return <PortfolioFrame onBackToPicker={goToPicker} />
  }

  if (view === 'designer1-get-started') {
    return (
      <GetStarted
        onBack={() => setView('designer1')}
        onBackToPicker={goToPicker}
      />
    )
  }

  return (
    <Landing
      onGetStarted={() => setView('designer1-get-started')}
      onBackToPicker={goToPicker}
    />
  )
}

export default App
