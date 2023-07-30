import React from 'react'

export default function Cta() {
  return (
    <section className="relative py-16 bg-gray-900">
    <div
      className="absolute inset-0 bg-black opacity-25"
      style={{
        backgroundImage: "url('/cta.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-16 lg:items-center lg:gap-16">
        <div className="md:w-6/12 lg:w-6/12">
          <h1 className="text-white text-center font-bold text-2xl md:text-4xl lg:text-3xl md:text-left lg:text-left">
            Masih kebingungan punya acara tp masih mikirin KATERING nya?
          </h1>
          <p className="text-lg text-center text-white md:text-left lg:text-left">
            <span className="text-white">SateGuleSkuy</span> datang membantu
            SOLUSI kebingungan kamu.
          </p>
        </div>
        <div className="md:w-6/12 lg:w-6/12">
          <button
            type="button"
            className="border border-red-700 bg-red-900 text-white rounded-md px-6 py-2 mt-4 transition duration-500 ease select-none hover:bg-gray-600 focus:outline-none focus:shadow-outline"
          >
            Pesan Sekarang!
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
