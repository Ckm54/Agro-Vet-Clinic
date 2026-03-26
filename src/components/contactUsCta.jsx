import React from 'react'

/**
 * Contact page emergency CTA.
 *
 * @description
 * Emphasizes emergency support availability and provides a direct click-to-call
 * hotline link.
 *
 * @returns {JSX.Element} Emergency callout with telephone action.
 *
 * @note
 * Keep hotline number aligned with values in `cta.jsx` and `servicescta.jsx`
 * to avoid conflicting contact information.
 */
function contactUsCta() {
  return (
    <div>
      <section className="py-16 bg-pink">
  <div className=" mx-auto max-w-6xl px-4 py-16  rounded-2xl ">
    <div className=" rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
        <span className='text-red font-md'>24/7 Emergency Care</span>
      <h2 className="text-3xl font-bold mb-4">Emergency Assistance</h2>
      <p className="text-md max-w-2xl mx-auto mb-6">
For urgent veterinary care, please call our emergency hotline.    </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        <a href="tel:+254 700 000000"
          className="bg-red text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center">
          Call our emergency hotline: +254 700 000000
        </a>
      </div>
    </div>
  </div>
</section> 
    </div>
  )
}

export default contactUsCta
