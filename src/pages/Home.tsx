import React from 'react'
import Banner from '../components/banner/Banner'
import { Link } from 'react-router-dom'
import Card from '../components/card/Card'
import logements from '../data/logements.json'
import slugify from '../helpers/slugify'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Home: React.FC = () => {
  return (
    <body>
      <Header />
      <main>
        <Banner />
        <div className='gallery'>
          {logements.map((logement) => {
            const slug = slugify(logement.title)
            return (
              <Link to={`/logement/${slug}-${logement.id}`} key={logement.id} className='gallery__link'>
                <Card title={logement.title} cover={logement.cover} />
              </Link>
            )
          })}
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default Home
