import React from 'react'
import ExclusiveBonuses from './ExclusiveBonuses'

const Promotions = () => {
  return (
    <>
         <div className="flex items-center justify-center bg-gray-100 p-40">
  {/* Main Container */}
  <div className="w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#003B95] via-[#001A4D] to-[#050B18] px-6 py-20 md:py-24 text-center shadow-2xl">
    
    {/* Content Wrapper */}
    <div className="max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Subheading Label */}
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
        Promotions
      </span>

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Get More from Your Trades
      </h2>

      {/* Description */}
      <p className="text-blue-100/70 text-sm md:text-base mb-10 max-w-lg">
        Boost your trading with our Promotions and Bonuses. We designed them for one purpose, to give you a leg up in the trading world.
      </p>

    </div>
  </div>
</div>

<ExclusiveBonuses/>
    </>
  )
}

export default Promotions