import React from 'react'
import Fund from '../../components/Fund'

const Regulation = () => {
  return (
    <>
  <div className="mt-10 w-full flex justify-center px-4 py-16 md:py-24 bg-white">
      {/* Container restricted to 7xl */}
      <div className="w-full max-w-7xl relative">
        
        {/* Main Card with Gradient */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#003B95] via-[#002B6B] to-[#0A1128] py-20 px-6 text-center shadow-2xl">
          
          {/* Facebook - Top Left */}
          <div className="absolute top-10 left-[8%] hidden md:block animate-bounce duration-[3000ms]">
            <div className="glass-icon rotate-[-15deg] p-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                alt="Facebook" 
                className="w-8 h-8 object-contain brightness-0 invert-[0.8] sepia-[1] saturate-[3] hue-rotate-[150deg]" 
              />
            </div>
          </div>

          {/* WhatsApp - Bottom Left */}
          <div className="absolute bottom-10 left-[12%] hidden md:block animate-pulse">
            <div className="glass-icon rotate-[10deg] p-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                alt="WhatsApp" 
                className="w-10 h-10 object-contain brightness-0 invert-[0.8] sepia-[1] saturate-[3] hue-rotate-[150deg]" 
              />
            </div>
          </div>

          {/* YouTube - Top Right */}
          <div className="absolute top-12 right-[12%] hidden md:block animate-bounce duration-[4000ms]">
            <div className="glass-icon rotate-[12deg] p-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
                alt="YouTube" 
                className="w-8 h-8 object-contain brightness-0 invert-[0.8] sepia-[1] saturate-[3] hue-rotate-[150deg]" 
              />
            </div>
          </div>

          {/* Instagram - Bottom Right */}
          <div className="absolute bottom-[-10px] right-[8%] hidden md:block">
            <div className="glass-icon-circle p-6">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" 
                alt="Instagram" 
                className="w-12 h-12 object-contain brightness-0 invert-[0.8] sepia-[1] saturate-[3] hue-rotate-[150deg]" 
              />
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase">
              OUR COMPANY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Regulation & Licenses
            </h1>
               <p className="text-blue-50 text-base md:text-lg font-medium">
                SGFX is a brand name of <span className="text-emerald-300 font-bold">Spectra Global LTD (Mauritius)</span>
              </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-icon {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 15px rgba(255,255,255,0.2), 5px 15px 25px rgba(0,0,0,0.4);
        }
        .glass-icon:hover {
          transform: scale(1.1) rotate(0deg);
          background: rgba(255, 255, 255, 0.15);
        }
        .glass-icon-circle {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 20px rgba(255,255,255,0.2), 5px 15px 30px rgba(0,0,0,0.4);
        }
        .glass-icon-circle:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
{/* regulation next section */}
<div className="flex flex-col gap-10 p-4 md:p-10 bg-gray-50 min-h-screen">
      
      {/* --- UPPER SECTION: Legal Information --- */}
      <div className="max-w-7xl mx-auto w-full rounded-[32px] p-8 md:p-12 shadow-sm bg-gray-200">
        <div className="flex items-center gap-4 mb-6">
          {/* Logo / Icon Placeholder */}
          <div className="w-12 h-12 flex-shrink-0">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2910/2910311.png" 
              alt="Legal Icon" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-[#2DD4BF] font-bold text-xs tracking-widest uppercase">SGFX</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Legal Information</h2>
          </div>
        </div>
        
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          Regulations SGFX brand under Spectra Global LTD is regulated financial services provider, 
          committed to maintaining the highest standards of transparency, integrity, and client 
          protection. United Arab Emirates Spectra Global LTD is licensed by the Securities and 
          Commodities Authority (SCA) in the United Arab Emirates, reinforced our commitment 
          to compliance and agricultural capital organization. SCA License Number: 20200000307 
          Mauritius Spectra Global LTD (MU) is authorized by the Financial Services Commission 
          (FSC) of the Republic of Mauritius as an Investment Dealer. Company Registration 
          Number: 199453 License Number: GB22201302
        </p>
      </div>

      {/* --- LOWER SECTION: Trade Banner --- */}
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden rounded-[40px] aspect-[16/9] md:aspect-[21/9] lg:aspect-[25/9]">
        
        {/* Background Image Block */}
        <img 
          src="https://images.unsplash.com/photo-1611974714658-d78e38d43891?q=80&w=2070&auto=format&fit=crop" 
          alt="Trading Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 text-white space-y-4 md:space-y-6">
          <div>
            <span className="text-[#2DD4BF] font-bold text-xs md:text-sm tracking-widest uppercase">
              Where Trust Matters.
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
              Trade With A Reliable Broker
            </h1>
          </div>
          
          <p className="text-gray-200 max-w-lg text-sm md:text-lg leading-snug">
            SGFX offers an extensive range of products and services, 
            providing a top-notch trading experience.
          </p>
          
          <div className="pt-4">
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              Read more about SGFX
            </button>
          </div>
        </div>
      </div>

    </div>

    <Fund/>
    </>
  )
}

export default Regulation