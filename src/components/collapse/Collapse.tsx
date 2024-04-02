import React, { useState } from 'react'
import './_Collapse.scss'

interface CollapseProps {
  title: string
  content: string
}

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => setIsOpen(!isOpen)

  return (
    <div className='collapse__container'>
      <button className='collapse__button' onClick={toggleCollapse}>
        {title}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
      {isOpen && <div className='collapse__content'>{content}</div>}
    </div>
  )
}

export default Collapse
