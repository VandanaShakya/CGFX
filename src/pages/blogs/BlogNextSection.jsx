import React from 'react';

const BlogNextSection = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#003B95] via-[#001A4D] to-[#050B18] px-6 py-20 md:py-24 text-center shadow-2xl">
        
        {/* Content Wrapper */}
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Subheading Label */}
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
            Stay Ahead of the Market
          </span>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Subscribe for the Latest Trading News
          </h2>

          {/* Description */}
          <p className="text-blue-100/70 text-sm md:text-base mb-10 max-w-lg">
            Get expert insights, market news, and updates straight to your inbox.
          </p>

          {/* Form Section */}
          <form className="w-full max-w-md flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              required
            />
            
            <button
              type="submit"
              className="w-full md:w-max mx-auto px-10 py-4 bg-[#A3ADB8] hover:bg-[#BFC7D1] text-[#001A4D] font-semibold rounded-lg transition-colors duration-200"
            >
              Subscribe To Our Newsletter
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BlogNextSection;