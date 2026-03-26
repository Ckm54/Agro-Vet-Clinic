import React from 'react'
import Navbar from '../components/navbar'
import ServicesHero from '../components/servicesHero'
import ServicesList from '../components/servicesList'
import Servicescta from '../components/servicescta'
import ServicesCta2 from '../components/servicesCta2'
import Footer from '../components/footer'

/**
 * Services page composition component.
 *
 * @description
 * Renders the services hero, detailed service list, emergency call-to-action,
 * appointment call-to-action, and footer.
 *
 * @returns {JSX.Element} Complete services page layout.
 */
function Services() {
  return (
    <div>
      <Navbar />
        <ServicesHero />
     <ServicesList/>
     <Servicescta/>
     <ServicesCta2/>
      <Footer />
    </div>
  )
}

export default Services
