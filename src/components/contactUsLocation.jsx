import React from 'react'
import location from "../contactUsAssets/LocationIcon.png"
import clock from "../contactUsAssets/clock.png"

/**
 * Contact page location and operations section.
 *
 * @description
 * Presents service coverage, operating hours, and an embedded Google Map.
 *
 * @returns {JSX.Element} Service area details with map embed.
 *
 * @note
 * The map uses static coordinates in the iframe URL. Update the `src` query
 * values when location coordinates change.
 */
function ContactUsLocation() {
  return (
    <div>
      <section className="bg-bg-main">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Service Area</h2>
            <p className="mt-4 text-lg text-gray-500">
              Based in Kisii, we provide mobile veterinary services across Kisii, Nyamira, and the entire Nyanza region.
              We are equipped with modern veterinary skills, facilities, and we bring our expertise directly to your farm or home.
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Service Area</h3>
                    <p className="mt-1 text-gray-600">
                      Based in Kisii, we provide mobile veterinary services across Kisii, Nyamira, and the entire Nyanza region.
                      We are equipped with modern veterinary skills, facilities, and we bring our expertise directly to your farm or home.
                    </p>
                  </div>

                 

                  {/* SERVICE COVERAGE */}
                  <div className="border-t border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img src={location} alt="location" className="w-5 h-5" />
                      <h3 className='text-lg font-medium text-text-black'>Service Coverage</h3>
                    </div>
                    <ul className="mt-2">
                      <li>Kisii County</li>
                      <li>Nyamira County</li>
                      <li>Entire Nyanza Region</li>
                    </ul>
                  </div>

                  {/* OPERATING HOURS */}
                  <div className="border-t border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img src={clock} alt="clock" className="w-5 h-5" />
                      <h3 className='text-lg font-medium text-text-black'>Operating Hours</h3>
                    </div>
                    <ul className="mt-2">
                      <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                      <li>Saturday: 9:00 AM - 4:00 PM</li>
                      <li>Sunday: Closed (Emergency services available)</li>
                      <li className='font-medium'>Mobile Emergency Service: 24/7</li>
                    </ul>
                  </div>

                </div>
              </div>

  <div className="rounded-lg overflow-hidden">
  <iframe
    title="Vet Zone location map"
    src="https://www.google.com/maps?q=-0.6817,34.7667&hl=en&z=14&output=embed"
    width="100%"
    height="480"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsLocation
