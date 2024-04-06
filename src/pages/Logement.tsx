import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LogementImage from '../components/logementImage/LogementImage'

const Logement: React.FC = () => {
  return (
    <body>
      <Header />
      <main>
        <div className='section__logement'>
          <LogementImage />
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default Logement
