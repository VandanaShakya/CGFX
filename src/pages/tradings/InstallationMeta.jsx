import React from 'react'
import { Globe, BarChart3  } from 'lucide-react';
import { installationStepsData } from '../../data/data';
import Fund from '../../components/Fund';


const InstallationMeta = () => {
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
         <span className="block text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
          Data-Driven Trading Insights
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
          SGFX Trading Insights and Learning
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-blue-100/80 leading-relaxed font-light">
          Explore the SGFX Blog for expert insights and analysis on futures,
          indices, stocks, currencies, CFDs, and Forex. Stay informed and ahead
          in the financial markets with our categorized content.
        </p>
        </div>
      </div>
    </div>



<div className="w-7xl m-auto rounded-[40px] my-20 min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-3xl w-full">
        
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
            How to download and install MetaTrader 5
          </h1>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            MT5 download and installation instructions
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed text-[17px]">
            <p>
              Installing software isn't usually exciting, but if you're looking to trade globally with SGFX, you'll need MetaTrader 5 set up first. The good news? It's not too complicated, and once it's installed, the platform is solid, reliable, and easy to use. This guide will walk you through it without assuming you've done this before.
            </p>
            <p>
              If you've already used MetaTrader on another broker's platform, this will feel familiar. If not, no problem, just take it one step at a time.
            </p>
          </div>
        </header>

        {/* Stepper Section */}
        <div className="flex flex-col items-start mb-10">
          {installationStepsData.map((step, index) => (
            <div key={step.id} className="flex flex-col">
              {/* Row: Number Box + Text */}
              <div className="flex items-center">
                {/* Numbered Box */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center bg-[#16B9AA] text-white font-bold rounded-xl text-lg sm:text-xl shadow-sm">
                  {step.id}
                </div>
                {/* Step Text */}
                <h3 className="ml-6 text-base sm:text-lg font-bold text-gray-800">
                  {step.title}
                </h3>
              </div>
              
              {/* Connector Line - Directly below the block */}
              {index !== installationStepsData.length - 1 && (
                <div className="w-12 sm:w-16 flex justify-center">
                  {/* h-8 controls the vertical gap between blocks */}
                  <div className="h-8 border-l-2 border-dotted border-[#16B9AA]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info List Section */}
        <div className="mb-10">
          <p className="font-bold text-gray-900 mb-4 text-[17px]">A few things to look for:</p>
          <ul className="space-y-3 text-gray-600 text-[17px]">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <span className="font-bold text-gray-800">Market Watch window:</span> This is where you see current prices
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <span className="font-bold text-gray-800">Navigator:</span> This lets you access your account and indicators
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <span className="font-bold text-gray-800">Terminal:</span> This shows trades, balance, and alerts
              </span>
            </li>
          </ul>
          <p className="mt-4 text-gray-500 italic text-[16px]">
            You don't need to memorize anything today. Just get a feel for it
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
            {/* Replace with actual SVG icons if available */}
            <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
            <div className="text-left">
              <p className="text-[10px] uppercase leading-none">Download on the</p>
              <p className="text-lg font-semibold leading-none">Windows</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
            <div className="text-left">
              <p className="text-[10px] uppercase leading-none">Download on the</p>
              <p className="text-lg font-semibold leading-none">App Store</p>
            </div>
          </button>
        </div>
         <div className='mt-10'>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
           Account Security:
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
           Avoid storing trading passwords in plain text on your desktop or any device. We recommend using a 
           reputable password manager or committing your credentials to memory. Additionally, refrain from accessing
            your trading account on public or shared computers, as these environments may pose increased security risks. <br/><br />
            If you detect any unusual activity on your account such as unauthorised trades, suspicious messages, or other irregularities,
             it is crucial to cease trading immediately and contact SGFX Support at support@sgfx.com.<br/>
          </p>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Risk Warning:
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            Trading derivatives involves substantial risk and is not appropriate for all investors. Losses may exceed your 
            initial deposit, particularly if you are classified as a professional client, in which case you may incur losses 
            significantly greater than your original investment. When you trade our derivative products, you do not acquire any 
            rights, entitlements, or obligations relating to the underlying financial instruments.
                <br /><br /><br />
                The information provided on this website is general in nature and does not consider your individual investment 
                objectives, financial situation, or specific needs. Before acting on any information or advice, you should assess 
                its suitability in light of your personal circumstances. We strongly recommend seeking independent financial advice 
                if you are unsure.Ensure you have read and understood our <a href="#" className='text-blue-500 font-underline'>Risk Disclosure Policy</a> and are fully aware of the associated 
                risks before engaging in any trading activity.
     
          </p>
        </div>

        
      </div>


      
    </div>

    <Fund/>
 </>
  )
}

export default InstallationMeta