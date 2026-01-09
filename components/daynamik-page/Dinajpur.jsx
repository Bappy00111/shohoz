import Image from 'next/image'
import React from 'react'
import AttractionsSection from '../features/attractions/AttractionsSection'
import MobileAppPromo from '../features/bus/MobileAppPromo'

export default function Dinajpur() {
  return (
    <div>

          <div className="w-full">
            {/* HERO IMAGE */}
            <div className="relative w-full h-[420px]">
              <Image
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/55/96/11/kantajew-temple-kantajew.jpg?w=500&h=500&s=1"
                alt="Chittagong"
                fill
                className="object-center"

              />
            </div>

            {/* CONTENT SECTION */}
            <div className="bg-[#f6f8f7] py-16">
              <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* TEXT */}
                <div className="max-w-xl">
                  <h1 className="text-3xl font-bold text-green-600 mb-4">
                   Dinajpur
                  </h1>

                  <p className="text-gray-700 leading-relaxed">
                   Dinajpur is a city where history, culture, and nature come alive together.
                    Known for its ancient seaport, scenic hills, and vibrant cultural mix,
                    it offers a unique blend of heritage and natural beauty—making it a
                    captivating destination for travelers.
                  </p>
                </div>

                {/* BUTTON */}
                <div>
                  <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium">
                    Search for Tickets
                    <span className="text-lg">→</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          <AttractionsSection />
          <MobileAppPromo />
        </div>
  )
}
