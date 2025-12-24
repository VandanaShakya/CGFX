import React from "react";
import {
  UserPlus,
  Settings,
  Wallet,
  Activity,
} from "lucide-react";




export default function StartTrading() {
  return (
    <>
       


  <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ===== SECTION 1 ===== */}
        <div className="text-center">
          <p className="text-emerald-500 uppercase text-sm font-semibold tracking-widest">
            Trading Made Simple
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Start Trading Global Assets in Minutes
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Create an account with the best online trading platform.
          </p>

          {/* Steps */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            
            {/* Step */}
            {[
              {
                icon: <UserPlus size={26} />,
                title: "Register",
                desc: "Sign up online under 2 minutes",
              },
              {
                icon: <Settings size={26} />,
                title: "RM Assignment",
                desc: "Get dedicated RM",
              },
              {
                icon: <Wallet size={26} />,
                title: "Deposit Funds",
                desc: "Choose from various methods",
              },
              {
                icon: <Activity size={26} />,
                title: "Trade",
                desc: "Start trading confidently",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                
                {/* Dotted line */}
                {index !== 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full border-t border-dashed border-emerald-300"></div>
                )}

                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg z-10">
                  {item.icon}
                </div>

                <h4 className="mt-5 font-semibold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Get started
            </button>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="mt-28 bg-gradient-to-r from-[#0B3C7A] to-[#0A1220] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Image */}
            <div className="relative p-10 flex justify-center">
              <img
                src="/demo-phone.png"
                alt="Trading App"
                className="max-w-[320px] lg:max-w-[380px]"
              />
            </div>

            {/* Content */}
            <div className="p-10 lg:p-16 text-white">
              <h3 className="text-3xl md:text-4xl font-bold leading-snug">
                Get Your Free Demo <br /> Trading Account Today
              </h3>

              <p className="mt-5 text-white/80 text-sm leading-relaxed max-w-lg">
                Step into the exciting world of global forex trading with zero pressure.
                Our free demo trading account lets you explore real-time market
                conditions and refine your strategies, without risking a single dollar.
                Whether you're new to trading or testing a new approach, this is the
                ideal way to build skill and confidence.
              </p>

              <button className="mt-8 px-7 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                Open Demo Account
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

    
    </>
  );
}
