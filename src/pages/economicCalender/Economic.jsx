import React from 'react'
import { Globe, BarChart3 } from 'lucide-react';
import EconomicData from './EconomicData';



const Economic = () => {
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
  Stay Ahead of Market Moves
</span>

{/* Main Heading */}
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
  Economic Calendar: Stay Ahead of Market Moves
</h1>

{/* Description */}
<p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
  Markets don’t wait, and neither should you. The SGFX forex economic calendar
  helps you stay in sync with the events that move prices—interest rate
  decisions, employment data, inflation reports, and more. Easy to use and
  always up to date, it’s the tool traders trust to stay one step ahead. If
  timing matters, this belongs in your toolkit.
</p>

        </div>
      </div>
    </div>

    <EconomicData/>
   </>
  )
}

export default Economic