import React, { useState } from 'react'
import { Globe, BarChart3,   UserPlus,
  Settings,
  Wallet,
  Activity, } from 'lucide-react';
import { stocksData, brands } from '../../data/data';
import { motion, AnimatePresence } from "framer-motion";
import Fund from '../../components/Fund';
import StartTrading from '../homecomponents/StartTrading';



const Stocks = () => {
  const [activeTab, setActiveTab] = useState("Desktop");


  return (
   <>
         <div className="flex items-center justify-center h-200 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#003B95] to-[#001A4D] px-6 py-16 md:py-24 text-center shadow-2xl">
        
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


    {/* second section */}
    <div className=" flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="max-w-7xl w-full bg-gray-50 rounded-[40px] p-8 md:p-20 text-center">
        
        {/* Header Section */}
        <header className="mb-12">
          <p className="text-[#00F2A9] font-bold tracking-widest text-sm mb-4">
            POWERING THE FUTURE OF TRADING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SGFX ?
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-lg">
            From quick performance to straightforward features, SGFX delivers the 
            best stock trading platform experience. Enjoy dynamic access, zero 
            commissions, and tools made for beginners and pros alike.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stocksData.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgGradient} rounded-[30px] p-10 h-64 flex flex-col items-center justify-center text-white shadow-lg transition-transform hover:scale-105 duration-300`}
            >
              {feature.isIcon ? (
                <div className="mb-4">
                  {/* Simple SVG representation of the fractional share icon */}
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 17l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              ) : (
                <h2 className="text-6xl font-bold mb-4">{feature.title}</h2>
              )}
              <p className="text-sm font-semibold px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>



    {/* third section */}

    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-[#00F2A9] font-semibold tracking-[0.2em] text-xs md:text-sm mb-6 uppercase">
          Own a piece of global success
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 max-w-4xl mx-auto">
          Become a Shareholder in the Most Valuable Companies!
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-16">
          Begin your investment journey with as little as $100 and start building wealth 
          with shares of leading companies like Apple, Tesla, Amazon, and many more. 
          With SGFX, you don't just buy stocks you invest in innovation, performance, 
          and global growth.
        </p>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 w-32 h-20 md:w-44 md:h-24 flex items-center justify-center transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* fourth section */}
      <div className="w-7xl m-auto my-10 relative rounded-[32px] p-10 md:p-14 bg-gradient-to-tr from-[#050b18]/95 via-[#0e3b78]/90 to-[#050b18]/95 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,0.05)]">

        {/* Glow overlay */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 text-white">
              <h3 className="text-6xl font-bold mb-2">SGFX</h3>
              <h1 className="text-5xl text-white/70 mb-6">
            Start Stock Trading Anywhere with MT5
              </h1>

              <p className="text-sm leading-relaxed text-white/80 mb-8 max-w-md">
                MetaTrader 5 is the global standard for multi-asset trading.
                Harness professional tools including advanced charting,
                multiple timeframes, built-in indicators, and strategy testing.
                Full support for automated trading and expert advisors (EAs).
              </p>

           {/* DOWNLOAD BUTTONS */}
<div className="grid grid-cols-2 gap-4 max-w-md">

  {/* App Store */}
  <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:bg-gray-100 transition">
    <img
      src="/images/appstore.png"
      alt="App Store"
      className="w-6 h-6 object-contain"
    />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-500 font-medium">
        Download on the
      </p>
      <p className="text-sm font-bold text-black">
        App Store
      </p>
    </div>
  </button>

  {/* Google Play */}
  <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:bg-gray-100 transition">
    <img
      src="/images/googleplay.png"
      alt="Google Play"
      className="w-6 h-6 object-contain"
    />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-500 font-medium">
        Get it on
      </p>
      <p className="text-sm font-bold text-black">
        Google Play
      </p>
    </div>
  </button>

  {/* Windows */}
  <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:bg-gray-100 transition">
    <img
      src="/images/windows.png"
      alt="Windows"
      className="w-6 h-6 object-contain"
    />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-500 font-medium">
        Download on the
      </p>
      <p className="text-sm font-bold text-black">
        Windows
      </p>
    </div>
  </button>

  {/* Mac */}
  <button className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:bg-gray-100 transition">
    <img
      src="/images/mac.png"
      alt="Mac"
      className="w-6 h-6 object-contain"
    />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-500 font-medium">
        Download on the
      </p>
      <p className="text-sm font-bold text-black">
        Mac
      </p>
    </div>
  </button>

</div>


            </div>

            {/* RIGHT VISUAL BLOCK */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-2xl rounded-full" />
                <img
                  src="https://via.placeholder.com/420x360?text=Trading+Visual"
                  alt="Trading Visual"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>



      {/* trading 5th section */}
    <StartTrading/>

    <Fund/>
   </>
  )
}

export default Stocks