import React from 'react'

/**
 * Appointment CTA section on services page.
 *
 * @description
 * Provides a straightforward prompt and click-to-call action for appointment
 * scheduling or service inquiries.
 *
 * @returns {JSX.Element} Final services page call-to-action block.
 *
 * @note
 * Phone number is hardcoded in the `tel:` link and should be kept consistent
 * with other CTA/contact components.
 */
function servicesCta2() {
  return (
    <div>
     <section className="py-16 bg-bg-main">
  <div className="container mx-auto max-w-7xl px-4 py-16 bg-white rounded-2xl ">
    <div className="bg-green rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to schedule an appointment?</h2>
      <p className="text-md max-w-2xl mx-auto mb-6">
Contact us today to book a consultation or learn more about our services.    </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        <a href="/contact"
          className="bg-gold-main text-text-black font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center">
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</section> 
    </div>
  )
}

export default servicesCta2
