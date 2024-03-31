import React, { FunctionComponent } from 'react'
import './_App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import NotFoundPage from './pages/NotFoundPage'

const App: FunctionComponent = () => {
  return (
    // Utilise BrowserRouter pour englober les Routes
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path='/about' element={<About />} /> {/* Route pour la page À Propos */}
        <Route path='/logement' element={<Logement />} /> {/* Route pour la page Logement */}
        <Route path='*' element={<NotFoundPage />} /> {/* Route pour les chemins non trouvés */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
