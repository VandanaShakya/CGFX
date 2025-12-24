import React, { useState, useEffect, useRef } from 'react';
import {
  Facebook, Mail, Instagram, Linkedin, Youtube, Twitter,
  ChevronDown, Menu, X, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const navRef = useRef(null);

  const navLinks = [
    {
      name: 'About us',
      subLinks: [
        { name: 'Company', desc: 'Learn more about us', href: '/company' },
        { name: 'Regulation & Licenses', desc: 'Fair and transparent trading', href: '/regulation-&-license' },
        { name: 'Contact Us', desc: 'Get in touch with us', href: '/contact-us' }
      ]
    },
    {
      name: 'Tools',
      subLinks: [
        { name: 'Economic Calendar', desc: 'Track key market events', href: '#' },
        { name: 'Forex Market Insights', desc: 'Daily market analysis', href: '/forex-market-watch' },
        { name: 'Market Technical Analysis', desc: 'In-depth chart patterns', href: '/market-technical-analysis' },
        { name: 'Global Trading Holiday Schedule', desc: 'Plan your trading days', href: '#' }
      ]
    },
    { name: 'blogs', href: '/blogs' },
    { name: 'news', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Promotions', href: '/promotions' },
    {
      name: 'Contact',
      subLinks: [
        { name: 'Forms & Documents', desc: 'Legal and account forms', href: '/forms-&-documents' },
        { name: 'Risk disclosure statement', desc: 'Important risk information', href: '/risk-disclosure' }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Facebook }, { Icon: Mail }, { Icon: Instagram },
    { Icon: Linkedin }, { Icon: Youtube }, { Icon: Twitter }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full bg-white shadow-sm font-sans">

      {/* TOP BAR */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-700 via-blue-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon }, i) => (
              <Icon key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <div className="space-x-6 text-sm font-medium">
            <a href="#">Try Free Demo</a>
            <a href="#">IB Login</a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-1">
            <span className="text-3xl font-black italic">SGFX</span>
            <div className="bg-blue-500 p-0.5 rounded-sm">
              <ArrowRight size={18} className="-rotate-45 text-white" />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href || '#'}
                  className="flex items-center gap-1 font-semibold text-gray-600 hover:text-blue-600 py-4"
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} />}
                </a>

                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                    <div className="bg-white border shadow-xl rounded-xl p-6 flex gap-10">
                      {link.subLinks.map(sub => (
                        <a key={sub.name} href={sub.href} className="min-w-[200px]">
                          <div className="font-bold">{sub.name}</div>
                          <div className="text-sm text-gray-400">{sub.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ACTION */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-md font-bold">
              Open Account
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-50"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            >
              <div className="p-6 flex justify-between">
                <span className="font-black text-xl">SGFX</span>
                <X onClick={() => setIsMobileMenuOpen(false)} />
              </div>

              <div className="px-4">
                {navLinks.map(link => (
                  <div key={link.name} className="border-b">
                    {link.subLinks ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveMobileDropdown(
                              activeMobileDropdown === link.name ? null : link.name
                            )
                          }
                          className="w-full py-4 flex justify-between font-bold"
                        >
                          {link.name}
                          <ChevronDown
                            className={`${activeMobileDropdown === link.name && 'rotate-180'} transition`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeMobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                              className="overflow-hidden pl-4 pb-2"
                            >
                              {link.subLinks.map(sub => (
                                <a key={sub.name} href={sub.href} className="block py-2 text-sm">
                                  {sub.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a href={link.href} className="block py-4 font-bold">
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
