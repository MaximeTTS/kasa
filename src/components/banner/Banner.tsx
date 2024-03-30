import React from 'react'
import banner__home from '../../img/banner/home_banner.png'

const Banner: React.FC = () => {
  return (
    <div className='banner__container'>
      <img src={banner__home} className='banner__home' alt='Bannière page accueil' />
      <h1 className='banner__title'>Chez vous, partout ailleurs</h1>
    </div>
  )
}

export default Banner
