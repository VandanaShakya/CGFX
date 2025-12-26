import {
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  RefreshCcw,
  LayoutGrid,
  Activity, Globe, Monitor}
   from "lucide-react";

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

  export const accounts = [
  {
    category: "Retail",
    type: "Standard",
    spread: "1.5",
    unit: "pips",
    commission: "No Commission",
    buttonText: "Open Standard Account",
    features: [
      { label: "Min. deposit", value: "$100" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:500" },
      { label: "Spread type", value: "Variable" },
      { label: "Spread", value: "From 1.5" },
      { label: "Swap free", value: "*Yes" },
    ],
  },
  {
    category: "Professional",
    type: "Elite",
    spread: "0.8",
    unit: "pips",
    commission: "No Commission",
    highlighted: true,
    buttonText: "Open Elite Account",
    features: [
      { label: "Min. deposit", value: "$5000" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:300" },
      { label: "Spread type", value: "Variable" },
      { label: "Spread", value: "From 0.8" },
      { label: "Swap free", value: "*Yes" },
    ],
  },
  {
    category: "Institutional",
    type: "ECN",
    spread: "0",
    unit: "pips",
    commission: "$8 Round",
    buttonText: "Open ECN Account",
    features: [
      { label: "Min. deposit", value: "$25000" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:300" },
      { label: "Spread type", value: "Raw" },
      { label: "Spread", value: "From 0" },
      { label: "Swap free", value: "*Yes" },
    ],
  },
];



// meta trader file //
export const tabs = ['Forex', 'Indices', 'CFD stocks', 'Crypto'];

  // Example data to show the "render same menu" logic
export const assetData = {
    Forex: [
      { name: 'EURUSD', buy: '1.0850', sell: '1.0851', change: '+0.02%' },
      { name: 'GBPUSD', buy: '1.2640', sell: '1.2642', change: '-0.15%' },
    ],
    Indices: [
      { name: 'US500', buy: '5120.5', sell: '5121.5', change: '+0.45%' },
    ],
    'CFD stocks': [
      { name: 'AAPL.us', buy: '175.20', sell: '175.25', change: '+1.20%' },
    ],
    Crypto: [
      { name: 'BTCUSD', buy: '65430', sell: '65450', change: '-2.10%' },
    ],
  };

  export const FAQData = [
  {
    question: "Is Forex a Lucrative Market?",
    answer: "Profitability in Forex trading varies and depends on various factors. The Forex market offers high liquidity and significant opportunities, but traders must exercise caution and conduct thorough assessments to avoid unfavorable outcomes."
  },
  {
    question: "Can I Trade Forex With CFDs?",
    answer: "Yes, CFDs (Contracts for Difference) allow you to speculate on the price movements of currency pairs without owning the underlying asset."
  },
  {
    question: "What Makes MetaTrader 5 Better for Forex Traders?",
    answer: "MetaTrader 5 offers advanced technical analysis tools, superior algorithmic trading capabilities, and more timeframes compared to its predecessors."
  },
  {
    question: "How do you Manage the Volatility in the Forex Market?",
    answer: "Managing volatility involves using stop-loss orders, proper position sizing, and staying informed about global economic news events."
  },
  {
    question: "Is Forex an Instrument for Trading in the Futures?",
    answer: "While Forex usually refers to the spot market, you can trade currency futures contracts on regulated exchanges."
  }
];


// stocks page data //
export const stocksData = [
    {
      title: "0%",
      description: "Trade with zero commissions",
      bgGradient: "bg-gradient-to-br from-[#00F2A9] to-[#076562]",
    },
    {
      title: "$100",
      description: "Generate income by receiving dividends",
      bgGradient: "bg-gradient-to-br from-[#00D2FF] to-[#3A7BD5]",
    },
    {
      title: "icon", // Placeholder for the coin icon
      description: "Buy fractional shares",
      bgGradient: "bg-gradient-to-br from-[#2E3192] to-[#1BFFFF]",
      isIcon: true
    },
  ];

  // stocks third secton data //
  export const brands = [
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Starbucks', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg' },
    { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney_2011.svg' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
  ];

  export const FuturesFAQData = [
  {
    question: "Can I Trade Forex With CFDs?",
    answer:
      "Yes, CFDs (Contracts for Difference) allow you to speculate on the price movements of currency pairs without owning the underlying asset.",
  },
  {
    question: "What Makes MetaTrader 5 Better for Forex Traders?",
    answer:
      "MetaTrader 5 offers advanced technical analysis tools, superior algorithmic trading capabilities, and more timeframes compared to its predecessors.",
  },
  {
    question: "How do you Manage the Volatility in the Forex Market?",
    answer:
      "Managing volatility involves using stop-loss orders, proper position sizing, and staying informed about global economic news events.",
  },
  {
    question: "Is Forex an Instrument for Trading in the Futures?",
    answer:
      "While Forex usually refers to the spot market, you can trade currency futures contracts on regulated exchanges.",
  },
];

export const indicesFAQData = [
  {
    question: "How does indices trading differ from stock trading?",
    answer:
      "Indices trading focuses on the performance of a group of stocks, making them generally less volatile than individual stocks and requiring a different approach to trading.",
  },
  {
    question: "How Do You Trade Futures?",
    answer:
      "In futures trading, traders enter contracts that commit them to buy or sell an asset at a set price on a future date. Traders can take long or short positions based on their market outlook and strategy.",
  },
  {
    question: "What factors influence indices?",
    answer:
      "Global events and public sentiment have a significant impact on indices. Traders should consider these elements for successful trading.",
  },
  {
    question: "What is the best way to speculate on indices?",
    answer:
      "A deep understanding of historical and current market behaviors is vital for informed trading decisions. Important considerations include GDP trends, support and resistance levels, and general market expectations.",
  },
];


export const CFDStockData = [
    { name: 'Netflix', standards: '2109', elite: '1709', ecn: '509', platform: 'MT5' },
    { name: 'Alibaba', standards: '2110', elite: '1710', ecn: '510', platform: 'MT5' },
    { name: 'Apple', standards: '2110', elite: '1710', ecn: '510', platform: 'MT5' },
  ];
export const forexData = [
  { name: "EUR/USD", standards: "21–23", elite: "17–18", ecn: "5–6", platform: "MT5" },
  { name: "USD/JPY", standards: "23–25", elite: "20–22", ecn: "8–9", platform: "MT5" },
  { name: "GBP/USD", standards: "22–24", elite: "18–20", ecn: "6–7", platform: "MT5" },
];

export const indicesData = [
  { name: "S&P 500", standards: "2140", elite: "1740", ecn: "540", platform: "MT5" },
  { name: "USD30 (Dow Jones)", standards: "2300", elite: "1900", ecn: "700", platform: "MT5" },
  { name: "DAX", standards: "2200", elite: "1800", ecn: "600", platform: "MT5" },
];
export const commoditiesData = [
  { name: "Gold", standards: "25–30", elite: "21–24", ecn: "12–15", platform: "MT5" },
  { name: "Silver", standards: "25–30", elite: "21–24", ecn: "12–15", platform: "MT5" },
];
export const cryptoData = [
  { name: "BTC/USD", standards: "8000", elite: "1710", ecn: "510", platform: "MT5" },
  { name: "ETH/USD", standards: "120", elite: "86", ecn: "26", platform: "MT5" },
  { name: "XRP/USD", standards: "43", elite: "18", ecn: "6", platform: "MT5" },
];


export const featureCards = [
  {
    title: "Trade On SGFX",
    icon: Activity,
    items: [
      "12ms Avg. execution time",
      "9 Timeframes",
      "23 Analytical objects",
      "30 Technical indicators",
    ],
    button: "Read more about SGFX",
  },
  {
    title: "Why SGFX?",
    icon: Globe,
    items: [
      "Years of Group Excellence",
      "Advanced technology for efficient trading execution",
      "Flexible trading options to meet diverse need",
      "Strong global market presence and expertise",
    ],
    button: "Read more about Why Traders Trust Us",
  },
  {
    title: "Trading Accounts",
    icon: Monitor,
    items: [
      "Choose between Gold Spreads",
      "Platinum Variable Spreads",
      "VIP Raw Spreads from 0.05pips*",
    ],
    button: "Compare Trading Accounts",
  },
];


export const installationStepsData = [
  { id: 1, title: 'Download MT5 from the SGFX Website' },
  { id: 2, title: 'Open the Installer' },
  { id: 3, title: 'Agree to the Terms' },
  { id: 4, title: 'Log Into Your SGFX Account' },
  { id: 5, title: 'Take a Moment to Explore' },
];