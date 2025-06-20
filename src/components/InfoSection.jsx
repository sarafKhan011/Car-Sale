import React from 'react'

function InfoSection() {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Welcome to ALM – Your Ultimate Destination for Cars
            </h2>
  
            <p className="mt-4 text-gray-700">
            Discover a wide range of new and used vehicles tailored to fit every lifestyle and budget. 
            At ALM-Cars, we bring you the best in performance, style, and value—from compact city rides to rugged SUVs and luxury sedans. 
            Whether you're buying, selling, or just browsing, our easy-to-use platform makes your car journey smooth and hassle-free.
            Explore detailed listings, compare features, book test drives, and get expert advice—all in one place. Drive your dream. Start with ALM-Cars.
            </p>
          </div>
        </div>
  
        <div>
          <img
            src="https://img.freepik.com/free-photo/view-3d-car_23-2150796980.jpg?uid=R179153757&ga=GA1.1.1365152006.1744444767&semt=ais_hybrid&w=740"
            className="rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection