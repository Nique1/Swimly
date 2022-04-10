import React from 'react';
import { useState } from 'react';
// import logo from '../logo.png'
import "./Nav.css";
import {GiDolphin} from "react-icons/gi"
import {RiCloseLine} from "react-icons/ri"
import{FaBars} from  "react-icons/fa"
const Nav = () => {  //komponent funkcyjny
  const [showMenu, setShowMenu]=useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container navbar">
       <a href="javascript:scroll(0,0)">
      <div className="logo">
  <GiDolphin color="white" size={60}/>
  <p className="logo-text">
    Swimly
  </p>
  
</div>
</a>
<menu>
  <ul className="nav-links"  id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}> 
  {/* instrukcja warunkowa */}
  
    <li><a href="javascript:scroll(0,0)">Home</a></li>
    <li><a href="javascript:scroll(0,440)">Techniques</a></li>
    <li><a href="javascript:scroll(0,1750)">Motivation</a></li>
    <li><a href="javascript:scroll(0,2200)">FAQ</a></li>
    <li><a href="javascript:scroll(0,2700)" className="btn">Register</a></li>

  </ul>
</menu>
<div className="menu-icons" onClick={toggleMenu} onToggle={(e) => {console.log('on Toggle'); }}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <FaBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
 
};
export default Nav;
