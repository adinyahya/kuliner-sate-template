import React from 'react';

const pricingData = [
  {
    title: 'Sate Kambing "Gibas"',
    price: 'IDR3000K',
    inclusion: '(Include Kambing)',
    items: ['SATE 550 Tusuk', 'GULE Satu Panci Besar', 'Bumbu Kacang', 'Sambal Pedas'],
  },
  {
    title: 'Sate Kambing "Gibas"',
    price: 'IDR850K',
    inclusion: '(Non Kambing)',
    items: ['SATE 550 Tusuk', 'GULE Satu Panci Besar', 'Bumbu Kacang', 'Sambal Pedas'],
  },
  {
    title: 'Sate Kambing "Jawa"',
    price: 'IDR3500K',
    inclusion: '(Include Kambing)',
    items: ['SATE 550 Tusuk', 'GULE Satu Panci Besar', 'Bumbu Kacang', 'Sambal Pedas'],
  },
  {
    title: 'Sate Kambing "Jawa"',
    price: 'IDR850K',
    inclusion: '(Non Kambing)',
    items: ['SATE 550 Tusuk', 'GULE Satu Panci Besar', 'Bumbu Kacang', 'Sambal Pedas'],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-22">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-4xl">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Daftar Harga <span className="text-red-900">SateGuleSkuy</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
        {pricingData.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/2 px-4">
            <div className="bg-white rounded-xl z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                {item.title}
              </span>
              <h2 className="font-bold text-gray-900 mb-5 text-[42px]">{item.price}</h2>
              <p className="text-gray-500 pb-2">{item.inclusion}</p>
              <div className="mb-7">
                {item.items.map((subitem, subindex) => (
                  <p key={subindex} className="text-base text-body-color leading-loose mb-1">
                    {subitem}
                  </p>
                ))}
              </div>
              <a
                href="#"
                className="w-full block text-base font-semibold text-primary bg-transparent border border-black rounded-md text-center p-3 hover:text-white hover:bg-red-700 hover:black transition"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
