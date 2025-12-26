import React from 'react'
import images from '../assets/images';

const payments = [
  { name: "MPI", img: images.mpi },
  { name: "Airtel", img: images.airtel },
  { name: "M-Pesa", img: images.mpesa },
  { name: "MTN", img: images.mtn },
  { name: "Wire", img: images.wireTransfer },
  { name: "Kora", img: images.koraPay },
  { name: "Bank", img: images.banktransfer },
  { name: "USDT", img: images.usdt },
  { name: "Visa", img: images.visa },
];

const Fund = () => {
  return (
    <>
         <section className="w-full bg-white py-16 px-4 ">
      <div className=" mx-auto text-center">
        
        {/* Top Label */}
        <p className="text-green-500 uppercase text-sm font-semibold tracking-wider">
          Multi-assets global broker
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Fund Your Account Instantly with <br className="hidden md:block" />
          Secure, Flexible Payment Options
        </h2>

        {/* Moving Cards */}
        <div className="relative mt-12 overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee py-10">
            {[...payments, ...payments].map((item, index) => (
              <div
                key={index}
                className="min-w-[160px] h-[80px] bg-white rounded-xl shadow-md flex items-center justify-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Account
          </button>
          <button className="px-8 py-3 rounded-lg border border-gray-800 text-gray-900 font-semibold hover:bg-gray-100 transition">
            Try Free Demo
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Fund