import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import GetStarted from './components/GetStarted'

function App() {
  const [view, setView] = useState<'landing' | 'get-started'>('landing')

  if (view === 'get-started') {
    return <GetStarted onBack={() => setView('landing')} />
  }

  return <Landing onGetStarted={() => setView('get-started')} />
}

export default App
