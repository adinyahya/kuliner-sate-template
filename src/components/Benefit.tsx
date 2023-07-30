import React from 'react';

const benefitsData = [
  {
    title: 'Kelezatan Tidak Tertandingi',
    description:
      'Nikmati setiap gigitan sate kambing kami yang menghadirkan kelezatan tak terlupakan. Dipanggang dengan cermat dan dibumbui dengan rahasia resep turun-temurun, sate kambing kami menjadi sajian yang menggugah selera dan memanjakan lidah Anda.',
  },
  {
    title: 'Bahan Baku Berkualitas',
    description:
      'Hanya menggunakan bahan baku terbaik adalah komitmen kami kepada Anda. Dari daging kambing pilihan hingga rempah-rempah segar, kami memastikan bahwa setiap hidangan kami terbuat dari bahan berkualitas tinggi yang menjaga cita rasa otentik dan kebersihan makanan.',
  },
  {
    title: 'Pengalaman Luar Biasa',
    description:
      'Kami mengerti betapa berharganya momen spesial seperti Aqiqoh. Tim kami yang penuh perhatian dan berdedikasi akan menghadirkan pengalaman kuliner yang luar biasa bagi Anda dan semua tamu undangan. Layani mereka dengan kehangatan dan keramahan yang tak terlupakan.',
  },
  {
    title: 'Pengiriman Aman',
    description:
      'Kami memberikan jaminan pengiriman yang aman dan terpercaya. Pesanan Anda akan sampai dengan tepat waktu dan dalam kondisi sempurna, menjaga kualitas sate kambing kami tetap terjaga dari dapur kami ke meja Anda.',
  },
  {
    title: 'Sudah Banyak yang Berlangganan',
    description:
      'Kepercayaan pelanggan adalah bukti kualitas layanan kami. Sudah banyak orang yang berlangganan kepada kami dan menikmati kelezatan sate kambing kami dalam berbagai acara spesial mereka. Bergabunglah dengan mereka dan rasakan kenikmatannya!',
  },
  {
    title: 'Pembayaran Bisa DP',
    description:
      'Untuk memberikan kemudahan bagi Anda, kami menerima pembayaran dengan sistem DP (Down Payment). Anda dapat mengamankan pesanan Anda dengan membayar sebagian kecil dari total biaya pesanan. Sisa pembayaran dapat diselesaikan sebelum acara atau saat pengiriman.',
  },
];

export default function Benefit() {
  return (
    <section className="bg-white py-24 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manfaat Memilih <span className="text-red-900">SateGuleSkuy</span>
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="relative">
                <p className="text-xl font-semibold leading-7 text-gray-900">
                  {benefit.title}
                </p>
                <dd className="mt-2 leading-7 text-gray-500">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
