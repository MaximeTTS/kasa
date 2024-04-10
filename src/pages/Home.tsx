import React from 'react'
import BannerHome from '../components/bannerHome/BannerHome'
import Card from '../components/card/Card'
import logements from '../data/logements.json'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <BannerHome />
        <div className='gallery'>
          {logements.map((logement) => {
            const path = `/logement/${logement.id}` // Utiliser directement l'ID pour le chemin
            return (
              <Card
                key={logement.id}
                title={logement.title}
                cover={logement.cover}
                path={path} // Passer le chemin en tant que prop
              />
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
