import React, { Fragment } from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
const navigation = [
  //   { name: "Inicio", to: "/", current: false },
];

const NavbarComp = () => {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => setMobileMenuOpen(!mobileMenuOpen);
  return (
    <header className="bg-neutral-900">
      <nav
        className="flex items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 justify-center">
          <Link to={"/"} className="-m-1.5 p-1.5 w-44">
            
            <img className="img-fluid " src="logobg.png" alt="Logo El Tata" />
          </Link>
        </div>
        
        
      </nav>
      
     
    </header>
  );
};

export default NavbarComp;
