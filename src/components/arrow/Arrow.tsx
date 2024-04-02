import React from 'react'
import './_Arrow.scss'

interface ArrowProps {
  isOpen: boolean
  onClick: () => void
}

const Arrow: React.FC<ArrowProps> = ({ isOpen, onClick }) => {
  return (
    <div className={`arrow ${isOpen ? 'open' : ''}`} onClick={onClick}>
      ^
    </div>
  )
}

export default Arrow
