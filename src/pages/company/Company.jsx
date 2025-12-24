import React from 'react';
import ExploreTrading from './ExploreTrading';
import Testimonial from './Testimonial';
import Fund from '../../components/Fund';


const Company = () => {
 
  return (
    <>
         <div className="mt-50 relative w-[70%] m-auto min-h-[500px] md:min-h-[500px] lg:min-h-[800px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1441] to-[#0C4FA1] px-6 md:px-12 pt-10">
  
  {/* Floating Coins */}
  <img src="/images/coin-dollar.png" alt="$" className="absolute top-5 left-10 w-16 h-16 animate-float-slow" />
  <img src="/images/coin-euro.png" alt="€" className="absolute top-20 right-16 w-20 h-20 animate-float-medium" />
  <img src="/images/coin-yen.png" alt="¥" className="absolute bottom-20 left-16 w-20 h-20 animate-float-fast" />
  <img src="/images/coin-pound.png" alt="£" className="absolute bottom-5 right-10 w-16 h-16 animate-float-slow" />

  {/* Center Content */}
  <div className="relative z-10 text-center max-w-3xl">
    <span className="text-emerald-400 uppercase tracking-wider text-sm md:text-base">Who We Are</span>
    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
      A Trusted Name in <br /> Online Trading
    </h1>
    <p className="text-white/70 text-base md:text-lg mt-4">
      Focusing on what truly matters: reliable trading tools, clear communication, and long-term relationships with our clients.
    </p>
    <button className="mt-6 px-8 py-3 bg-white text-[#0B1441] font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
      Get Started
    </button>
  </div>
</div>

{/* second section  */}
<div className="bg-white min-h-screen py-16 px-4 font-sans text-gray-700">
      {/* Main Container - Constrained to 70% width on large screens */}
      <div className="max-w-full lg:w-[70%] mx-auto">
        
        {/* Sub-header / Tagline */}
        <p className="text-[#2DD4BF] font-semibold text-xs tracking-widest uppercase mb-4">
          Trade with confidence. Grow with purpose.
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Empowering Traders
        </h1>

        {/* Section: About SGFX */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-black mb-4">About SGFX</h2>
          <div className="space-y-6 leading-relaxed text-[15px]">
            <p>
              At SGFX, we believe good trading starts with trust. That means no shortcuts or confusion, 
              just a clear, reliable platform built for people who are serious about how they invest.
            </p>
            <p>
              SGFX is an independent financial services company with a strong foundation in global markets. 
              Our team brings years of experience in trading, risk management, and client support to today's 
              trading community. We've taken what we've learned and built something simple, solid, and 
              made to last and we're proud to invite you to join our journey.
            </p>
          </div>
        </section>

        {/* Section: Regulated and Responsible */}
        <section className="mb-10">
          <h3 className="text-md font-bold text-black mb-4">Regulated and Responsible</h3>
          <div className="space-y-6 leading-relaxed text-[15px]">
            <p>
              We're regulated in Mauritius under an <span className="font-bold">Investment Dealer License</span> issued by the <span className="font-bold">Financial Services Commission (FSC)</span>. 
              That matters. It means there are rules we have to follow, and we're more than okay with that. 
              For us, it's the foundation of transparency and stability.
            </p>
            <p>
              Our clients come from all over the world, including fast-growing regions where reliable 
              access to global markets hasn't always been easy to find. SGFX exists to change that, 
              ensuring everyone has the freedom to trade, wherever they are.
            </p>
          </div>
        </section>

        {/* Section: What You Can Trade */}
        <section className="mb-10">
          <h3 className="text-md font-bold text-black mb-4">What You Can Trade</h3>
          <p className="mb-4 text-[15px]">We offer a broad set of markets, all accessible through a single platform:</p>
          <ul className="list-disc list-inside space-y-1 mb-6 text-[15px] ml-2">
            <li>Currencies (Forex)</li>
            <li>Global equity indices</li>
            <li>Precious metals</li>
            <li>Energy products</li>
            <li>Crypto CFDs</li>
          </ul>
          <p className="leading-relaxed text-[15px]">
            Our customers have access to more than <span className="font-bold">300 instruments</span>. 
            You can build strategies, diversify your exposure, or keep things simple. However you trade, 
            we aim to give you the space to do it well.
          </p>
        </section>

        {/* Section: Who We Are */}
        <section className="mb-10">
          <h3 className="text-md font-bold text-black mb-4">Who We Are</h3>
          <div className="space-y-6 leading-relaxed text-[15px]">
            <p>
              SGFX was started by a group of professionals who've worked in the financial industry long 
              enough to know where it works, and where it doesn't. We've seen platforms overpromise 
              and underdeliver. We've seen traders pushed into setups that don't really serve them.
            </p>
            <p>
              So we built SGFX to do the opposite. We're here to keep things focused, grounded, and 
              aligned with what real traders actually need: fair conditions, useful tools, fast execution, 
              and someone who answers when you call. It's our commitment to our clients that makes us 
              a partner, not just a platform provider.
            </p>
          </div>
        </section>

      </div>
    </div>
<ExploreTrading/>
<Testimonial/>
<Fund/>

    </>
  );
};

export default Company;