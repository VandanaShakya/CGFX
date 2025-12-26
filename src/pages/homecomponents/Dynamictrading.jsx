import React, { useState } from "react";
import { Monitor, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
 
const platforms = [
  { id: "web", label: "Web Trader", icon: Monitor },
  { id: "mt5", label: "MetaTrader 5", icon: Laptop },
];
const downloadOptions = [
  { name: "Windows", link: "#", icon: <Monitor size={18} /> },
  { name: "Mac", link: "#", icon: <Laptop size={18} /> },
  { name: "Windows", link: "#", icon: <Monitor size={18} /> },
  { name: "Mac", link: "#", icon: <Laptop size={18} /> },
]

const Dynamictrading = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
<div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#0b2a55] via-[#0e3b78] to-[#081a36] w-7xl m-auto rounded-[40px]">
  <div className="w-full max-w-7xl ">
    {/* HEADER */}
    <div className="text-center mb-14">
      <p className="text-[#00d1b2] text-xs font-bold tracking-widest uppercase mb-4">
        Trade Smarter. Trade SGFX.
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Dynamic Trading Platforms
      </h2>

      {/* TAB SELECTOR */}
      <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
        {platforms.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>

    {/* ================= ANIMATED INNER CARD ================= */}
    <AnimatePresence mode="wait">
      {activeTab === "web" && (
        <motion.div
  key="web-card"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -40 }}
  transition={{ duration: 0.45 }}
  className="relative w-[80%] m-auto max-w-7xl mx-auto rounded-[32px] p-10 md:p-16 bg-gradient-to-r from-[#134583] via-[#143357] to-[#17232C] overflow-hidden flex flex-col md:flex-row items-center justify-between text-white"
>
  {/* Left Content */}
  <div className="md:w-1/2 flex flex-col items-start text-center md:text-left mb-10 md:mb-0">
    <h3 className="text-3xl md:text-5xl font-bold mb-4">
      Experience seamless trading with SGFX
    </h3>
    <p className="text-sm md:text-base text-white/80 mb-6">
      Trade instantly from your browser with our advanced Web Trader platform. No downloads, no delays — full market access anywhere.
    </p>

    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
      <Monitor size={20} /> Web Trader
    </button>
  </div>

  {/* Right Image */}
  <div className="md:w-1/2 flex justify-center md:justify-end">
    <img
      src=""
      alt="Web Trader"
      className="w-full max-w-[300px] md:max-w-[400px] object-contain"
    />
  </div>
</motion.div>
      )}

      {activeTab === "mt5" && (
        <div className="max-w-[80%] mx-auto px-4">
        <div className="bg-gradient-to-r from-[#134583] via-[#143357] to-[#17232C] rounded-[40px] shadow-lg p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trade with SGFX on MetaTrader 5 Platform
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              MetaTrader 5 (MT5) is a leading, multi-asset trading solution trusted worldwide. 
              It combines high-speed performance with professional-grade strategic tools, ideal 
              for beginners and advanced users.
            </p>

           

            {/* Download Blocks */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {downloadOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  className="flex items-center justify-center gap-2 bg-gray-100 text-black font-bold py-3 rounded-lg hover:bg-gray-400 transition"
                >
                  {option.icon}
                  <span>{option.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src=""
              alt="MetaTrader 5 Platform" 
              className="w-full max-w-md rounded-xl shadow-md object-cover"
            />
          </div>

        </div>
      </div>
      )}
    </AnimatePresence>

  <div className="mt-12 flex justify-center">
  <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">
    See all Products
  </button>
</div>

  </div>
</div>



  );
};

export default Dynamictrading;
