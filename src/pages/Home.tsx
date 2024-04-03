import React from 'react'
import Banner from '../components/banner/Banner'
import { Link } from 'react-router-dom'
import Card from '../components/card/Card'
import logements from '../data/logements.json'
import slugify from '../helpers/slugify'

const Home: React.FC = () => {
  return (
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
  )
}

export default Home
