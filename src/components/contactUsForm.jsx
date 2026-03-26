import React from 'react'
import sendMessageIcon from "../contactUsAssets/SendMessageIcon.png"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

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
    const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // replace
        "YOUR_TEMPLATE_ID",    // replace
        formRef.current,
        "YOUR_PUBLIC_KEY"      // replace
      )
      .then(
        () => {
          alert("Message sent successfully!")
        },
        (error) => {
          console.error(error)
          alert("Failed to send message")
        }
      )
  }

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
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-text-black">
            Full name
          </label>
          <input
            type="text"
            name="firstName"
            className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3"
            placeholder='John Doe'
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-black">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3"
             placeholder="+254700000000"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-text-black">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text-black">
            Animal type
          </label>
          <select
            name="animalType"
            className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3"
            required
          >
            <option value="">Select animal type</option>
            <option value="Cattle">Cattle</option>
            <option value="Goats & Sheep">Goats & Sheep</option>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Poultry">Poultry</option>
            <option value="Horses & Donkeys">Horses & Donkeys</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-text-black">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="w-full border border-gray-300 rounded-md bg-bg-main px-4 py-3"
          placeholder="Describe your inquiry..."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold-main rounded-md px-6 py-3 text-sm font-medium text-text-black flex items-center justify-center gap-2"
      >
        Send Message
        <img src={sendMessageIcon} alt="send" className="w-4 h-4" />
      </button>
    </form>



      </div>
    </section>
    </div>
  )
}

export default ContactUsForm
