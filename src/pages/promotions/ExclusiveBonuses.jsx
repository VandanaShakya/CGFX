import React from "react";
import { bonuses } from "../../data/data";

const ExclusiveBonuses = () => {
 

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 md:p-10">
      {/* Main Gray Card Container */}
      <div className="w-full max-w-5xl rounded-[2rem] bg-[#F8F9FA] px-6 py-12 shadow-inner md:px-16 md:py-16">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Exclusive Bonuses Just for You
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-500 md:text-base">
            Grab your opportunity to earn more with these limited-time promotions.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="flex flex-col gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-transform hover:scale-[1.01]"
            >
              {/* Top Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-blue-500 to-emerald-400" />

              <div className="relative flex flex-col items-center p-6 md:flex-row md:justify-between md:p-8">

                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-10">
                  <img
                    src="https://img.freepik.com/free-vector/stock-market-analysis-chart-business-growth_53876-117565.jpg"
                    alt="Chart Background"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Left Content */}
                <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex h-20 w-20 items-center justify-center text-5xl md:h-24 md:w-24">
                    {bonus.icon}
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-blue-900 md:text-2xl">
                      {bonus.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-emerald-500 md:text-lg">
                      {bonus.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="relative z-10 mt-6 flex flex-col items-center md:mt-0 md:items-end">
                  <button className="rounded-full bg-blue-600 px-8 py-2 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-700">
                    {bonus.buttonText}
                  </button>
                  <p className="mt-2 max-w-[150px] text-center text-[10px] leading-tight text-gray-400 md:text-right">
                    Terms and conditions apply for limited time promotions.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBonuses;
