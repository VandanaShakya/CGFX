import React from 'react'
import { Check } from 'tabler-icons-react'
import { accounts } from '../../data/data'
import Fund from '../../components/Fund'

const AccountTypes = () => {
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


{/* account second section */}
 <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-3">
            Find the account that fits you
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Account Type Comparison
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {accounts.map((acc, index) => (
            <div
              key={index}
              className={`bg-white rounded-[28px] shadow-xl overflow-hidden border
              ${acc.highlighted ? "border-indigo-300 scale-[1.03]" : "border-slate-100"}`}
            >
              {/* Top pill */}
              <div className="bg-indigo-100 text-indigo-600 text-center font-bold py-3 text-lg">
                {acc.category}
              </div>

              {/* Body */}
              <div className="px-8 py-10 text-center">

                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-2 bg-white/70 rounded-full"></div>
                  </div>
                </div>

                {/* Type */}
                <h3 className="text-xl font-bold text-indigo-600">
                  {acc.type}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {acc.type === "ECN"
                    ? "Raw Spreads From"
                    : "Variable Spreads From"}
                </p>

                {/* Spread */}
                <div className="flex justify-center items-end mt-4">
                  <span className="text-5xl font-black text-slate-900">
                    {acc.spread}
                  </span>
                  <span className="ml-1 text-gray-500 text-sm">
                    {acc.unit}*
                  </span>
                </div>

                {/* Commission */}
                <div className="mt-5 bg-slate-50 rounded-full py-2 text-slate-600 font-semibold text-sm">
                  {acc.commission}
                </div>

                {/* Features */}
                <div className="mt-8 space-y-4 text-left">
                  {acc.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="flex items-center text-slate-600">
                        <span className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {item.label}
                      </div>
                      <span className="font-semibold text-slate-800">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition">
                  {acc.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


{/* third section */}
<div className="min-h-screen p-4 md:p-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* TOP FEATURE BAR */}
        <div className="w-full bg-gradient-to-r from-[#5145f6] via-[#3b82f6] to-[#10b981] rounded-2xl p-5 md:p-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💸", text: "Instant Withdrawals" },
              { icon: "🛡️", text: "Swap-Free**" },
              { icon: "👤", text: "Tier-1 Client Fund Security" },
              { icon: "🤝", text: "Professional Customer Support" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-white">
                <div className="flex-shrink-0 w-12 h-12 border border-white/30 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <span className="font-bold text-sm leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HERO SECTION */}
       <div className="relative overflow-hidden bg-[#00143a] rounded-[2.5rem] px-6 py-20 md:py-32 border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center">

  {/* Background Image */}
  <img
    src="/images/trading-bg.jpg"   // 👈 change path
    alt="Trading Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#00143a]/80 z-0"></div>

  {/* Background Decorative Glows */}
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
  </div>

  {/* Floating Coins */}
  <div className="absolute top-10 left-[10%] opacity-40 animate-bounce hidden md:block z-10">
    <div className="w-16 h-16 rounded-full border-4 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl font-bold italic">$</div>
  </div>

  <div className="absolute bottom-20 left-[15%] opacity-30 animate-pulse hidden md:block z-10">
    <div className="w-20 h-20 rounded-full border-4 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-3xl font-bold italic">$</div>
  </div>

  <div className="absolute top-20 right-[10%] opacity-40 animate-bounce hidden md:block z-10">
    <div className="w-14 h-14 rounded-full border-4 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl font-bold italic">$</div>
  </div>

  <div className="absolute bottom-10 right-[5%] opacity-50 rotate-12 hidden md:block z-10">
    <div className="w-24 h-24 rounded-full border-4 border-cyan-400/30 flex items-center justify-center text-cyan-400 text-4xl font-bold italic">$</div>
  </div>

  {/* Main Content */}
  <div className="relative z-20 max-w-3xl">
    <h4 className="text-[#10b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
      Trade With Confidence
    </h4>

    <h1 className="text-white text-3xl md:text-6xl font-bold mb-8 tracking-tight">
      Versatile Accounts for Online Trading
    </h1>

    <div className="space-y-6 text-slate-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
      <p>
        At SGFX, we understand that every trader has unique needs. That's why
        we offer a full range of account types crafted for different experience levels.
      </p>
      <p>
        Each account is backed by a secure, transparent, and regulated
        environment so you can trade with confidence.
      </p>
    </div>

    <button className="mt-12 inline-flex items-center justify-center px-16 py-3 font-semibold text-white transition-all duration-200 border border-blue-500/50 rounded-lg hover:bg-blue-600/10 hover:border-blue-400">
      Get Started
    </button>
  </div>

</div>


      </div>
    </div>


    {/* fourth section */}
  <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-10 font-sans">
      {/* Main Container: Increased max-width to 7xl (1280px) or custom 1400px */}
      <div className="w-full max-w-[1200px] bg-[#f8f9fa] rounded-[2.5rem] p-6 md:p-16 lg:p-20 shadow-sm flex flex-col items-center text-center">
        
        {/* Header Section */}
        <p className="text-[#00d094] font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase">
          Bigger, Better, More
        </p>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1d37] mb-8 leading-tight">
          Elite Trading Accounts for Premium Conditions
        </h2>
        
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-5xl mb-14">
          Gain a strategic edge with our Elite accounts crafted for advanced traders, high-frequency strategies, 
          and institutional-grade performance. Unlock custom trading conditions, razor-thin spreads, and 
          priority trade execution, all supported by a dedicated account manager and exclusive access to 
          premium tools and reporting.
        </p>

        {/* Responsive Image & Badges Section */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/7] rounded-[2rem] overflow-hidden mb-14 shadow-2xl">
          {/* Background Image Layer */}
          <div className="absolute inset-0 bg-[#001c3d]">
            <img 
              src="https://images.unsplash.com/photo-1611974717484-245037ecb629?auto=format&fit=crop&q=80&w=1600" 
              alt="Trading Dashboard" 
              className="w-full h-full object-cover opacity-50 mix-blend-screen"
            />
            {/* Gradient Overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>

          {/* Feature Badges Overlay */}
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 md:gap-6 p-6">
            {[
              "Dedicated Account Manager",
              "Priority Execution",
              "Exclusive Spreads",
              "Custom Trading Conditions"
            ].map((text, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-[#3b66f5] text-white px-4 py-2.5 md:px-7 md:py-4 rounded-full shadow-xl border border-white/20 hover:scale-105 transition-transform cursor-default"
              >
                <div className="bg-white rounded-full p-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#3b66f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] md:text-base font-bold whitespace-nowrap tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Call to Action */}
        <button className="bg-[#3b66f5] hover:bg-[#2a55e4] text-white px-12 py-4 md:px-16 md:py-5 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(59,102,245,0.4)] hover:-translate-y-1">
          Open Elite Account
        </button>
      </div>
    </div>

    <Fund/>
    </>
  )
}

export default AccountTypes