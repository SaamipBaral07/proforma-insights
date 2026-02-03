import React from 'react'
import './App.css'
import { HomePage } from './HomePage.jsx'
import { AboutPage } from './AboutPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Team} from './Team.jsx'
import { Contact } from './Contact.jsx'
import { Accounting } from './Accounting.jsx'
import { TaxService } from './TaxService.jsx'
import { ITService } from './ITService.jsx'
import { DigitalService } from './DigitalService.jsx'
import { Insights } from './Insights.jsx'
import { NotFound } from './NotFound.jsx'
import { AccountingPractice } from './insights/AccountingPractice.jsx';
import { BusinessGrowth } from './insights/BusinessGrowth.jsx' 
import { MarketAnalysis } from './insights/MarketAnalysis.jsx'
import { TechTrends } from './insights/TechTrends.jsx'
import { FinancialPlanning } from './insights/FinancialPlanning.jsx';
import { DigitalTransform } from './insights/DigitalTransform.jsx';
import { Services } from './Services.jsx';


function App() {

  return (
    <>
     <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>

          <Route path='/about' element={<AboutPage/>}/>

          <Route path='/team' element={<Team/>}/>

          <Route path="/contact" element={<Contact/>}/>

          <Route path="/accounting" element={<Accounting/>}/>

          <Route path="/tax" element={<TaxService/>}/>

          <Route path="/it" element={<ITService/>}/>

          <Route path="/digital" element={<DigitalService/>}/>

          <Route path="/insights" element={<Insights/>}/>

          <Route path="*" element={<NotFound/>}/>
          
          <Route path="/services" element={<Services/>}/>
          <Route path="/insights/accounting-best-practices" element={<AccountingPractice/>}/>
          <Route path="/insights/business-growth-strategies" element={<BusinessGrowth/>}/>
          <Route path="/insights/market-analysis-2024" element={<MarketAnalysis/>}/>
          <Route path="/insights/tech-trends-to-watch" element={<TechTrends/>}/>
          <Route path="/insights/financial-planning" element={<FinancialPlanning/>}/>
          <Route path="/insights/digital-transformation-2024" element={<DigitalTransform/>}/>
     
        </Routes>

      </Router>
     
     </div>
    </>
  )
}

export default App
