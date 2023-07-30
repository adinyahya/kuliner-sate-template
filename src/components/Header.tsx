import React from 'react';
import Image from 'next/image';

const title = {
  main: "Kelezatan Rasa dalam Setiap Gigitan!",
  sub: "Terima Pesanan Sate Ayam dan Sate Gule Kambing untuk katering Aqiqoh, Hajatan dan Nikahan",
  buttonText: "Pesan Sekarang!",
};

export default function Header() {
  return (
    <section className="bg-white relative w-full">
      <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                <span className="text-2xl font-bold text-red-900">
                  SateGule<span className="text-red-700">Skuy</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative py-14 lg:pt-[4.8rem] lg:px-24">
        <div className="container m-auto px-6 md:px-12 ">
          <div className="flex flex-col-reverse lg:flex-row items-center flex-wrap px-2 md:px-0">
            <div className="lg:w-6/12">
              <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-red-900 to-red-500 text-transparent bg-clip-text py-4">
                {title.main}
              </h1>

              <h2 className="font-bold text-gray-900 text-base mt-4">
                {title.sub}
              </h2>

              <button
                type="button"
                className="border border-red-700 bg-red-900 text-white rounded-md px-6 py-2 mt-4 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                {title.buttonText}
              </button>
            </div>
            <div className="lg:w-6/12 lg:pl-8">
              <Image
                src="/logo-header.png"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className=" lg:-mt-32">
  <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
    <g transform="scale(-1, 1) translate(-1430, 0)">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
          <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
          <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
          <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="rgb(153 27 27 / var(--tw-bg-opacity))" fillRule="nonzero">
          <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
        </g>
      </g>
    </g>
  </svg>
</div>


    </section>
  );
}
