  import './App.css'
  import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/homecomponents/Home'
import ContactHero from './pages/contactus/ContactHero'
import Company from './pages/company/Company'
import Regulation from './pages/regulationAndLicense/Regulation'
import Partner from './pages/partners/Partner'
import Blogs from './pages/blogs/Blogs'
import Promotions from './pages/promotions/Promotions'
import FormsAndDocuments from './pages/contactUs/FormsAndDocuments'
import RiskDisclouser from './pages/contactUs/RiskDisclouser'
import ForexMarketWatch from './pages/tools/ForexMarketWatch'
import MarketTechnical from './pages/tools/MarketTechnical'

function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact-us" element={<ContactHero/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/regulation-&-license' element={<Regulation/>}/>
          <Route path='/partners' element={<Partner/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/forms-&-documents' element={<FormsAndDocuments/>}/>
          <Route path='/risk-disclosure' element={<RiskDisclouser/>}/>
          <Route path='/forex-market-watch' element={<ForexMarketWatch/>}/>
          <Route path='/market-technical-analysis' element={<MarketTechnical/>}/>
        </Routes>     
        <Footer/>
    </>
  )
}

export default App
