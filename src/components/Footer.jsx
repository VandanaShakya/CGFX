import React from 'react';
import { 
  Facebook, Mail, Instagram, Linkedin, Youtube, 
  Twitter, MessageCircle, ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const footerData = {
    about: [
      { name: 'Company', href: '#' },
      { name: 'Regulation & Licenses', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    trading: [
      { name: 'Account Types', href: '/account-types' },
      { name: 'MetaTrader 5', href: '/metatrader' },
      { name: 'Forex', href: '/forex' },
      { name: 'Stocks', href: '/stocks' },
      { name: 'Futures', href: '/futures' },
      { name: 'Indices', href: '/indices' },
      { name: 'Products', href: '/products' },
      { name: 'How To Install MT5 (MetaTrader 5)', href: '/how-to-install-mt5' },
      { name: 'SGFX Trader (Web Trader)', href: '/sgfxtraders' },
    ],
    tools: [
      { name: 'Economic Calendar', href: '/economic-calender' },
      { name: 'Forex Market Watch', href: '/forex-market-watch' },
      { name: 'Market Technical Analysis', href: '/market-technical-analysis' },
      { name: 'Global Trading Holiday Schedule', href: '/global-trading' },
    ],
    documents: [
      { name: 'Forms & Documents', href: '/forms-&-documents' },
      { name: 'Risk disclosure statement', href: '/risk-disclosure' },
    ],
    // UPDATED: Changed to objects to support links and avoid render errors
    others: [
      { name: 'Partners', href: '/partners' },
      { name: 'Blogs', href: '/blogs' },
      { name: 'Promotions', href: '/promotions' }
    ]
  };

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Mail, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: MessageCircle, href: '#' },  
    { Icon: Linkedin, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Twitter, href: '#' },
  ];

  return (
    <footer className="w-full font-sans">
      <div className="bg-[#0b1221] text-gray-400 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-1 mb-6">
                <span className="text-3xl font-black italic tracking-tighter text-white">SGFX</span>
                <div className="bg-blue-500 p-0.5 rounded-sm">
                  <ArrowRight className="-rotate-45 text-white" size={18} strokeWidth={3} />
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Discover the ultimate hub for online trading at our platform!
              </p>
              <div className="flex flex-wrap gap-4">
                {socialIcons.map(({ Icon, href }, idx) => (
                  <a key={idx} href={href} className="hover:text-white transition-colors">
                    <Icon size={20} fill="currentColor" className="text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h5 className="text-white font-bold mb-6">About us</h5>
              <ul className="space-y-4 text-sm">
                {footerData.about.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h5 className="text-white font-bold mb-6">Trading</h5>
              <ul className="space-y-4 text-sm">
                {footerData.trading.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-white">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-10">
                <h5 className="text-white font-bold mb-6">Tools</h5>
                <ul className="space-y-4 text-sm">
                  {footerData.tools.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-white">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-6">Documents</h5>
                <ul className="space-y-4 text-sm">
                  {footerData.documents.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-white">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* UPDATED: Mapping logic for the "others" section */}
            <div className="lg:col-span-2">
              <ul className="space-y-4 text-sm text-white font-bold">
                {footerData.others.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-blue-400">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <p className="text-xs">Copyright © 2025 Spectra Global LTD.</p>
              <div className="flex space-x-6 text-xs">
                <a href="/forms-&-documents" className="hover:text-white">Legal Forms & Documents</a>
                <a href="/risk-disclosure" className="hover:text-white">Risk Warnings</a>
              </div>
            </div>

            <div className="space-y-6 text-[11px] leading-relaxed text-gray-500">
              <p>
                <span className="font-bold text-gray-400">High Risk Investment Warning:</span> Trading Contracts for Difference (CFDs) involves high risk due to their complex nature and margin trading...
              </p>
              <p>
                <span className="font-bold text-gray-400">Disclaimer:</span> The information on this page is for informational purposes only...
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;