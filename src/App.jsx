import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/homecomponents/Home'
import ContactHero from './pages/documents/ContactHero'
import Company from './pages/company/Company'
import Regulation from './pages/regulationAndLicense/Regulation'
import Partner from './pages/partners/Partner'
import Blogs from './pages/blogs/Blogs'
import Promotions from './pages/promotions/Promotions'
import FormsAndDocuments from './pages/documents/FormsAndDocuments'
import RiskDisclouser from './pages/documents/RiskDisclouser'

import ForexMarketWatch from './pages/tools/ForexMarketWatch'
import MarketTechnical from './pages/tools/MarketTechnical'
import Economic from './pages/economicCalender/Economic'
import GlobalTrading from './pages/globalTrading/GlobalTrading'

import AccountTypes from './pages/tradings/AccountTypes'
import MetaTrading from './pages/tradings/MetaTrading'
import Forex from './pages/tradings/Forex'
import Stocks from './pages/tradings/Stocks'
import Futures from './pages/tradings/Futures'
import Indices from './pages/tradings/Indices'
import Product from './pages/tradings/Products'
import InstallationMeta from './pages/tradings/InstallationMeta'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
     <ScrollToTop/>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactHero />} />
        <Route path="/company" element={<Company />} />
        <Route path="/regulation-&-license" element={<Regulation />} />
        <Route path="/partners" element={<Partner />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/forms-&-documents" element={<FormsAndDocuments />} />
        <Route path="/risk-disclosure" element={<RiskDisclouser />} />

        {/* TOOLS */}
        <Route path="/tools/economic-calender" element={<Economic />} />
        <Route path="/tools/forex-market-watch" element={<ForexMarketWatch />} />
        <Route path="/tools/market-technical-analysis" element={<MarketTechnical />} />
        <Route path="/tools/global-trading" element={<GlobalTrading />} />


        {/* TRADING */}
        <Route path="/account-types" element={<AccountTypes />} />
        <Route path="/metatrader" element={<MetaTrading />} />
        <Route path="/forex" element={<Forex />} />
        <Route path='/stocks' element={<Stocks/>}/>
        <Route path='/futures' element={<Futures/>}/>
        <Route path='/indices' element={<Indices/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/how-to-install-mt5' element={<InstallationMeta/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
