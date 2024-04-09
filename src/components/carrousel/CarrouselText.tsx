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
  const nameWithBreak = hostName.replace(' ', '<br />')

  return (
    <div className='details-container'>
      <div className='carrousel-info'>
        <h1 className='carrousel-title'>{title}</h1>
        <p className='carrousel-location'>{location}</p>
        <ul className='carrousel-tags'>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='host-and-rating-container'>
        <div className='host-info'>
          <div className='host-name' dangerouslySetInnerHTML={{ __html: nameWithBreak }}></div>
          <img className='host-picture' src={hostPicture} alt='Host' />
        </div>
        <div className='carrousel-rating'>{renderStars(rating)}</div>
      </div>
    </div>
  )
}

export default CarrouselText
