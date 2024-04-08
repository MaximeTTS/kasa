import React from 'react'
import Carousel from '../carrousel/CarrouselImage'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import LogementText from '../../components/carrousel/CarrouselText'
import Collapse from '../collapse/Collapse'

const Logement: React.FC = () => {
  const { slugId } = useParams<{ slugId?: string }>()
  const id = slugId?.split('-').pop()

  const logement = id ? logements.find((logement) => logement.id === id) : null

  if (!logement) {
    return <p>Logement non trouvé</p>
  }

  return (
    <div className='section__logement'>
      <Carousel images={logement.pictures} />
      <LogementText title={logement.title} hostName={`${logement.host.name}`} hostPicture={logement.host.picture} location={logement.location} tags={logement.tags} rating={parseInt(logement.rating, 10)} />
      <div className='section__collapse'>
        <Collapse title='Description' content={logement.description} />
        <Collapse
          title='Équipements'
          content={
            <div>
              {logement.equipments.map((equipement, index) => (
                <div key={index}>{equipement}</div>
              ))}
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Logement
