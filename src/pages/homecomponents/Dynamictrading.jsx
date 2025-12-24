import React, { useState } from "react";
import { Monitor, Smartphone, Laptop } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const platforms = [
  { id: "Web Trader", icon: Monitor, label: "Web Trader" },
  { id: "Mobile", icon: Smartphone, label: "Mobile App" },
  { id: "Desktop", icon: Laptop, label: "MetaTrader 5" },
];

const Dynamictrading = () => {
  const [activeTab, setActiveTab] = useState("Desktop");

  return (
    <section className="mx-auto max-w-7xl m-16 rounded-[40px] overflow-hidden bg-gradient-to-br from-[#020b18] via-[#031b3c] to-[#020b18] p-10 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
      
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-14">
        <p className="text-[#00d1b2] text-xs font-bold tracking-widest uppercase mb-4">
          Trade Smarter. Trade SGFX.
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Dynamic Trading Platforms for Mobile and Beyond
        </h2>

        {/* ---------- TAB SELECTOR ---------- */}
        <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20">
          {platforms.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg"
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

      {/* ---------- INNER IMAGE-LIKE CARD ---------- */}
      <div className="relative rounded-[32px] p-10 md:p-14 bg-gradient-to-br from-[#0b2a55]/90 via-[#0e3b78]/80 to-[#081a36]/90 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,0.05)]">

        {/* Glow overlay */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 text-white">
              <h3 className="text-2xl font-bold mb-2">MetaTrader 5</h3>
              <p className="text-xs text-white/70 mb-6">
                Powered by SGFX
              </p>

              <p className="text-sm leading-relaxed text-white/80 mb-8 max-w-md">
                MetaTrader 5 is the global standard for multi-asset trading.
                Harness professional tools including advanced charting,
                multiple timeframes, built-in indicators, and strategy testing.
                Full support for automated trading and expert advisors (EAs).
              </p>

              {/* DOWNLOAD BUTTONS */}
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                {["App Store", "Google Play", "Windows", "Mac"].map((item) => (
                  <button
                    key={item}
                    className="bg-white text-black text-xs font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    Download on {item}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL BLOCK */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-2xl rounded-full" />
                <img
                  src="https://via.placeholder.com/420x360?text=Trading+Visual"
                  alt="Trading Visual"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- FOOTER ---------- */}
      <div className="text-center mt-12">
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
          See all Products
        </button>
      </div>
    </section>
  );
};

export default Dynamictrading;
