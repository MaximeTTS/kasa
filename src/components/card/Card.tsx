// src/components/Card.tsx
import React from 'react'

interface CardProps {
  title: string
  cover: string
}

const Card: React.FC<CardProps> = ({ title, cover }) => {
  return (
    <div className='card'>
      <img src={cover} alt={title} className='card__image' />
      <div className='card__overlay'></div> {/* Overlay pour le dégradé */}
      <div className='card__title'>{title}</div>
    </div>
  )
}

export default Card
