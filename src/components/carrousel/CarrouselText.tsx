import React from 'react'

interface CarrouselTextProps {
  title: string
  hostName: string
  hostPicture: string
  location: string
  tags: string[]
  rating: number
}

const renderStars = (rating: number) => {
  const totalStars = 5
  const fullStar = require('../../img/rate/star_full.png')
  const emptyStar = require('../../img/rate/start.png')
  let stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(<img key={`full-${i}`} src={fullStar} alt='Full Star' />)
  }

  for (let i = rating; i < totalStars; i++) {
    stars.push(<img key={`empty-${i}`} src={emptyStar} alt='Empty Star' />)
  }

  return stars
}

const CarrouselText: React.FC<CarrouselTextProps> = ({ title, hostName, hostPicture, location, tags, rating }) => {
  return (
    <div className='details-container'>
      <div className='top-info'>
        <div className='title-container'>
          <h1 className='carrousel-title'>{title}</h1>
        </div>
        <div className='host-info'>
          <div className='host-name'>{hostName}</div>
          <img className='host-picture' src={hostPicture} alt='Host' />
        </div>
      </div>
      <p className='carrousel-location'>{location}</p>
      <div className='bottom-info'>
        <ul className='carrousel-tags'>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className='carrousel-rating'>{renderStars(rating)}</div>
      </div>
    </div>
  )
}

export default CarrouselText
