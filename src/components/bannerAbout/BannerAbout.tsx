import React from 'react'
import banner__about from '../../img/banner/about_banner.png'

const BannerAbout: React.FC = () => {
  return (
    <div className='banner__container'>
      <img src={banner__about} className='banner__about' alt='Bannière page à propos' />
    </div>
  )
}

export default BannerAbout
