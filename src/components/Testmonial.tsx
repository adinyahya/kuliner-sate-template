import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiCheckCircle, FiStar } from "react-icons/fi";

const testimonials = [
    {
      name: "Rani Putri",
      content:
        "SateGuleSkuy benar-benar menghidangkan sate kambing yang luar biasa! Dagingnya empuk dan bumbu kacangnya enak banget. Setiap kali saya mengadakan acara, saya selalu memesan sate kambing dari mereka. Puas banget!",
    },
    {
      name: "Andika Wijaya",
      content:
        "Saya sangat suka dengan rasa sate kambing dari SateGuleSkuy. Rasanya autentik dan khas, sesuai dengan selera lidah saya. Pelayanannya juga cepat dan ramah. Sangat direkomendasikan!",
    },
    {
      name: "Rina Sari",
      content:
        "Sate kambing dari SateGuleSkuy adalah favorit keluarga kami. Dagingnya selalu segar dan lembut, serta bumbu kacangnya begitu lezat. Saya selalu memesan paket sate kambing untuk acara keluarga kami.",
    },
    {
      name: "Hendra Gunawan",
      content:
        "SateGuleSkuy adalah tempat terbaik untuk menikmati sate kambing. Sudah beberapa kali saya mencoba sate kambing dari tempat lain, tapi tidak ada yang bisa menandingi rasa dan kualitas sate di sini. Terima kasih!",
    },
    {
      name: "Rina Kartika",
      content:
        "Saya pertama kali mencoba sate kambing dari SateGuleSkuy di acara pernikahan teman. Setelah itu, saya jadi langganan mereka. Sate kambingnya selalu enak dan mengingatkan saya pada cita rasa tradisional. Bener-bener recomended!",
    },
    {
      name: "Anton Susanto",
      content:
        "SateGuleSkuy punya cara unik dalam menyajikan sate kambing. Saya suka dengan presentasi dan penampilan sate mereka yang selalu menarik. Rasanya juga tidak kalah hebat, membuat saya ingin datang lagi dan lagi.",
    },
    {
      name: "Dewi Puspita",
      content:
        "Sate kambing SateGuleSkuy adalah makanan favorit saya sejak dulu. Rasanya yang khas dan bumbu kacangnya yang gurih membuat saya ketagihan. Pelayanannya juga cepat dan harga terjangkau. Pokoknya juara!",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

export default function Testmonial() {
  return (
    <div className="bg-white py-24 sm:py-22">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Testimoni dari Pelanggan Kami
        </h2>
      </div>
      <div className="mx-auto max-w-4xl mt-12 lg:max-w-2xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-50">
              <div className="bg-white rounded-xl p-12 shadow-md">
                <div className="flex items-center mb-4">
                  <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                  <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                  <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                  <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                  <FiStar className="w-5 h-5 text-yellow-500 mr-1" />
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="text-gray-800 font-bold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  </div>
  )
}
