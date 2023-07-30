import React from 'react';

const statsData = [
  {
    title: 'Pelanggan',
    value: '1000+',
  },
  {
    title: 'Berdiri Sejak Tahun',
    value: '2006',
  },
  {
    title: 'Rating',
    value: '4.5',
  },
];

export default function Stats() {
  return (
    <section className="bg-gray-100 py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {statsData.map((stat, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-500">{stat.title}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
