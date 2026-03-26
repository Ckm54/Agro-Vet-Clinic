import ContactUsHero from "../components/contactUsHero"
import ContactUsLocation from "../components/contactUsLocation"
import ContactUsForm from "../components/contactUsForm"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import ContactUsCta from "../components/contactUsCta"

/**
 * Contact page composition component.
 *
 * @description
 * Renders the contact hero, form, service area/hours block, emergency CTA,
 * and footer.
 *
 * @returns {JSX.Element} Complete contact page layout.
 */
function ContactUs() {
  return (
    <div>
        <Navbar/>
      <ContactUsHero />
      <ContactUsForm/>
      <ContactUsLocation />
      <ContactUsCta/>
      <Footer/>
    </div>
  )
}

export default ContactUs
