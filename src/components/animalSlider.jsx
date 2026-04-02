import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import cattle from "../homeAssets/Image (46).png"
import goatsSheep from "../homeAssets/Image (47).png"
import dogs from "../homeAssets/Image (48).png"
import cats from "../homeAssets/Image (49).png"
import poultry from "../homeAssets/Image (50).png"
import horsesDonkeys from "../homeAssets/Image (51).png"

/**
 * Responsive animal showcase slider.
 *
 * @description
 * Displays a looping carousel of animal images using Swiper with autoplay
 * and manual next/previous controls.
 *
 * @returns {JSX.Element} Slider section with heading and navigation buttons.
 *
 * @note
 * `images` and `labels` arrays are index-coupled. Keep both arrays aligned
 * when adding/removing items to avoid incorrect alt text mapping.
 */
function AnimalSlider() {
  const swiperRef = useRef(null)

  const images = [
    cattle,
    goatsSheep,
    dogs,
    cats,
    poultry,
    horsesDonkeys,
  ]

  const labels = [
    "Cattle",
    "Goats & Sheep",
    "Dogs",
    "Cats",
    "Poultry",
    "Horses & Donkeys",
  ]

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
              From farm livestock to household pets, we handle a wide range of animals.
            </p>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1800,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              {images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative overflow-hidden rounded-2xl  ">
                    <img
                      src={image}
                      alt={labels[idx]}
                      className="w-full h-full object-cover"
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
              // Optional chaining prevents runtime errors before Swiper is ready.
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              ‹
            </button>

            <button
              // Optional chaining prevents runtime errors before Swiper is ready.
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              ›
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}


export default AnimalSlider
