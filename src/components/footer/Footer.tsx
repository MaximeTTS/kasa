import React from 'react'
import logo__footer from '../../img/logo/logo_footer.png'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <img src={logo__footer} className='logo__footer' alt='Kasa Logo pour le footer' />
      <span className='footer__span'>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
