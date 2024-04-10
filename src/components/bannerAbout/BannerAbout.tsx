import React from 'react'
import Banner from '../banner/Banner'
import banner__about from '../../img/banner/about_banner.png'

const AboutBanner = () => {
  return <Banner imageSrc={banner__about} altText='Bannière page à propos' className='banner__about' />
}

export default AboutBanner
