import React from 'react'
import Carousel from '../carrousel/CarrouselImage'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'

const LogementImage: React.FC = () => {
  const { slugId } = useParams<{ slugId?: string }>()
  const id = slugId?.split('-').pop()

  const logement = id ? logements.find((logement) => logement.id === id) : null

  if (!logement) {
    return <p>Logement non trouvé</p>
  }

  return (
    <div className='section__logement'>
      <Carousel images={logement.pictures} />
      {/* Affichage d'autres détails du logement ici */}
    </div>
  )
}

export default LogementImage
