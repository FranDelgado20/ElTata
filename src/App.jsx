import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import NavbarComp from './components/NavbarComp';
import FooterComp from './components/FooterComp';
import PantallaDeCarga from './components/PantallaDeCarga';
import "aos/dist/aos.css";
import Aos from "aos";
const App = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 3000);

    Aos.init({ duration: 1800, once: true });
  }, []);
  return (
    <Router>
    {cargando ? (
      <PantallaDeCarga />
    ) : (
      <div className="App">
        <NavbarComp />
        <main className="mainSection bg-neutral-200">
          <RoutesViews />
        </main>
        <FooterComp />
      </div>
    )}
  </Router>
  )
}

export default App