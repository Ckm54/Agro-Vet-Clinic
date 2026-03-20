import React from 'react'

function Cta() {
  return (
    <div >

<section className="py-16 bg-bg-main">
  <div className="container mx-auto max-w-6xl px-4 py-16 bg-white rounded-2xl ">
    <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Need Immediate Veterinary Assistance?</h2>
      <p className="text-md max-w-2xl mx-auto mb-6">
Our team is available 24/7 for emergencies. Don't hesitate to reach out for urgent <br /> care.      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="bg-border text-text-black font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.85 19.85 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.3 12.3 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.17a2 2 0 0 1 2.11-.45 12.3 12.3 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Now: +254 700 000000
        </a>
        <a href="tel:+917307022824"
          className="bg-gold-main text-text-black font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center">
          Send us a message
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cta
