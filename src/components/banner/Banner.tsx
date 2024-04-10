import React from 'react'
interface BannerProps {
  imageSrc: string
  altText: string
  title?: string
  className?: string
}

const Banner: React.FC<BannerProps> = ({ imageSrc, altText, title, className = '' }) => {
  return (
    <div className={`banner__container ${className}`}>
      <img src={imageSrc} className={`banner__image ${className}`} alt={altText} />
      {title && <h1 className='banner__title'>{title}</h1>}
    </div>
  )
}

export default Banner
