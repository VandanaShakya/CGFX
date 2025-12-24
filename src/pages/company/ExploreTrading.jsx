import React from 'react'
import { ArrowRightCircle} from 'lucide-react';
import { CompanyData } from '../../data/data';


const ExploreTrading = () => {
  return (
   <>
    
    <div className="bg-slate-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <p className="text-emerald-500 font-bold tracking-widest text-xs mb-4 uppercase">
          Regulated. Trusted. Transparent.
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Explore our Trading conditions effortlessly
        </h1>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
          Fast execution, tight spreads and a choice of account types for every trading style.
        </p>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mb-16">
          {CompanyData.map((stat, index) => (
            <div
              key={index}
              className={`w-full md:w-80 rounded-3xl p-8 flex flex-col justify-between text-left text-white bg-gradient-to-br ${stat.gradient} ${stat.height} shadow-xl transition-transform hover:scale-105`}
            >
              <h2 className="text-3xl font-semibold mt-4">{stat.title}</h2>
              <div className="flex items-center gap-2 opacity-90">
                {stat.icon}
                <span className="text-sm font-medium">{stat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {['Account Type Comparison', 'Product Specification', 'Trading Platform Overview'].map((link) => (
            <a
              key={link}
              href="#"
              className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              {link}
              <ArrowRightCircle className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
   </>
  )
}

export default ExploreTrading