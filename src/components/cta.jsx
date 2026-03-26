
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"

/**
 * Emergency CTA section used on the homepage.
 *
 * @description
 * Chooses the primary contact action based on device type:
 * - Mobile users get a direct `tel:` call action.
 * - Non-mobile users get a WhatsApp deep link.
 *
 * @returns {JSX.Element} CTA block with call/chat and contact message actions.
 *
 * @note
 * Device detection is user-agent based and may not be perfect for all browsers.
 */
function Cta() {
    const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    /**
     * Determines whether the client appears to be a mobile device.
     *
     * @returns {void}
     */
    const checkDevice = () => {
      setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
    }

    // Run once on mount to choose the most useful contact link format.
    checkDevice()
  }, [])

  const phoneNumber = "+254700000000"
  return (
    <div >

<section className="py-16 bg-bg-main">
  <div className="container mx-auto max-w-6xl px-4 py-16 bg-white rounded-2xl ">
    <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Need Immediate Veterinary Assistance?</h2>
      <p className="text-md max-w-2xl mx-auto mb-6">
Our team is available 24/7 for emergencies. Don't hesitate to reach out for urgent <br /> care.      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
      href={
        isMobile
          ? `tel:${phoneNumber}`
          : `https://wa.me/${phoneNumber.replace("+", "")}`
      }
      target={!isMobile ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="bg-border text-text-black font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2 hover:bg-gold-main hover:text-white"
    >
      {isMobile ? (
        <>
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.85 19.85 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.3 12.3 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.17a2 2 0 0 1 2.11-.45 12.3 12.3 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </>
      ) : (
        <>
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#25D366"
            className="w-5 h-5"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.49 0 .11 5.38.11 11.95c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.86 1.5h.01c6.57 0 11.95-5.38 11.95-11.95 0-3.19-1.24-6.18-3.5-8.44z" />
          </svg>
          Chat on WhatsApp
        </>
      )}
    </a>
        <Link
  to="/contact"
  className="bg-gold-main text-text-black font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center hover:bg-gold-dark"
>
  Send us a message
</Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cta
