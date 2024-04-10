import React from 'react'
import Banner from '../banner/Banner'
import banner__home from '../../img/banner/home_banner.png'

const HomeBanner = () => {
  return <Banner imageSrc={banner__home} altText='Bannière page accueil' title='Chez vous, partout ailleurs' className='banner__home' />
}

export default HomeBanner
