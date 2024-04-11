import React, { useState } from 'react'

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = images.length

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className='carousel-container'>
      {totalSlides > 1 && (
        <>
          <button className='carousel-prev' onClick={prevSlide}>
            <img src={require('../../img/carrousel/flech_left.png')} alt='Précédent' />
          </button>
          <button className='carousel-next' onClick={nextSlide}>
            <img src={require('../../img/carrousel/flech_right.png')} alt='Suivant' />
          </button>
          <div className='carousel-counter'>{`${currentSlide + 1} / ${totalSlides}`}</div>
        </>
      )}
      <div className='carousel-slide'>
        <div className='image-container'>
          <img src={images[currentSlide]} alt={`Image du logement ${currentSlide + 1}`} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
