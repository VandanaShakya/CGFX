import React from 'react'
import Fund from '../../components/Fund'

const ForexMarketWatch = () => {
  return (
   <>
{/* hero section */}
<div className="w-full px-4 pt-40">
      {/* Main Banner Container */}
      <div className="relative overflow-hidden w-full max-w-6xl mx-auto min-h-[320px] rounded-[40px] bg-gradient-to-r from-[#0a1128] via-[#001f54] to-[#034078] flex flex-col items-center justify-center text-center p-6 md:p-12 shadow-2xl">
        
        {/* Decorative Elements - Hidden on small screens for better readability */}
        <div className="hidden lg:block">
          {/* Left Side Floating Elements */}
          <div className="absolute left-10 top-1/4 opacity-80 animate-pulse">
            <div className="w-12 h-24 bg-cyan-400/30 rounded-lg blur-sm border-l-4 border-cyan-300"></div>
          </div>
          <div className="absolute left-24 top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
          </div>
        </div>

        <div className="hidden lg:block">
          {/* Right Side Floating Elements */}
          <div className="absolute right-12 bottom-10 opacity-80">
            <div className="w-10 h-20 bg-cyan-400/20 rounded-lg blur-sm border-r-4 border-cyan-300"></div>
          </div>
          <div className="absolute right-24 top-1/3">
             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.4)] rotate-45"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-3xl">
          <span className="text-emerald-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">
            Track Currency Moves in Real Time
          </span>
          
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Real-Time Market Watch
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-light px-4">
            The SGFX Forex Market Watch online gives you direct access to real-time stock and 
            forex market data and up-to-the-minute updates from global stock exchanges.
          </p>
        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
      </div>
    </div>




   {/* second section */}
    <div className="mt-10 w-full max-w-5xl mx-auto p-4 flex flex-col items-center bg-gray-50 rounded-xl shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
            Live Forex Cross Rates
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            For your own benefit and protection please read the documents below and any 
            other information made available to you via this website prior to opening 
            an account or placing an order.
          </p>
        </div>
      {/* Container for the Iframe to handle responsiveness */}
      <div className="w-full overflow-hidden rounded-lg bg-white border border-gray-200">
        <iframe
          src="https://fxpricing.com/fx-widget/forex-cross-rates.php?symbol=EUR,USD,JPY,NZD,GBP,CHF,AED,PKR"
          width="100%"
          height="370"
          style={{ border: "none" }}
          title="Forex Cross Rates"
        ></iframe>
      </div>

      {/* Powered by Section using Tailwind for styling */}
      <div className="mt-4 text-center font-sans text-[13px] text-[#9db2bd]">
        <span>Powered by </span>
        <a 
          href="https://fxpricing.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#bb3534] font-semibold no-underline hover:underline"
        >
          FX Pricing
        </a>
      </div>
    </div>

    <Fund/>
   </>
  )
}

export default ForexMarketWatch