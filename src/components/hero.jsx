import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from "../homeAssets/homecow-image.jpg"

/**
 * Homepage hero section.
 *
 * @description
 * Introduces the clinic, service coverage, and primary engagement actions
 * (talk/contact + WhatsApp quick chat).
 *
 * @returns {JSX.Element} Hero section with text content, image, and CTAs.
 *
 * @note
 * "Talk to Us" and "Our Sevices" links route to `/contact` and `/services`.
 */
function Hero() {
  return (
    <div>
      {/* Hero Section */}
<section className="relative overflow-hidden font-poppins bg-bg-main text-text-black mb-0">
  

  {/* Main content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="text-center md:text-left">
        <div className=''>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4 flex items-center gap-2">
                <img src="https://api.iconify.design/mdi/map-marker.svg?" alt="location" className="w-4 h-4" />
                Serving Kisii, Nyamira and Nyanza regions
            </span>
        </div>
        
        <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-6">
          Mobile Veterinary <br/>care at your doorstep
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          Professional mobile veterinary services for livestock, pets, and poultry across Kisii, Nyamira, and the entire Nyanza region. From routine check-ups to emergency care, we come to you 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg btn-gradient text-text-black font-semibold bg-gold-main hover:shadow-xl transition-all duration-300">
            Talk to Us
          </Link>
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300">
            Our Sevices
          </Link>
        </div>

        
      </div>

      {/* Right content - Illustration */}
      <div className="relative animate__animated animate__fadeIn">
  <div className="relative max-w-md mx-auto">
    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-xl -z-10 animate-float"></div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-2xl -z-10 animate-float-reverse"></div>

    {/* Square Image Wrapper */}
    <div className="w-full aspect-square">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={HeroImage}
        alt="Digital Marketing"
      />
    </div>
  </div>

  <div className="absolute -bottom-8 left-3/4 bg-light-green px-4 py-3 rounded-2xl shadow-sm flex items-center gap-3 hover:bg-green-600 transition-all duration-300 cursor-pointer text-sm">
    <a
      href="https://wa.me/254712345678"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-white"
    >
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.557 4.07 1.503 5.794L0 24l6.348-1.498C8.014 23.322 9.97 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.961 0-3.832-.507-5.438-1.386l-.39-.191-4.047.959.978-3.989-.198-.409C1.436 15.63 1 13.903 1 12c0-5.522 4.478-10 10-10s10 4.478 10 10-4.478 10-10 10z" />
      </svg>
      Chat with us
    </a>
  </div>
</div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
