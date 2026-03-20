import React from 'react'

function ourServices() {
  return (
   
     
      <div className="bg-bg-main min-h-0 flex items-center justify-center p-4">
<section className="py-20 bg-bg-main ">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <div className="transition-all duration-1000 ease-out">
                <h2 className="mb-4 text-4xl font-bold text-text-black sm:text-5xl dark:text-white">
                    Our Core Services
                </h2>
                <p className="mx-auto text-xl text-gray-600 dark:text-gray-300">Comprehensive veterinary care tailored to your animal’s needs </p>
            </div>
        </div>
        <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
            <div className={`group transition-all duration-1000 ease-out delay-200 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 `}>
                <div className="items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex w-[64px] h-[64px] mb-6 rounded-full bg-blue-100 dark:bg-blue-900">
                    <div>
                        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Preventive & Wellness
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">Routine health checks, vaccinations, and de-worming to keep your animals healthy</p>
               
            </div>
            <div className={`group transition-all duration-1000 ease-out delay-400 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 `}>
                <div className="items-center justify-center group-hover:bg-green-600 transition-colors duration-300 flex w-[64px] h-[64px] mb-6 rounded-full bg-green-100 dark:bg-green-900">
                    <div>
                        <svg className="w-8 h-8 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Diagnostics
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300"> In-house lab testing, X-rays, and ultrasound imaging for accurate diagnosis.</p>
                
            </div>
            <div className={`group transition-all duration-1000 ease-out delay-600 p-8 rounded-2xl bg-bg-main border-b-2 border-border`}>
                <div className="items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 flex w-[64px] h-[64px] mb-6 rounded-full bg-purple-100 dark:bg-purple-900">
                    <div>
                        <svg className="w-8 h-8 text-text-black dark:text-purple-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path></svg>
                    </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-text-black dark:text-white">
                    Surgery
                </h3>
                <p className="mb-6 text-tet-black dark:text-gray-300">Soft tissue and orthopedic surgery, dental cleaning, and emergency care.</p>
                
            </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className='bg-white hover:bg-gold-main text-text-black font-semibold rounded-lg px-8 py-3 transition-colors duration-300'><a href="#services">View All Services</a></button>
        </div>
    </div>
</section>
</div>
   
    
  )
}

export default ourServices

