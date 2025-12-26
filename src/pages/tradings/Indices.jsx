import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { indicesFAQData } from '../../data/data';
import Fund from '../../components/Fund';


const Indices = () => {
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
                Your Gateway to Global Indices
              </span>

              <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                Remodel Your Indices Trading Framework Today
              </h2>

              <p className="text-blue-100 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
                Step into global markets with our advanced platform, powered by
                MetaTrader 5. Offering trading in global, recognized indices.
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
        <div className="max-w-4xl mx-auto space-y-16">

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Remodel Your Indices Trading Strategy with SGFX
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Markets are full of surprises. Even when your research is solid
                and the broader trend looks promising, one poorly performing
                stock can hold you back.
              </p>
              <p>
                That is where index trading steps in. Instead of relying on
                individual stocks, you trade on the performance of the overall
                market.
              </p>
              <p>
                At SGFX, we make this approach simple and powerful. Our index
                trading platform, built on MetaTrader 5, offers intuitive tools,
                fast execution, and full market insight.
              </p>
              <p>
                Whether you are building your first strategy or fine-tuning an
                advanced one, our platform gives you the control and clarity to
                act with confidence.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Understanding Indices in Trading
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Indices track the performance of a group of assets, usually
                stocks. They reflect how a particular market or sector is
                moving.
              </p>
              <p>
                Rather than investing in one company, trading in indices allows
                you to follow broader market trends, often reducing exposure to
                individual stock risk.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-6">
              <li>
                <strong>Global Indices:</strong> Trade benchmarks like MSCI World
                Index, FTSE All-World Index, or S&P Global 1200.
              </li>
              <li>
                <strong>Regional Indices:</strong> Focus on regions such as Asia,
                Europe, or Australia.
              </li>
              <li>
                <strong>National Indices:</strong> Trade indexes like the SSE
                Composite Index or FTSE 100.
              </li>
              <li>
                <strong>Sector Indices:</strong> Specialize in technology,
                energy, healthcare, and more.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Best Practices for Indices Trading
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Market Sentiment:</strong> Emotions and confidence levels
                can drive entire indices.
              </li>
              <li>
                <strong>Industry News:</strong> Regulations or innovations can
                impact sector-based indices.
              </li>
              <li>
                <strong>Index Rebalancing:</strong> Periodic updates may create
                short-term volatility.
              </li>
              <li>
                <strong>Commodity Prices:</strong> Resource-linked indices react
                strongly to price changes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Why is SGFX the Best Indices Trading Platform?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SGFX is built for traders who want more from their trading
                platform. Powered by MetaTrader 5, we deliver fast execution,
                live signals, and advanced charting tools.
              </p>
              <p>
                Recognized as one of the top trading platform providers in the
                UAE, SGFX is trusted by traders across experience levels.
              </p>
              <p>
                Want more insights? Visit our blog for practical guides, trading
                tips, and real-world indices trading examples.
              </p>
            </div>
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
            {indicesFAQData.map((item, index) => (
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

export default Indices