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
      <h3 className='card__title'>{title}</h3>
    </div>
  )
}

export default Card
