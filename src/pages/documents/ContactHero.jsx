import React from "react";
import { Mail, Clock, Globe, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
// import { socials } from "../../data/data";   
import Fund from "../../components/Fund";
 

const socials = [
  { id: 1, name: 'Facebook', url: 'https://facebook.com' },
  { id: 2, name: 'Twitter', url: 'https://twitter.com' },
  { id: 3, name: 'Instagram', url: 'https://instagram.com' },
];

export default function ContactHero() {
  return (  
   <>
{/* hero section */}

<div className="mt-40 px-4 md:px-8">
  {/* Main Container */}
  <div
    className="
      relative
      mx-auto
      max-w-6xl            /* ⬅ width reduced & aligned with next sections */
      min-h-[520px]        /* ⬅ height increased */
      md:min-h-[620px]
      lg:min-h-[720px]
      overflow-hidden
      rounded-[40px]
      bg-gradient-to-r
      from-[#003B95]
      via-[#002B6B]
      to-[#0A1128]
      flex
      items-center
      justify-center
      text-center
      shadow-2xl
    "
  >
    
    {/* Floating Icons */}
    <div className="absolute top-10 left-[10%] hidden md:block animate-bounce duration-[3000ms]">
      <div className="glass-icon rotate-[-15deg] p-4">
        <Facebook className="text-cyan-300 w-8 h-8" />
      </div>
    </div>

    <div className="absolute bottom-10 left-[15%] hidden md:block animate-pulse">
      <div className="glass-icon rotate-[10deg] p-4">
        <MessageCircle className="text-cyan-300 w-10 h-10" />
      </div>
    </div>

    <div className="absolute top-12 right-[15%] hidden md:block animate-bounce duration-[4000ms]">
      <div className="glass-icon rotate-[12deg] p-4">
        <Youtube className="text-cyan-300 w-8 h-8" />
      </div>
    </div>

    <div className="absolute bottom-[-10px] right-[10%] hidden md:block">
      <div className="glass-icon-circle p-6">
        <Instagram className="text-cyan-300 w-12 h-12" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center space-y-4">
      <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">
        Keep In Touch
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
        Contact Us
      </h1>
    </div>
  </div>

  {/* Glass Styles */}
  <style jsx>{`
    .glass-icon {
      @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl transition-transform hover:scale-110;
      box-shadow: inset 0 0 15px rgba(255,255,255,0.2),
                  5px 15px 25px rgba(0,0,0,0.4);
    }
    .glass-icon-circle {
      @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-transform hover:scale-110;
      box-shadow: inset 0 0 20px rgba(255,255,255,0.2),
                  5px 15px 30px rgba(0,0,0,0.4);
    }
  `}</style>
</div>


   {/* form section */}
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Info Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-teal-500 font-bold tracking-widest text-sm uppercase mb-4">
              Talk to our team
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Get ready to explore your opportunities
            </h1>
          </div>

          <div className="space-y-6">
            {/* Mail Item */}
            <div className="flex items-center gap-4">
              <div className="bg-teal-500 p-3 rounded-lg text-white shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Mail</p>
                <p className="text-slate-500">support@sgfx.com</p>
              </div>
            </div>

            {/* Working Hours Item */}
            <div className="flex items-center gap-4">
              <div className="bg-teal-500 p-3 rounded-lg text-white shadow-lg">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Working Hours</p>
                <p className="text-slate-500">24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <form className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">First Name*</label>
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Last Name*</label>
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300" />
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900">Country*</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all text-gray-400 bg-white">
                <option>Country</option>
              </select>
            </div>

            {/* Email and Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Email address*</label>
                <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Contact number*</label>
                <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-teal-500">
                  <div className="flex items-center px-3 border-r border-gray-200 bg-white gap-1 text-gray-500">
                    <Globe size={16} />
                    <span className="text-xs">▼</span>
                  </div>
                  <input type="tel" className="w-full px-4 py-3 outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900">Message</label>
              <textarea rows="4" placeholder="Message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded border-gray-300 text-teal-500 focus:ring-teal-500" />
              <label htmlFor="terms" className="text-sm text-slate-500">
                I agree to receive communications from SGFX.*
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>


    {/* contact last section */}

    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      {/* Main Container with Radial Gradient */}
      <div className="w-full max-w-4xl rounded-[50px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#020617] p-12 md:p-20 text-center shadow-2xl border border-white/5">
        
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <span className="text-teal-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase">
            Socially Up-to-date
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Our Social Networks
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Connect with us across our platforms to stay updated with the latest trends, 
            news, and community discussions.
          </p>
        </div>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socials.map((social, index) => (
            <button
              key={index}
              className="glass-card group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${social.color} transition-transform duration-300 group-hover:scale-110`}>
                {social.icon}
              </div>
              
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Custom Styles for Glassmorphism */}
        <style jsx>{`
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.25rem;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          }
          .glass-card:hover {
            background: rgba(255, 255, 255, 0.07);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
          }
        `}</style>
      </div>
    </div>


    <Fund/>
   </>
  );
}
