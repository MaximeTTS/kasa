import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<Slider>(null)
  const totalSlides = images.length

  const settings = {
    dots: false,
    infinite: totalSlides > 1,
    speed: 500,
    swipe: totalSlides > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  }

  return (
    <div className='carousel-container'>
      {totalSlides > 1 ? (
        <>
          <button className='carousel-prev' onClick={() => sliderRef.current?.slickPrev()}>
            <img src={require('../../img/carrousel/flech_left.png')} alt='Précédent' />
          </button>
          <button className='carousel-next' onClick={() => sliderRef.current?.slickNext()}>
            <img src={require('../../img/carrousel/flech_right.png')} alt='Suivant' />
          </button>
          <div className='carousel-counter'>{`${currentSlide + 1} / ${totalSlides}`}</div>
        </>
      ) : null}
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={image} className='carousel-slide'>
            <div className='image-container'>
              <img src={image} alt={`Image du logement ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
