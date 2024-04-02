import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'
import logements from '../../data/logements.json'

const Gallery: React.FC = () => {
  return (
    <div className='gallery'>
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id} className='gallery__link'>
          <Card title={logement.title} cover={logement.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Gallery
