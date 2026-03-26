import Navbar from '../components/navbar'
import Hero from '../components/hero'
import OurServices from '../components/ourServices'
import ValueProp from '../components/animalSlider'
import Cta from '../components/cta'
import Footer from '../components/footer'

/**
 * Home page composition component.
 *
 * @description
 * Assembles all homepage sections in visual order.
 *
 * @returns {JSX.Element} Complete home page layout.
 */
function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurServices/>
      <ValueProp/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home
