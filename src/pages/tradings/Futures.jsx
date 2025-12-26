import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";
import { FuturesFAQData } from '../../data/data';
import Fund from '../../components/Fund';


const Futures = () => {
     const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
   
    <>
      <div className="py-12 space-y-20">
        <section className="mt-24 max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden bg-gradient-to-tr from-[#050b18] via-[#0e3b78] to-[#050b18] rounded-[40px] py-24 px-6 text-center shadow-xl">
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-[#00FFA3] uppercase tracking-[0.3em] text-[10px] md:text-xs font-black mb-6 block">
                Fast, Flexible, Futures
              </span>

              <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                Trade In Futures Today
              </h2>

              <p className="text-blue-100 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
                Explore our advanced trading platform designed for precision,
                speed, and control. Practice with a demo account, or go live to
                trade CFDs and Futures with expert 24x7 support.
              </p>

              <button className="bg-white text-[#001D4A] font-bold py-4 px-12 rounded-md hover:scale-105 transition-transform duration-300 shadow-lg active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-gray-200 w-7xl m-auto rounded-[40px] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-14">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Discover New Futures Trading Opportunities with SGFX
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Futures trading can be a powerful tool. One that opens the door
                to profit potential and effective risk management when used
                wisely. But it’s not a game of chance.
              </p>
              <p>
                The futures market moves fast, and even the smallest
                miscalculation can hit hard. That’s why preparation matters.
                Strategy, insight, and a trading platform you can trust are all
                essential.
              </p>
              <p>
                At SGFX, we’ve built an ecosystem that goes beyond basic
                functionality. Our advanced trading platform is fast,
                efficient, and packed with useful features, helping traders read
                the market, act quickly, and stay a step ahead.
              </p>
              <p>
                From scanning signals to executing precision trades, SGFX is the
                futures broker serious traders trust to navigate opportunity and
                volatility alike.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Trading Futures with a Range of Financial Instruments
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At its core, a futures contract is straightforward: it’s an
                agreement to buy or sell assets like stocks, oil, currencies, or
                indices at a fixed price on a future date.
              </p>
              <p>
                Futures aren’t just for hedging. They are powerful tools for
                speculation, allowing traders to go long or short and profit
                from price movements without owning the asset itself.
              </p>
              <p>
                Stock futures are especially popular due to liquidity and
                efficiency. For broader exposure, we offer index futures like
                Nasdaq, SmallCap 600, and DFM General.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Advanced Tools and Features for Futures Trading
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We built the SGFX trading platform for serious traders who demand
                speed, precision, and insight. Built-in technical analysis,
                custom watchlists, and real-time execution give you an edge.
              </p>
              <p>
                With leverage, tight spreads, and low-latency execution, traders
                can manage risk efficiently while accessing markets ranging
                from commodities to crypto.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose SGFX for Your Futures Trading Needs?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>24x5 Support:</strong> Help when you need it.</li>
              <li><strong>Diverse Asset Access:</strong> Trade CFDs, futures, stocks, forex, and indices.</li>
              <li><strong>Trust & Transparency:</strong> Clear pricing, reliable systems.</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Whether you’re starting with a demo or going live, SGFX helps you
              explore, test, learn, and execute — all in one place.
            </p>
          </section>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="w-7xl m-auto my-10 rounded-[40px] bg-[#051937] flex items-center justify-center p-6 font-sans">
        <div className="max-w-6xl w-full text-center">
          <h4 className="text-[#00FF87] uppercase tracking-widest text-sm font-semibold mb-4">
            Frequently Asked Questions
          </h4>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Your Trading Questions, Clarified
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Find quick, clear answers to the most common trading, account, and
            platform questions.
          </p>

          <div className="space-y-4 text-left">
            {FuturesFAQData.map((item, index) => (
              <div
                key={index}
                className="bg-[#102a50] rounded-xl overflow-hidden border border-white/5"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-white"
                >
                  <span className="text-lg font-semibold">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>

                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-400">{item.answer}</p>
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

export default Futures