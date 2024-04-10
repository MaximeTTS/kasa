import React from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  title: string
  cover: string
  path: string
}

const Card: React.FC<CardProps> = ({ title, cover, path }) => {
  return (
    <Link to={path} className='card'>
      <img src={cover} alt={title} className='card__image' />
      <div className='card__overlay'></div> {/* Overlay pour le dégradé */}
      <div className='card__title'>{title}</div>
    </Link>
  )
}

export default Card
