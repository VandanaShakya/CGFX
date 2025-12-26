import React from 'react';
import { ArrowRightCircle, Check  } from 'lucide-react';
import { CFDStockData, forexData, indicesData, commoditiesData, cryptoData, featureCards } from '../../data/data';
import Fund from '../../components/Fund';

const Product = () => {




  return (
    <>
      <div className="min-h-screen font-sans p-4 md:p-8 space-y-12">

        {/* SECTION 1: HERO SECTION */}
        <section className="my-20 w-7xl m-auto relative overflow-hidden rounded-3xl min-h-[500px] flex items-center justify-center text-center px-6">
          {/* Background Image Block */}
          <div className="absolute inset-0 z-0">
            <img
              src="bg_cover_0.png"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-blue-900/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <p className="text-emerald-400 font-bold tracking-widest text-sm mb-4">
              TRADE FOREX, STOCKS, INDICES & MORE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore a Range of Markets with SGFX
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Ready to trade smarter? At SGFX, you have access to a full spectrum of
              trading products, from Forex and global indices to CFD stocks and
              commodities, all in one place.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* SECTION 2: CFD STOCKS SECTION */}
        <section className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">CFD Stocks</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Forget waiting on slow markets. With CFD stock trading at SGFX, you can take a position
                on some of the world's biggest companies without owning a single share. It's fast,
                flexible, and built for traders who like to move with the market.
              </p>
              <div className="space-y-2 text-gray-600 font-medium">
                <p>Max. Leverage <span className="font-bold">1:20</span></p>
                <p>Margins from just <span className="font-bold">5%</span></p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                See all products <ArrowRightCircle size={20} />
              </a>
            </div>

            {/* Right Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th rowSpan="2" className="p-4 text-left border-r border-blue-500">Instruments</th>
                    <th colSpan="3" className="p-2 text-center border-b border-blue-500">Account Types Min. Spread</th>
                    <th rowSpan="2" className="p-4 text-center border-l border-blue-500">Platforms</th>
                  </tr>
                  <tr className="bg-blue-600 text-white text-xs">
                    <th className="p-2 border-r border-blue-500">Standards</th>
                    <th className="p-2 border-r border-blue-500">Elite</th>
                    <th className="p-2">ECN</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {CFDStockData.map((stock, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
                          {stock.name[0]}
                        </div>
                        {stock.name}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold">{stock.standards}</td>
                      <td className="p-4 text-center text-gray-600 font-semibold border-x border-gray-100">{stock.elite}</td>
                      <td className="p-4 text-center text-gray-600 font-semibold">{stock.ecn}</td>
                      <td className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-bold">
                          {stock.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>


          {/* second block */}

        </section>


        {/* second block */}
        <section className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Forex</h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Catching currency moves shouldn’t feel like a guessing game. At SGFX, we
                offer ultra-tight spreads, rapid execution, and a wide range of pairs.
                These are trading instruments made for precision, whether you're
                scalping, swinging, or just watching for that perfect setup.
              </p>

              <div className="space-y-2 text-gray-600 font-medium">
                <p>
                  Spreads from <span className="font-bold">0.0 pips*</span>
                </p>
                <p>
                  Max. Leverage <span className="font-bold">1:500</span>
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                See all products <ArrowRightCircle size={20} />
              </a>
            </div>

            {/* Right Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th rowSpan="2" className="p-4 text-left border-r border-blue-500">
                      Instruments
                    </th>
                    <th
                      colSpan="3"
                      className="p-2 text-center border-b border-blue-500"
                    >
                      Account Types Min. Spread
                    </th>
                    <th rowSpan="2" className="p-4 text-center border-l border-blue-500">
                      Platforms
                    </th>
                  </tr>
                  <tr className="bg-blue-600 text-white text-xs">
                    <th className="p-2 border-r border-blue-500">Standards</th>
                    <th className="p-2 border-r border-blue-500">Elite</th>
                    <th className="p-2">ECN</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {forexData.map((pair, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
                          {pair.name[0]}
                        </div>
                        {pair.name}
                      </td>

                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {pair.standards}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold border-x border-gray-100">
                        {pair.elite}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {pair.ecn}
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-bold">
                          {pair.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>



        {/* third block */}
        <section className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Indices</h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Want to track the bigger picture? Trade the momentum of entire economies
                with our index CFDs. Tap into the S&P, DAX, FTSE, and more without the
                noise of individual stocks. We built our trading products for big moves,
                clean setups, and simple execution.
              </p>

              <div className="space-y-2 text-gray-600 font-medium">
                <p>
                  <span className="font-bold">15+</span> World’s Most Popular Indices
                </p>
                <p>
                  Max. Leverage <span className="font-bold">1:100</span>
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                See all products <ArrowRightCircle size={20} />
              </a>
            </div>

            {/* Right Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th rowSpan="2" className="p-4 text-left border-r border-blue-500">
                      Instruments
                    </th>
                    <th
                      colSpan="3"
                      className="p-2 text-center border-b border-blue-500"
                    >
                      Account Types Min. Spread
                    </th>
                    <th rowSpan="2" className="p-4 text-center border-l border-blue-500">
                      Platforms
                    </th>
                  </tr>
                  <tr className="bg-blue-600 text-white text-xs">
                    <th className="p-2 border-r border-blue-500">Standards</th>
                    <th className="p-2 border-r border-blue-500">Elite</th>
                    <th className="p-2">ECN</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {indicesData.map((indexItem, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
                          {indexItem.name[0]}
                        </div>
                        {indexItem.name}
                      </td>

                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {indexItem.standards}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold border-x border-gray-100">
                        {indexItem.elite}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {indexItem.ecn}
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-bold">
                          {indexItem.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>



        {/* fourth block */}
        <section className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Commodities</h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Oil, gold, and gas. When global demand shifts, commodity markets respond
                fast. Our trading site lets you get in, manage risk, and take action on
                macro trends without touching physical products. These are trading
                instruments for traders who like to keep their edge sharp.
              </p>

              <div className="space-y-2 text-gray-600 font-medium">
                <p>
                  Max. Leverage <span className="font-bold">1:100</span>
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                See all products <ArrowRightCircle size={20} />
              </a>
            </div>

            {/* Right Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th rowSpan="2" className="p-4 text-left border-r border-blue-500">
                      Instruments
                    </th>
                    <th
                      colSpan="3"
                      className="p-2 text-center border-b border-blue-500"
                    >
                      Account Types Min. Spread
                    </th>
                    <th rowSpan="2" className="p-4 text-center border-l border-blue-500">
                      Platforms
                    </th>
                  </tr>
                  <tr className="bg-blue-600 text-white text-xs">
                    <th className="p-2 border-r border-blue-500">Standards</th>
                    <th className="p-2 border-r border-blue-500">Elite</th>
                    <th className="p-2">ECN</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {commoditiesData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
                          {item.name[0]}
                        </div>
                        {item.name}
                      </td>

                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {item.standards}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold border-x border-gray-100">
                        {item.elite}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {item.ecn}
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-bold">
                          {item.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>



        {/* fifth block */}
        <section className="max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-16 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Crypto</h2>

              <p className="text-gray-500 text-lg leading-relaxed">
                Bitcoin, Ethereum, and more—the crypto market never sleeps. Trade major
                cryptocurrencies with low spreads and high volatility to capture
                opportunities anytime. Our platform gives you the tools to analyze
                trends, manage risk, and open CFD positions 24/7 without owning digital
                assets. Ideal for traders seeking flexibility and speed.
              </p>

              <div className="space-y-2 text-gray-600 font-medium">
                <p>
                  Max. Leverage <span className="font-bold">1:50</span>
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                See all products <ArrowRightCircle size={20} />
              </a>
            </div>

            {/* Right Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-600 text-white text-sm">
                    <th rowSpan="2" className="p-4 text-left border-r border-blue-500">
                      Instruments
                    </th>
                    <th
                      colSpan="3"
                      className="p-2 text-center border-b border-blue-500"
                    >
                      Account Types Min. Spread
                    </th>
                    <th rowSpan="2" className="p-4 text-center border-l border-blue-500">
                      Platforms
                    </th>
                  </tr>
                  <tr className="bg-blue-600 text-white text-xs">
                    <th className="p-2 border-r border-blue-500">Standards</th>
                    <th className="p-2 border-r border-blue-500">Elite</th>
                    <th className="p-2">ECN</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {cryptoData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
                          {item.name[0]}
                        </div>
                        {item.name}
                      </td>

                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {item.standards}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold border-x border-gray-100">
                        {item.elite}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-semibold">
                        {item.ecn}
                      </td>
                      <td className="p-4 text-center">
                        <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-xs font-bold">
                          {item.platform}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

      </div>

      {/* why us */}
                   <section className="w-full px-4 md:px-10 py-14">
      {/* Outer Gradient Container */}
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-blue-700 via-blue-900 to-black p-6 md:p-10">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[2rem] bg-white/10 backdrop-blur-lg border border-white/10 p-6 md:p-8 text-white shadow-xl"
              >
                {/* Header */}
                <div>
                  <div className="flex justify-center mb-5">
                    <Icon size={36} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-center mb-6">
                    {card.title}
                  </h3>

                  {/* List */}
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 text-sm"
                      >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600">
                          <Check size={14} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button className="mt-8 bg-white text-black text-sm font-medium py-3 rounded-xl hover:bg-gray-200 transition">
                  {card.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Fund />
    </>
  );
};

export default Product;