import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';

const App = () => {
  return (
   <Router>
    <div className='App'>
    <NavbarComp/>
    <main className='mainSection bg-neutral-200'>
    <RoutesViews/>
    </main>
    <FooterComp/>
    </div>
   </Router>
  )
}

export default App