import React from 'react'
import Nav from '../nav/Nav'
import logo from '../../img/logo/logo_header.png'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logo} className='logo__header' alt='Kasa Logo' />
      <Nav />
    </header>
  )
}

export default Header
