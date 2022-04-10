import React from 'react';
import {Component} from 'react';
import "./Footer.css";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
  } from "react-icons/fa";
  import {GiDolphin} from "react-icons/gi"
class Footer extends Component { //komponent klasowy
    render(){
        return ( //moze zwracac tylko jeden element (div)
        
        <section id="footer">
           <div className='container1 footer'>
           <div className='footer-box'>
               <h4>Useful Links</h4>
               <div className='footer-links'>
                   <a href="#">&bull; Styles</a>
                   <a href="#">&bull; Training</a>
                   <a href="#">&bull; Diet</a>
               </div>
               </div>

               <div className='footer-box'>
                   <h4>Contact Us:</h4>
               
                   <div className='footer-contact'>
                       <p>
                         <FaMapMarkerAlt size={10} /> Address: Nowhere 
                       </p>
                       <p>
                         <FaPhoneAlt size={10}/> Phone: Nowhere 
                       </p>
                       <p>
                         <FaEnvelope size={10}/> Email: swimly.support@io.com
                       </p>
                   </div>
               </div>
               <div className='footer-box'>
               <h4>Follow Us:</h4>
                   <div className="footer-follow" >
                       <p>
                         <FaFacebookSquare size={10}/> Facebook
                       </p>
                       <p>
                         <FaTwitterSquare size={10}/> Instagram
                       </p>
                       <p>
                         <FaInstagramSquare size={10}/> Twitter
                       </p>
                       </div>
                   </div>
                   
                   <div className='footer-box'>
                   
                   <div className="logo">
                  <GiDolphin color="white" size={60}/>
                  <p className="logo-text">
                    Swimly
                  </p>
                 
                  </div>
                  <p className="u-text-small_1">&copy; Copyright 2022. Swimly.com</p>
                 </div>
         </div>
        </section>
        
        );
    }      
}

export default Footer;

