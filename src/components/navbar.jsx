import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Top navigation component.
 *
 * @description
 * Displays brand name and primary page links, while highlighting the active
 * route based on `useLocation()`.
 *
 * @returns {JSX.Element} Responsive top navigation bar.
 *
 * @note
 * The menu toggle checkbox is currently present for mobile markup but the
 * hidden menu remains controlled by utility classes only.
 */
function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  /**
   * Builds the CSS class list for nav links.
   *
   * @param {string} path - Route path associated with a link.
   * @returns {string} Class string with active-state styling when matched.
   */
  const getLinkClass = (path) => {
    const baseClass = "md:p-4 py-3 px-0 block"
    // Keep active route obvious for quick orientation in multi-page flows.
    return currentPath === path
      ? `${baseClass} font-bold underline`
      : baseClass
  }

  return (
    <div className='bg-bg-black-main border-b-2 border-border'>
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-md">
    <div className="flex-1 flex justify-between items-center">
  <a
    href="#"
    className="text-3xl font-bold tracking-wide text-white transition-all duration-300 hover:scale-105"
  >

    <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent ml-1">
      Mona
    </span>
  </a>
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
            <ul className="md:flex items-center justify-between text-base text-white font-semibold pt-4 md:pt-0">
                <li><Link className={getLinkClass('/')} to="/">Home</Link></li>
                <li><Link className={getLinkClass('/services')} to="/services">Services</Link></li>
                <li><Link className={getLinkClass('/contact')} to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </div>
</header>
    </div>
  )
}

export default Navbar