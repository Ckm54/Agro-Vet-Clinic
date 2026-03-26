import React from 'react'

/**
 * Emergency guidance CTA on services page.
 *
 * @description
 * Highlights 24/7 emergency availability and lists example situations where
 * immediate veterinary support is recommended.
 *
 * @returns {JSX.Element} Two-column emergency callout section.
 *
 * @edgecase
 * The hotline anchor uses `tel:` to trigger a direct call on supported devices.
 */
function servicescta() {
  return (
    <div className=''>
      <section className="relative overflow-hidden font-poppins bg-bg-main text-text-black mb-0">
  

  {/* Main content */}
  <div className="max-w-7xl px-4 py-24 md:py-32 bg-white rounded-2xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="text-center md:text-left">
        <div className=''>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-4 flex items-center gap-2">
                24/7 Emergency Care
            </span>
        </div>
        
        <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight mb-6">
          Always Here When You Need Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
Animal emergencies don't follow a schedule. That's why our emergency veterinary services are available 24 hours a day, 7 days a week. Call us immediately if your animal needs urgent care.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="tel:+254700000000"
            className="px-8 py-3.5 rounded-lg btn-gradient text-text-black font-semibold bg-gold-main hover:shadow-xl transition-all duration-300">
           Call our emergency hotline: +254 700 000000
          </a>
          
        </div>

        
      </div>

      {/* Right content - Illustration */}
      <div className="relative animate__animated animate__fadeIn">
  <div className="relative max-w-md mx-auto bg-pink px-6 sm:px-8 lg:px-10 py-20 md:py-20 rounded-xl">
    {/* Decorative floating shapes */}
    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-xl -z-10 animate-float"></div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 rounded-2xl -z-10 animate-float-reverse"></div>

    {/* Heading */}
    <h1 className="text-2xl font-bold mb-6">When to call emergency services</h1>

    {/* List */}
    <ul className="space-y-4">
      {[
        "Severe animal injury or trauma",
        "Difficulty breathing",
        "Sudden collapse or unconsciousness",
        "Prolonged seizures",
        "Severe bleeding",
        "Birthing complications (dystocia)"
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          {/* Icon at the start */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-600 mt-1 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-text-black">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

    </div>
  </div>
</section>
    </div>
  )
}

export default servicescta
