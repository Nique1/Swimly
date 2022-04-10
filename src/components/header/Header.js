import React from 'react';
// import { useEffect } from 'react';
import {Component} from 'react';
// import swimmer1 from '../swimmer1.jpg'
import "./Header.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

class Header extends Component { //komponent klasowy
  render(){
   
    return(
      <section id="header">
      <div className=" header">
      <div className="header-left">
        <h1 >
        <span>Welcome! </span>
        </h1>
        <p className="title">
        Dive into the world of swimming
          </p>
      </div>
      </div>
      </section>
      );
  } 
};

export default Header;

