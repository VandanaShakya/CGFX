import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react';
import { features, tickerItems } from '../../data/data' 
import Traders from './Traders';
import Dynamictrading from './Dynamictrading';
import Upgrade from './Upgrade';
import StartTrading from './StartTrading';
import Fund from '../../components/Fund';
 
const Home = () => {

  const duplicatedItems = [...tickerItems, ...tickerItems];
  return (
    <>
      <div className="mt-50 mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#051139] p-8 md:p-16 lg:p-20 ">
      
      {/* --- BACKGROUND PATTERN --- */}
    
      <img
      src=""
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT CONTENT SECTION --- */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#00d1b2] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-6"
          >
            Your Global Trading Partner
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8"
          >
            Your Trusted Online Trading Platform For Global Markets
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Explore a user-friendly trading app and a secure online platform designed to give investors seamless access to global markets.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#051139] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started
          </motion.button>
        </div>

        {/* --- RIGHT IMAGE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          {/* Replace 'globe-graphic.png' with the actual asset from your image_0966ff.png */}
          <img 
            src="/path-to-your-globe-graphic.png" 
            alt="Global Trading Chart Globe" 
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,209,178,0.3)]"
          />
        </motion.div>

      </div>
    </div>


    {/* SECOND SECTION */}
        <section className="bg-[#f8faff] mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#051139] p-8 md:p-16 lg:p-20 m-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Sub-header */}
        <p className="text-[#00d1b2] font-bold tracking-widest text-sm uppercase mb-4">
          Redefining Withdrawal Experience
        </p>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#051139] mb-20 max-w-4xl mx-auto leading-tight">
          Access Global Trading Potential with World-Class Conditions and Support
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-8 lg:gap-x-12 mt-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-[32px] pt-20 pb-12 px-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center border border-gray-50"
            >
              {/* Overlapping Icon Container */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32">
                <img 
                  src={feature.icon} 
                  alt={feature.alt} 
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-[#051139] text-xl md:text-2xl font-bold text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-gray-400 text-sm">
          ** Only for certain products
        </p>
      </div>
    </section>


    {/* third section */}
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        {/* Sub-header */}
        <p className="text-[#00d1b2] font-bold tracking-widest text-sm uppercase mb-4">
          Level up your trades
        </p>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#051139] mb-6 max-w-4xl mx-auto leading-tight">
          Trade Top Global Assets on a Secure and Dynamic Trading Platform
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Enjoy optimized spreads, full market access, and advanced tools through a reliable broker trading platform built for efficiency.
        </p>
      </div>

      {/* --- CONTINUOUS TICKER --- */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-4">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border whitespace-nowrap transition-transform cursor-default
                ${item.dark 
                  ? 'bg-[#2b50ed] border-[#2b50ed] text-white shadow-lg shadow-blue-200' 
                  : 'bg-white border-gray-100 text-gray-800 shadow-sm'
                }`}
            >
              <CheckCircle2 
                size={20} 
                className={item.dark ? 'text-white' : 'text-[#2b50ed]'} 
              />
              <span className="font-semibold text-sm md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for the animation (Can be placed in global CSS) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>

    <Traders/>
    <Dynamictrading/>
    <Upgrade/>
    <StartTrading/>
    <Fund/>

    </>
  )
}

export default Home