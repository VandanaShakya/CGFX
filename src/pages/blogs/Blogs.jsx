import React from 'react';
import { Globe, BarChart3 } from 'lucide-react';
import BlogNextSection from './BlogNextSection';
import Fund from '../../components/Fund';


const Blogs = () => {
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
          {/* Top Label */}
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
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
    <BlogNextSection/>
    <Fund/>
 </>
  );
};

export default Blogs;