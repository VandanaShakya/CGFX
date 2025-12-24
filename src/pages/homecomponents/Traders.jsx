import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/data';




const Traders = () => {
  const [activeTab, setActiveTab] = useState('Stocks');


  const tabs = ['Forex', 'Indices', 'Stocks', 'Crypto'];

  return (
    <section className="bg-[#f8faff] mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#051139] p-8 md:p-16 lg:p-20 m-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subheader */}
        <p className="text-[#00d1b2] font-bold tracking-widest text-sm uppercase mb-4">
          Empowering the Traders
        </p>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#051139] mb-10">
          CFDs on
        </h2>

        {/* --- CATEGORY TABS --- */}
        <div className="inline-flex bg-white p-2 rounded-full shadow-sm border border-gray-100 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-black text-white shadow-lg' 
                : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC CARD --- */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden text-left p-6 md:p-10 border border-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column: Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square">
                <img 
                  src={content[activeTab].image} 
                  alt={activeTab}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Content & Placeholder Table */}
              <div className="flex flex-col">
                {/* Simulated Instrument Header */}
                <div className="hidden sm:grid grid-cols-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8">
                  <span>Instrument</span>
                  <span className="text-center">Buy</span>
                  <span className="text-center">Sell</span>
                  <span className="text-center">Change</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#051139] mb-4">
                    {content[activeTab].title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {content[activeTab].desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-[11px] text-gray-300 font-medium">
                    *Indicative spread as in SGFX ECN Account
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Traders;