import React, { useState } from 'react'
import { FAQData } from '../../data/data'
import { ChevronDown, ChevronUp } from 'lucide-react';
import Fund from '../../components/Fund';

const Forex = () => {
    const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className=" py-12 space-y-20">


      {/* 2. Blue Hero Section (Stock Trading) */}
      <section className="mt-25 max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#001D4A] via-[#003B8E] to-[#0051C3] rounded-[40px] py-24 px-6 text-center shadow-xl">
          
          {/* Background Image Tags (Floating Elements) */}
          <img 
            src="https://path-to-cyan-coin-left.png" 
            alt="coin" 
            className="absolute -left-10 top-1/4 w-40 md:w-56 opacity-80 pointer-events-none select-none"
          />
          <img 
            src="https://path-to-cyan-coin-bottom-left.png" 
            alt="coin" 
            className="absolute left-10 -bottom-10 w-32 md:w-48 opacity-60 pointer-events-none select-none rotate-12"
          />
          <img 
            src="https://path-to-cyan-coin-right.png" 
            alt="coin" 
            className="absolute -right-12 bottom-0 w-48 md:w-72 opacity-90 pointer-events-none select-none"
          />

          {/* Main Content Block */}
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[#00FFA3] uppercase tracking-[0.3em] text-[10px] md:text-xs font-black mb-6 block">
              Smart Online Stock Trading Starts Here
            </span>
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Invest in Stocks With the <br className="hidden md:block" /> Best Trading Platform
            </h2>
            <p className="text-blue-100 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
              Invest in global stocks with zero commission, real-time control, and professional-grade tools. 
              Access over 350 equities from major global markets on the sgfx platform built for speed, 
              security, and flexible strategy execution.
            </p>
            <button className="bg-white text-[#001D4A] font-bold py-4 px-12 rounded-md hover:scale-105 transition-transform duration-300 shadow-lg active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </section>

    </div>



{/* second section */}
<div className="bg-gray-200 w-7xl m-auto rounded-[40px] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section 1: Opportunities */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Forex Trading Opportunities with SGFX</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Forex trading market is one of the most liquid and fast-moving in the world. With trillions of dollars' worth of assets 
              moving around daily, it's a global arena packed with opportunity. Whether you're an experienced Forex trader or 
              stepping in for the first time, the Forex market offers constant movement, sharp price action, and real potential to grow 
              your capital.
            </p>
            <p>
              At SGFX, we don't just provide access to the Forex market, we help you trade it with confidence. Our mission is to 
              create a seamless, intuitive experience where strategy meets execution, powered by modern tools and high-speed 
              technology.
            </p>
          </div>
        </section>

        {/* Section 2: Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Forex Trading: An Overview and Market Framework</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              The Forex market (foreign exchange market) is where currencies are bought, sold, and examined 24 hours a day, five 
              days a week. It's not just the largest financial market on the planet, it's an environment that affects our day-to-day lives.
            </p>
            <p>
              While travelers may convert currencies for practical reasons, Forex brokers and traders operate in this space with a 
              goal: to profit from changes in exchange rates. Every trade involves a pair, one currency exchanged for another.
            </p>
            <p>There are three main types of currency pairs available on our Forex trading platform:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-900">Major Pairs:</strong> Heavily traded global currencies like EUR/USD, USD/JPY, and GBP/USD.</li>
              <li><strong className="text-gray-900">Minor Pairs:</strong> Combinations excluding the U.S. dollar, such as EUR/GBP or AUD/JPY.</li>
              <li><strong className="text-gray-900">Exotic Pairs:</strong> Aligning major currencies with currencies from emerging economies like USD/TRY or EUR/ZAR.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Terminologies */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Key Forex Market Terminologies</h2>
          <p className="text-gray-600 mb-6">
            If you're new to Forex trading, learning the basic language is key. It can save you a lot of confusion later. These key 
            terms are essential for navigating the platform and developing sound strategies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong className="text-gray-900">Pip:</strong> The smallest increment in the price of a currency.</li>
            <li><strong className="text-gray-900">Bid:</strong> The rate at which buyers will buy a currency.</li>
            <li><strong className="text-gray-900">Ask:</strong> The rate at which sellers are prepared to sell a currency.</li>
            <li><strong className="text-gray-900">Spread:</strong> The difference between the bid and ask prices.</li>
            <li><strong className="text-gray-900">Lot:</strong> The standard quantity for buying or selling currencies.</li>
            <li><strong className="text-gray-900">Leverage:</strong> Borrowing funds from brokers to increase the size of a trading position.</li>
            <li><strong className="text-gray-900">Margin:</strong> The amount required to open and maintain a leveraged position.</li>
            <li><strong className="text-gray-900">Position:</strong> Indicates a trader's stance in the market after executing a trade.</li>
          </ul>
        </section>

        {/* Section 4: Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Best Practices for Forex Trading</h2>
          <p className="text-gray-600 mb-6">
            There's more to success than just watching forex signals carefully. The best strategies rely on care, precision, and a 
            little experimentation.
          </p>
          <ul className="space-y-6 text-gray-600">
            <li className="flex gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <strong className="text-gray-900">Diversify Your Portfolio:</strong> Don't limit yourself to one or two trades. Diversification is key. Our platform gives you 
                access to over 40 currency pairs, allowing you to explore different strategies using CFDs, and futures. It's about 
                finding the mix that works for you, and building resilience into your approach.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <strong className="text-gray-900">Use A Platform Built for Traders:</strong> We know the market moves fast. That's why we've built a forex platform that 
                keeps up. From real-time price updates to integrated charting and forex indicators, everything is designed to keep 
                you informed and in control. You can tweak strategies on the fly and react instantly to market shifts.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span>
                <strong className="text-gray-900">Start with a Demo Account:</strong> Testing new strategies? New to trading? Open a Forex demo account and practice in 
                a risk-free environment.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <div className="w-7xl m-auto my-5 rounded-[40px] bg-[#051937] flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full text-center">
        {/* Header Section */}
        <h4 className="text-[#00FF87] uppercase tracking-widest text-sm font-semibold mb-4">
          Frequently Asked Questions
        </h4>  
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Your Trading Questions, Clarified
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Find quick, clear answers to the most common trading, account, and platform questions.
        </p>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQData.map((item, index) => (
            <div 
              key={index}
              className="bg-[#102a50] rounded-xl overflow-hidden transition-all duration-300 border border-white/5"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-white hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <div className="bg-white/10 rounded-full p-1">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Fund/>
    </>
  )
}

export default Forex