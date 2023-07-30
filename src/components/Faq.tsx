import React, { useState } from "react";

interface FAQtype {
  question: string;
  answer: string;
}
const FAQItem = ({ question, answer }: FAQtype) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <details className="mb-4">
      <summary
        className="font-semibold bg-gray-100 rounded-md py-2 px-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        {question}
      </summary>
      {isOpen && <span className="block mt-2">{answer}</span>}
    </details>
  );
};

const faqData = [
  {
    question: "Bagaimana cara memesan Aqiqoh di tempat Anda?",
    answer: "Anda dapat menghubungi kami melalui telepon untuk memesan Aqiqoh.",
  },
  {
    question: "Berapa harga paket Aqiqoh yang tersedia?",
    answer:
      "Kami memiliki beberapa paket Aqiqoh dengan harga yang berbeda. silahkan cek di bagian daftar harga pada website.",
  },
  {
    question:
      "Apakah harga paket Aqiqoh sudah termasuk biaya pemotongan dan penyembelihan?",
    answer:
      "Ya, harga paket Aqiqoh sudah termasuk biaya pemotongan dan penyembelihan hewan sesuai syariat Islam.",
  },
  {
    question: "Berapa hari sebelumnya harus memesan Aqiqoh?",
    answer:
      "Untuk memastikan ketersediaan dan persiapan yang tepat, kami sarankan Anda memesan Aqiqoh minimal 3-7 hari sebelum acara.",
  },
  {
    question: "Apakah Anda menyediakan layanan antar untuk Aqiqoh?",
    answer:
      "Ya, kami menyediakan layanan antar untuk Aqiqoh ke lokasi yang telah disepakati sebelumnya.",
  },
];

export default function Faq() {
  return (
    <div className="bg-gray-100 py-24 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pertanyaan yang ditanyakan
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-3xl">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
