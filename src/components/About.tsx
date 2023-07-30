import React from 'react'
import Image from 'next/image'

import { FiCheckCircle, FiStar } from "react-icons/fi";

export default function About() {
  return (
    
    <section className="bg-red-800">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-12 px-6 pt-12 pb-24 sm:px-6 sm:pb-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className="lg:w-10/12 lg:pl-8">
        <Image
          src="/about.webp"
          className="relative"
          alt="food illustration"
          loading="lazy"
          width="4500"
          height="4500"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          Tentang <span className="text-gray-100">SateGuleSkuy</span>
        </h2>
        <p className="mt-4 text-gray-100">
          Kami adalah pilihan utama untuk acara Aqiqoh Anda! Dengan keahlian
          dalam menyajikan sate kambing lezat yang berbahan baku segar dan
          berkualitas, kami siap membuat momen Aqiqoh Anda menjadi tak
          terlupakan. Hidangkan hidangan penuh kenangan dengan rasa autentik
          yang tak tertandingi.
        </p>

        <div className="pt-4">
          <dt className="flex items-center font-medium text-gray-100">
            <FiCheckCircle className="h-5 w-5 text-gray-100 mr-2" />
            Sate Kambing
          </dt>
          <dt className="flex items-center font-medium text-gray-100">
            <FiCheckCircle className="h-5 w-5 text-gray-100 mr-2" />
            Gule Kambing
          </dt>
          <dt className="flex items-center font-medium text-gray-100">
            <FiCheckCircle className="h-5 w-5 text-gray-100 mr-2" />
            Sate Ayam
          </dt>
          <dt className="flex items-center font-medium text-gray-100">
            <FiCheckCircle className="h-5 w-5 text-gray-100 mr-2" />
            Sate Bumbu
          </dt>
          <dt className="flex items-center font-medium text-gray-100">
            <FiCheckCircle className="h-5 w-5 text-gray-100 mr-2" />
            Krengsengan
          </dt>
        </div>

        <p className="mt-4 text-gray-100">
          Untuk Jaminan RASA sudah kita pastikan MAKNYUSSSS 😀 😀 😀
        </p>
      </div>
    </div>
  </section>
  )
}
