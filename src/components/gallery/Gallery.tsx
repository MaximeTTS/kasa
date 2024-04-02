import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import logements from '../../data/logements.json'

// Fonction pour convertir un titre en slug URL-friendly
const slugify = (title: string) => {
  return title.toLowerCase().replace(/[\s\W-]+/g, '-')
}

const Gallery: React.FC = () => {
  return (
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
  )
}

export default Gallery
