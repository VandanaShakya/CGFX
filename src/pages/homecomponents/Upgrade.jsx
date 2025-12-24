import React from "react";
import {
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  RefreshCcw,
  LayoutGrid,
} from "lucide-react";

import { cards } from "../../data/data";

export default function Upgrade() {
  return (
    <section className="py-16 px-4 bg-gradient from-[#084da7] via-[#061C3A] to-[#020B1A]">
      <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-14 shadow-2xl">
        
        {/* Heading */}
        <p className="text-center text-sm tracking-widest text-emerald-400 uppercase">
          Your Path to Smarter Trading
        </p>

        <h2 className="text-center text-2xl md:text-4xl font-bold mt-3">
          Upgrade Your Strategy with SGFX
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 h-40 flex flex-col justify-between ${card.bg}`}
            >
              <div className="text-xl font-semibold">{card.value}</div>

              <div className="flex items-center gap-2 text-sm text-white/90">
                <card.icon size={18} />
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-white/50 mt-8">
          * TnC Apply
        </p>

        <div className="flex justify-center mt-6">
          <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Account Types
          </button>
        </div>
      </div>
    </section>
  );
}
