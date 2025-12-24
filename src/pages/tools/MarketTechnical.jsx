import React from 'react'
import Fund from '../../components/Fund'

const MarketTechnical = () => {
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
             <span className="font-semibold text-green-300">
    Real-Time Market Technical Analysis with SGFX
  </span>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
  Data-Driven Trading Insights
</h2>


<p className="text-gray-300 text-base max-w-4xl leading-relaxed">
  At SGFX, our advanced technical analysis tool provides traders with real-time data
  and expert-level insights. Whatever your next move, our platform delivers the clarity
  you need right when you need it. Backed by years of market expertise, SGFX gives you
  the confidence to make smarter, faster investment decisions.
</p>

        </div>

        {/* Subtle Bottom Glow */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none"></div>
      </div>
    </div>



        <div className="w-full max-w-6xl mx-auto mt-10 md:p-8">
      {/* Heading and Description Section */}
      <div className="mb-8">
        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-3">
          Live Data to Navigate Volatility

        </h2>
        <p className="text-gray-600 text-base max-w-4xl leading-relaxed">
          When markets shift quickly, having access to reliable, real-time data makes all the difference. 
          The SGFX live technical analysis table gives you a clear view of market movement, helping you recognize 
          key entry and exit points and respond with precision, just as conditions change.
        </p>
      </div>

      {/* Widget Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <iframe
          src="https://fxpricing.com/fx-widget/simple-moving-widget.php?id=1"
          width="100%"
          height="525"
          style={{ border: "none" }}
          title="Moving Averages Widget"
          className="w-full"
        ></iframe>
      </div>

      {/* Powered by Attribution */}
      <div className="mt-4 text-center font-sans text-[13px] text-[#9db2bd]">
        <span>Powered by </span>
        <a 
          href="https://fxpricing.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#bb3534] font-semibold no-underline hover:underline transition-colors"
        >
          FX Pricing
        </a>
      </div>
    </div>

    <Fund/>
    </>
  )
}

export default MarketTechnical