import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function ValueProp() {
  const swiperRef = useRef(null)

  const images = [
    'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&h=400&fit=crop', // cattle
    'https://images.unsplash.com/photo-1579741314855-a355579c0b60?w=500&h=400&fit=crop', // goats & sheep
    'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=500&h=400&fit=crop', // dogs
    'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=500&h=400&fit=crop', // cats
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop', // poultry
    'https://images.unsplash.com/photo-1519068739265-f437427139f6?w=500&h=400&fit=crop', // horses & donkeys
  ]

  const labels = ['Cattle', 'Goats & Sheep', 'Dogs', 'Cats', 'Poultry', 'Horses & Donkeys']

  return ( 
    <div className='bg-bg-main'>
    <section className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="space-y-12">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            We Care For All Your Animals
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
From farm livestock to household pets, we handle a wide range of animals.          </p>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            centeredSlides={false}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={labels[idx]}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm sm:text-base px-3 py-2 rounded-lg">
                    {labels[idx]}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19l7-7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ValueProp
