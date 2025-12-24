import React from 'react'
import { links } from '../../data/data'
import { ArrowUpRight } from 'lucide-react';
import Fund from '../../components/Fund';

const FormsAndDocuments = () => {
  return (
    <>
         <div className="flex items-center justify-center pt-40">
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


{/* forms next section */}
<div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-sm md:p-16">
        {/* Header Text */}
        <h2 className="text-center text-gray-900 text-lg md:text-xl font-semibold mb-12 leading-relaxed">
          For your own benefit and protection please read the documents below and any other information 
          made available to you via this website prior to opening an account or placing an order.
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <span className="text-sm md:text-base font-medium border-b border-transparent group-hover:border-blue-800">
                {link.title}
              </span>
              <div className="ml-2 p-1 rounded-full border border-blue-600 group-hover:border-blue-800">
                <ArrowUpRight size={14} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <Fund/>
    </>
  )
}

export default FormsAndDocuments