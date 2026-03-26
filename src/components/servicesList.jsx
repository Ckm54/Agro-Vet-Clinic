import React from 'react'
import heartIcon from "./servicesAssets/Icon.png"
import diagnosticsIcon from "./servicesAssets/Icon (1).png"
import surgeryIcon from "./servicesAssets/Icon (2).png"
import image1 from "./servicesAssets/Screen mockup (REPLACE FILL).png"
import image2 from "./servicesAssets/Mockup wrap.png"
import image3 from "./servicesAssets/Screen mockup 3_2 (3).png"
import image4 from "./servicesAssets/Mockup wrap (1).png"
import image5 from "./servicesAssets/Mockup wrap (2).png"
import image6 from "./servicesAssets/image6.png"
import image7 from "./servicesAssets/Mockup wrap (4).png"

/**
 * Detailed services catalog section.
 *
 * @description
 * Renders multiple alternating content blocks that describe veterinary service
 * categories, each paired with an illustrative image.
 *
 * @returns {JSX.Element} Long-form services content layout.
 *
 * @note
 * This component is intentionally content-heavy; if the list grows further,
 * consider moving section data into arrays and mapping for easier maintenance.
 */
function servicesList() {
  return (
    <div>
      <section className="w-full mx-auto py-10 bg-bg-main dark:bg-gray-900 dark:text-white">

 
  <div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={heartIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Preventive & Wellness
      </h3>
      <p className="mb-6 text-text-black">
        Keep your animals healthy with regular preventive care
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Routine health examinations
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Vaccination programs
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Deworming and parasite control
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Nutrition counseling
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Health monitoring and record keeping
        </li>
      </ul>
    </div>

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image1}
        alt="billboard image"
      />
    </div>

  </div>
</div>
  <div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image2}
        alt="billboard image"
      />
    </div>

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={diagnosticsIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Diagnostics
      </h3>
      <p className="mb-6 text-text-black">
        Advanced diagnostic services for accurate health assessment
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          In-house laboratory testing
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          X-ray imaging
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Ultrasound examinations
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Blood work and analysis
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Disease screening and testing
        </li>
       
      </ul>
    </div>

  </div>
</div>
<div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={surgeryIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
       Surgery
      </h3>
      <p className="mb-6 text-text-black">
        Professional surgical procedures with expert care
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Soft tissue surgery
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Orthopedic surgery
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Dental cleaning and procedures
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Emergency surgical interventions
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Post-operative care and monitoring
        </li>
        
      </ul>
    </div>

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image3}
        alt="billboard image"
      />
    </div>

  </div>
</div>
<div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image4}
        alt="billboard image"
      />
    </div>

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={diagnosticsIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Treatment & Disease Management
      </h3>
      <p className="mb-6 text-text-black">
        Comprehensive treatment for various conditions
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Diagnosis and treatment of infections
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Managing metabolic conditions (milk fever, ketosis)
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Respiratory disease treatment
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Skin conditions and allergies
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Chronic disease management
        </li>
       
      </ul>
    </div>

  </div>
</div>
  <div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={surgeryIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
       Pet Care Services
      </h3>
      <p className="mb-6 text-text-black">
        Specialized care for your beloved pets
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Professional grooming services
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Pet relocation assistance
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Behavioral consultation
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         24-hour emergency services
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Pet boarding and daycare
        </li>
        
      </ul>
    </div>

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image5}
        alt="billboard image"
      />
    </div>

  </div>
</div>
<div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image6}
        alt="billboard image"
      />
    </div>

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={diagnosticsIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Veterinary Consultation
      </h3>
      <p className="mb-6 text-text-black"> Veterinary Consultation </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Farm management consultation
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Herd health programs
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Nutrition planning
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Disease prevention strategies
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        Production optimization
        </li>
       
      </ul>
    </div>

  </div>
</div>
<div className="w-full flex flex-col items-center md:py-4 py-10">
  <div className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-6 gap-4 justify-center items-stretch mt-4">

    {/* Text Column */}
    <div className="md:w-1/2 w-full transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white">
        <img
          className="w-8 h-8 text-text-black"
          fill="#0F0E0C"
          stroke="currentColor"
          viewBox="0 0 24 24"
          src={surgeryIcon}
          alt=""
        />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Obstetrics & Gynecology
      </h3>
      <p className="mb-6 text-text-black">
        Reproductive health services for your animals
      </p>
      <ul className="space-y-2 text-sm text-text-black">
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Artificial insemination in cows, dogs, pigs, and goats
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Early pregnancy diagnosis
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
         Calving and birthing assistance
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Calving and birthing assistance
        </li>
        <li className="flex items-center">
          <svg
            className="w-6 h-6 text-text-black mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Reproductive disease treatment
        </li>
      </ul>
    </div>

    {/* Image Column */}
    <div className="md:w-1/2 w-full">
      <img
        className="w-full h-full object-cover md:rounded-lg rounded-sm"
        src={image7}
        alt="billboard image"
      />
    </div>

  </div>
</div>
  
</section>

</div>
    
  )
}

export default servicesList
