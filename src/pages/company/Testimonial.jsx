import React from 'react'
import { testimonials } from '../../data/data'; 

const Testimonial = () => {
  return (
    <>
        <section className="bg-white py-16 px-4 font-sans">
      {/* Container restricted to roughly 70% width on desktops */}
      <div className="max-w-6xl mx-auto lg:w-[75%]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-[#2DD4BF] font-semibold text-sm tracking-widest uppercase mb-2">
            Powerful Results. Real Voices.
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            These are more than just words they're results. Our clients are seeing real growth, 
            and they're sharing how our platform helped them take their trading to the next level.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="break-inside-avoid bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col justify-between"
            >
              <p className="text-gray-500 italic leading-relaxed mb-8">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                {item.img ? (
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-white font-bold text-lg">
                    {item.initials}
                  </div>
                )}
                <div>
                  <h5 className="font-bold text-gray-700 leading-tight">{item.name}</h5>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <span className="mr-1">📍</span> {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial