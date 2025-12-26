import React from 'react'
import { Globe, BarChart3 } from 'lucide-react';
import GlobalTradingData from './GlobalTradingData';
import Fund from '../../components/Fund';



const GlobalTrading = () => {
  return (
    <>
         <div className="flex items-center justify-center h-200 bg-gray-100 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#003B95] to-[#001A4D] px-6 py-16 md:py-24 text-center shadow-2xl">
        
        {/* Background Decorative Icons - Hidden on small screens for cleaner UI */}
        <div className="absolute left-[-20px] top-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 rotate-12">
            <Globe size={80} className="text-cyan-400" />
          </div>
        </div>

        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 md:opacity-100">
          <div className="rounded-2xl border-4 border-cyan-400 p-4 -rotate-12">
            <BarChart3 size={100} className="text-cyan-400" />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          {/* Top Label */}
         <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
        Stay Informed on Global Trading Holidays
      </span>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
        Global Trading Holiday Schedule for 2025
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
        Markets don’t close often, but when they do, it pays to know in advance.
        The SGFX holiday trading schedule helps you stay on top of global
        holidays, early closes, and those outlier days when the timing shifts.
        Get ready to start making the most of holiday trading with SGFX.
      </p>
        </div>
      </div>
    </div>
    <GlobalTradingData/>
    <Fund/>
    </>
  )
}

export default GlobalTrading