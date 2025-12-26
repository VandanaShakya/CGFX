import React, { useState, useEffect, useRef } from "react";
import {
  Facebook, Mail, Instagram, Linkedin, Youtube, Twitter,
  ChevronDown, Menu, X, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
  const navRef = useRef(null);

  const navLinks = [
    {
      name: "About us",
      subLinks: [
        { name: "Company", to: "/company" },
        { name: "Regulation & Licenses", to: "/regulation-&-license" },
        { name: "Contact Us", to: "/contact-us" }
      ]
    },
    {
      name: "Tools",
      subLinks: [
        { name: "Economic Calendar", to: "/tools/economic-calender" },
        { name: "Forex Market Insights", to: "/tools/forex-market-watch" },
        { name: "Market Technical Analysis", to: "/tools/market-technical-analysis" },
        { name: "Global Trading Holiday Schedule", to: "/tools/global-trading" }
      ]
    },
    { name: "Blogs", to: "/blogs" },
    { name: "News", to: "/news" },
    { name: "Partners", to: "/partners" },
    { name: "Promotions", to: "/promotions" },
    {
      name: "Documents",
      subLinks: [
        { name: "Forms & Documents", to: "/forms-&-documents" },
        { name: "Risk Disclosure Statement", to: "/risk-disclosure" }
      ]
    }
  ];

  useEffect(() => {
    const closeOnOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDesktopDropdown(null);
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full bg-white shadow-sm">

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
              <div
                key={link.name}
                className="relative hover:cursor-pointer"
                onMouseEnter={() => link.subLinks && setActiveDesktopDropdown(link.name)}
                onMouseLeave={() => setActiveDesktopDropdown(null)}
              >

                {/* MAIN ITEM */}
                {link.subLinks ? (
                  <button
                    onClick={() =>
                      setActiveDesktopDropdown(
                        activeDesktopDropdown === link.name ? null : link.name
                      )
                    }
                    className="flex items-center gap-1 font-semibold text-gray-600 hover:text-blue-600 py-4 hover:cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition ${
                        activeDesktopDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="font-semibold text-gray-600 hover:text-blue-600 py-4"
                  >
                    {link.name}
                  </Link>
                )}

                {/* DROPDOWN */}
                <AnimatePresence>
                  {link.subLinks && activeDesktopDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50"
                    >
                      <div className="bg-white border shadow-xl rounded-xl p-6 flex gap-10">
                        {link.subLinks.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.to}
                            onClick={() => setActiveDesktopDropdown(null)}
                            className="min-w-[200px] hover:text-blue-600"
                          >
                            <div className="font-bold">{sub.name}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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

      {/* MOBILE MENU (unchanged logic) */}
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
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
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
                            className={`transition ${
                              activeMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeMobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4 pb-2"
                            >
                              {link.subLinks.map(sub => (
                                <Link
                                  key={sub.name}
                                  to={sub.to}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 text-sm"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.to}
                        className="block py-4 font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
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
