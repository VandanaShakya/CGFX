import React from 'react';

const GlobalTradingData = () => {
  const headers = [
    "Country", "Mon, Apr 28", "Mon, May 12", "Wed, May 21", "Tue, May 27", 
    "Sat, May 31", "Thu, Sep 18", "Fri, Sep 19", "Oct 27", "Nov 10", "Dec 25", "Dec 26"
  ];

  const scheduleData = [
    { country: "AUSTRALIA", values: ["Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours"] },
    { country: "BELGIUM", values: ["Normal Hours", "Normal Hours", "Normal Hours", "No Trading", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours"] },
    { country: "BRAZIL", values: ["Normal Hours", "Normal Hours", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours"] },
    { country: "CANADA", values: ["No Trading", "Normal Hours", "No Trading", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "No Trading", "Normal Hours", "Normal Hours"] },
    { country: "DENMARK", values: ["No Trading", "Normal Hours", "No Trading", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "No Trading", "Normal Hours", "Normal Hours"] },
    { country: "FINLAND", values: ["No Trading", "Normal Hours", "No Trading", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "No Trading", "Normal Hours", "Normal Hours"] },
    { country: "GERMANY", values: ["No Trading", "Normal Hours", "No Trading", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "No Trading", "Normal Hours", "Normal Hours"] },
    { country: "IRELAND", values: ["No Trading", "Normal Hours", "Normal Hours", "Normal Hours", "No Trading", "Normal Hours", "Normal Hours", "No Trading", "No Trading", "No Trading", "Normal Hours"] },
    { country: "SWEDEN", values: ["Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "Normal Hours", "No Trading"] },
  ];

  const isHighlightedColumn = (index) => [2, 3, 4, 5].includes(index);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen font-sans flex justify-center">
      {/* Main Unified Card Container - Gray Background */}
      <div className="w-full max-w-7xl bg-slate-100 rounded-[2rem] p-6 md:p-10">
        
        {/* Header Content inside the Card */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-200/50 rounded-full">
            Trading Calendar
          </div>
          <h1 className="mb-6 text-3xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
            Exchange Holidays 2025: <span className="text-blue-600">Plan Ahead</span> for Market Closures
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 pb-2">
            "Missing a trade because you didn’t check the calendar? That’s avoidable. With SGFX’s dynamic, up-to-date view of holiday trading hours, you’ll know exactly when the markets are closed and when they’re closing early. The list includes major countries and regions, so you can plan ahead, stay consistent, and avoid unnecessary surprises. Stay informed, plan ahead and avoid interruptions in your trading strategy with SGFX."
          </p>
        </div>

        {/* Scrollable Table Section */}
        <div className="bg-white rounded-2xl shadow-inner overflow-auto max-h-[550px] border border-slate-300 custom-scrollbar">
          <table className="w-full text-center border-separate border-spacing-0 min-w-[1200px]">
            <thead className="sticky top-0 z-30">
              <tr className="bg-[#1E293B] text-white">
                {headers.map((header, idx) => (
                  <th 
                    key={idx} 
                    className={`py-5 px-6 text-[11px] uppercase tracking-wider font-bold border-b border-slate-700 
                      ${idx === 0 ? 'sticky left-0 z-40 bg-[#1E293B]' : ''}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {scheduleData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-blue-50/50 transition-colors group">
                  {/* Sticky Country Column */}
                  <td className="py-4 px-6 font-bold text-xs border-b border-r border-slate-100 bg-white sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-blue-50 transition-colors">
                    {row.country}
                  </td>

                  {/* Data Cells */}
                  {row.values.map((val, colIndex) => {
                    const isNoTrading = val === "No Trading";
                    const highlighted = isHighlightedColumn(colIndex + 1);
                    
                    return (
                      <td 
                        key={colIndex} 
                        className={`py-4 px-4 text-xs border-b border-r border-slate-100 last:border-r-0
                          ${highlighted ? 'bg-red-50/40' : ''}`}
                      >
                        <span className={isNoTrading ? "text-red-600 font-bold" : "text-gray-500"}>
                          {val}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Notes inside the Card */}
        <div className="mt-8 p-6 bg-white/50 rounded-xl border border-slate-200 space-y-3 text-sm text-slate-500">
          <div className="flex items-start">
            <span className="text-red-500 font-bold mr-2">*</span>
            <p>Please note that during the holiday period there could be unexpected volatility, low liquidity, and some LPs will increase the spreads.</p>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 font-bold mr-2">*</span>
            <p>Holiday dates are subject to change by the respective markets.</p>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 font-bold mr-2">*</span>
            <p>Clients are kindly requested to manage their accounts and positions during the company's trading hours as listed above.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default GlobalTradingData;