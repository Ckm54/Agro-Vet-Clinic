import React, { useState } from 'react'

function Navbar() {
  const [activePage, setActivePage] = useState('AboutUs')

  const handleNavClick = (page) => {
    setActivePage(page)
  }

  const getLinkClass = (page) => {
    const baseClass = "md:p-4 py-3 px-0 block"
    return activePage === page 
      ? `${baseClass} font-bold underline` 
      : baseClass
  }

  return (
    <div className='bg-bg-main border-b-2 border-border'>
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl text-text-color-black font-semibold font-lg ">Vet <span className='text-gold-main'>Zone</span></a>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-text-color-black font-semibold pt-4 md:pt-0">
                <li><a className={getLinkClass('Home')} href="#" onClick={() => handleNavClick('Home')}>Home</a></li>
                <li><a className={getLinkClass('Services')} href="#services" onClick={() => handleNavClick('Services')}>Services</a></li>
                <li><a className={getLinkClass('Contact Us')} href="#contactus" onClick={() => handleNavClick('Contact Us')}>Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>
    </div>
  )
}

export default Navbar