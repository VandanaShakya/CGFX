import {
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  RefreshCcw,
  LayoutGrid,
   Coins, RefreshCw
} from "lucide-react";

import images from "../assets/images";
export const features = [
    {
      title: "Swap-Free**",
      icon: images.swapFree,
      alt: "Swap-Free Icon"
    },
    {
      title: "Instant Withdrawals",
      icon: images.withDrawals,
      alt: "Rocket Icon"
    },
    {
      title: "24X7 Free Customer Support",
      icon: images.freeCustomer,
      alt: "Star Icon"
    }
  ];
  

  export const tickerItems = [
    { text: "Maximum Fund Security", dark: false },
    { text: "Multiple Payment Methods", dark: true },
    { text: "Diverse Order Types", dark: false },
    { text: "Super-Tight Spreads", dark: true },
    { text: "Hedging Support", dark: false },
    { text: "Maximum Fund Security", dark: true },
    { text: "Multiple Payment Methods", dark: false },
  ];


  
  // Content data for each category
  export const content = {
    Forex: {
      title: "Trade Global Forex Pairs with Ultra-Low Spreads",
      desc: "Access the world's largest financial market. Trade major, minor, and exotic currency pairs with high liquidity and rapid execution.",
      image: "https://images.unsplash.com/photo-1611974717535-7ddcecc7698e?auto=format&fit=crop&q=80&w=800", // Replace with your assets
    },
    Indices: {
      title: "Invest in Global Indices with Ease",
      desc: "Take positions on the world's leading stock indices including the S&P 500, NASDAQ, and FTSE 100 with competitive margins.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    },
    Stocks: {
      title: "Trade Popular Global Stocks with Speed and Simplicity",
      desc: "Access shares from top companies like Apple, Tesla, Amazon, and more. With SGFX, stock CFD trading is intuitive, fast, and flexible, enabling you to go long or short with ease.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    Crypto: {
      title: "Explore the Crypto Market 24/7",
      desc: "Trade CFDs on Bitcoin, Ethereum, and other popular cryptocurrencies without the need for a digital wallet.",
      image: "https://images.unsplash.com/photo-1621761126066-6ecb719f075d?auto=format&fit=crop&q=80&w=800",
    }
  };

// upgrade section data //
export const cards = [
  {
    value: "From 0.0",
    label: "Spread*",
    icon: ArrowUpRight,
    bg: "bg-gradient-to-br from-[#2A3445] to-[#1C2433]",
  },
  {
    value: "$100",
    label: "Min. Deposit",
    icon: DollarSign,
    bg: "bg-gradient-to-br from-[#3B4BDB] to-[#2B3ABF]",
  },
  {
    value: "1:500",
    label: "Max Leverage",
    icon: TrendingUp,
    bg: "bg-gradient-to-br from-[#12B5A6] to-[#0F8F84]",
  },
  {
    value: "Yes",
    label: "Swap Free**",
    icon: RefreshCcw,
    bg: "bg-gradient-to-br from-[#2FA4F2] to-[#1C7ED6]",
  },
  {
    value: "Variable",
    label: "Spread Type",
    icon: LayoutGrid,
    bg: "bg-gradient-to-br from-[#334ED8] to-[#2439B5]",
  },
];

// company page data //
export const CompanyData = [
  {
    title: "Variable",
    subtitle: "Spread Type",
    icon: "LayoutGrid",
    gradient: "from-blue-800 to-indigo-600",
    height: "h-64",
  },
  {
    title: "1000+",
    subtitle: "Trading instruments",
    icon: "Coins",
    gradient: "from-teal-600 to-emerald-500",
    height: "h-80",
  },
  {
    title: "12 ms",
    subtitle: "Avg. execution time under",
    icon: "RefreshCw",
    gradient: "from-cyan-500 to-blue-500",
    height: "h-40",
  },
];


export const testimonials = [
    {
      text: "I've been using SGFX for a few months now, and I'm genuinely impressed. Reliable service, fast withdrawals, and top-notch customer support exactly what I need in a broker.",
      name: "Christopher",
      location: "London, UK",
      initials: "C",
      img: "https://i.pravatar.cc/150?u=chris" // Placeholder for the profile image
    },
    {
      text: "SGFX has been a great trading partner so far. They respond quickly and are always helpful when it comes to queries. Definitely worth recommending to fellow traders in Dubai.",
      name: "Sabbath",
      location: "Nairobi, Kenya",
      initials: "S",
    },
    {
      text: "After trying multiple brokers over the years, SGFX truly stands out. The team has made funding and withdrawals incredibly smooth, and their support takes a huge load off my mind. Big shoutout to the SGFX team!.",
      name: "Anthony",
      location: "Kuala Lumpur, Malaysia",
      initials: "A",
    },
    {
      text: "Just started using SGFX last month and already impressed! They processed my withdrawal faster than any broker I've worked with. Trustworthy and efficient that's rare.",
      name: "Karo",
      location: "Dubai, UAE",
      initials: "K",
    },
    {
      text: "From day one, SGFX made everything simple. Onboarding was seamless, and their support team is always on point both for deposits and withdrawals. Highly recommend for anyone trading from Mauritius",
      name: "Jonah",
      location: "Port Louis, Mauritius",
      initials: "J",
    },
  ];

  export  const bonuses = [
    {
      title: "100% Deposit Bonus",
      subtitle: "upto $25,000",
      icon: "💰",
      buttonText: "DEPOSIT NOW",
    },
    {
      title: "Refer your friend &",
      subtitle: "Earn $100 Free",
      icon: "👥",
      buttonText: "REFER NOW",
    },
    {
      title: "Maximize Profits with",
      subtitle: "Swap-Free Trading",
      icon: "🛡️",
      buttonText: "DEPOSIT NOW",
    },
  ];



  // forms and documents data //
   export const links = [
    { title: "AML Policy", href: "#" },
    { title: "Client Agreement", href: "#" },
    { title: "Conflict Of Interest Policy", href: "#" },
    { title: "Marketing Guideline Policy", href: "#" },
    { title: "Order Execution Policy", href: "#" },
    { title: "Privacy Policy & Internal Privacy Controls", href: "#" },
    { title: "Prohibited Practices", href: "#" },
    { title: "Swap Free Conditions", href: "#" },
    { title: "Withdrawal Policy", href: "#" },
    { title: "Terms and Conditions", href: "#" },
    { title: "Terms Of Business Glossary", href: "#" },
    { title: "Risk Warning", href: "#" },
    { title: "Bonus Terms And Conditions", href: "#" },
    { title: "Introducer Broker Marketing Guideline", href: "#" },
    { title: "Introducer Broker Privacy Policy", href: "#" },
    { title: "Terms & Conditions Saint Lucia", href: "#" },
    { title: "Risk Disclosure Policy Saint Lucia", href: "#" },
    { title: "Privacy Policy Saint Lucia", href: "#" },
  ];