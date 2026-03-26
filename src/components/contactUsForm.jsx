import React from 'react'
import sendMessageIcon from "../contactUsAssets/SendMessageIcon.png"

/**
 * Contact form section.
 *
 * @description
 * Renders a static inquiry form for visitors to submit contact details,
 * animal type, and message content.
 *
 * @returns {JSX.Element} Contact form UI block.
 *
 * @note
 * This form is currently UI-only and has no submit handler or API integration.
 * Browser-native HTML validation (`required`, email type) is used.
 *
 * @edgecase
 * Field `id`/`name` attributes are used for HTML validation and future form
 * integration; keep them unique to preserve label targeting.
 */
function ContactUsForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-main py-12 px-4">
      <section className="w-full max-w-2xl">
      <div className="rounded-none bg-bg-main p-8 shadow-sm">
       {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            
          </div>
          <h1 className="mb-2 text-2xl font-bold text-text-black">Send us a message</h1>
          <p className="text-sm text-text-black">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-text-black">Full name</label>
      <input type="text" id="firstName" name="firstName" className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3 text-text-black focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="John" required />
    </div>
    <div>
      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-text-black">Phone number</label>
      <input type="tel" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3 text-text-black focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="Doe" required />
    </div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="emailAddress" className="mb-2 block text-sm font-medium text-text-black">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        className="w-full border border-gray-300 bg-bg-main rounded-md px-4 py-3 text-text-black focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
        placeholder="John"
        required
      />
    </div>
    <div>
      <label htmlFor="animalType" className="mb-2 block text-sm font-medium text-text-black">Animal type</label>
      <select id="animalType" name="animalType" className="w-full border border-gray-300 bg-bg-main rounded-md px-4 py-3 text-text-black focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" required>
        <option value="">Select animal type</option>
        <option value="cattle">Cattle</option>
        <option value="goats_sheep">Goats & Sheep</option>
        <option value="dogs">Dogs</option>
        <option value="cats">Cats</option>
        <option value="poultry">Poultry</option>
        <option value="horses_donkeys">Horses & Donkeys</option>
      </select>
    </div>
  </div>

  <div>
    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-black">Message</label>
    <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none" placeholder="Please describe your inquiry or the services you need..." required />
  </div>

  <button
  type="submit"
  className="w-full bg-gold-main rounded-md px-6 py-3 text-sm font-medium text-text-black transition-colors flex items-center justify-center gap-2"
>
  Send Message
  <img src={sendMessageIcon} alt="send message" className="w-4 h-4" />
</button>

</form>



      </div>
    </section>
    </div>
  )
}

export default ContactUsForm
