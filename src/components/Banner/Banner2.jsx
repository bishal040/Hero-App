import React from 'react';

const statsData = [
  {
    value: '29.6M',
    label: 'Total Downloads',
    description: '21% More Than Last Month',
  },
  {
    value: '906K',
    label: 'Total Reviews',
    description: '46% More Than Last Month',
  },
  {
    value: '132+',
    label: 'Active Apps',
    description: '31 More Will Launch',
  },
];

const TrustedStatsSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Trusted By Millions, Built For You
          </h2>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="order-2 mt-2 text-5xl sm:text-6xl font-bold tracking-tight">
                {stat.value}
              </p>
              <p className="order-1 text-sm sm:text-base font-medium text-indigo-100 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="order-3 mt-2 text-sm sm:text-base text-indigo-100">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedStatsSection;