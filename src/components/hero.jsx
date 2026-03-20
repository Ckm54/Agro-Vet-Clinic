import React from 'react'

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
          <a href="#"
            className="px-8 py-3.5 rounded-lg btn-gradient text-text-black font-semibold bg-gold-main hover:shadow-xl transition-all duration-300">
            Talk to Us
          </a>
          <a href="#"
            className="px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300">
            Our Sevices
          </a>
        </div>

        
      </div>

      {/* Right content - Illustration */}
      <div className="relative animate__animated animate__fadeIn">
        <div className="relative max-w-md mx-auto">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-2xl -z-10 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-2xl -z-10 animate-float-reverse">
          </div>
          <img className="relative rounded-xl shadow-2xl border-8 border-white" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Digital Marketing"/>
        </div>
        <div className="absolute -bottom-8 left-3/4 bg-green-500 px-6 py-3 rounded-lg shadow-sm flex items-center gap-3 hover:bg-green-600 transition-all duration-300 cursor-pointer text-sm" >
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white ">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.557 4.07 1.503 5.794L0 24l6.348-1.498C8.014 23.322 9.97 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.961 0-3.832-.507-5.438-1.386l-.39-.191-4.047.959.978-3.989-.198-.409C1.436 15.63 1 13.903 1 12c0-5.522 4.478-10 10-10s10 4.478 10 10-4.478 10-10 10zm5.516-7.5c-.3-.15-1.782-.882-2.057-.983-.275-.101-.475-.15-.675.15-.2.299-.775.982-.952 1.181-.177.199-.354.224-.654.074-.3-.15-1.263-.467-2.406-1.486-.89-.795-1.492-1.77-1.665-2.07-.174-.299-.018-.46.13-.609.134-.134.3-.35.45-.525.149-.175.199-.299.298-.498.099-.199.05-.374-.024-.523-.074-.149-.675-1.624-.924-2.224-.242-.585-.487-.506-.675-.516-.174-.009-.375-.01-.575-.01-.2 0-.524.074-.799.373-.275.298-1.049 1.024-1.049 2.494 0 1.47 1.074 2.893 1.224 3.092.15.2 2.115 3.231 5.124 4.529.716.31 1.275.495 1.708.633.717.232 1.368.199 1.876.121.572-.086 1.762-.722 2.01-1.419.249-.698.249-1.295.175-1.419-.074-.124-.275-.198-.575-.347z"/>
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
