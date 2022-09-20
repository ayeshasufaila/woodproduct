import React, { useState } from "react";
import {Link} from "react-router-dom";

import "./Contact.css"
import MAP from '../img/MAP.png'
import call from '../img/call.png'
import location from '../img/location.png'
import Logo from "../img/Logo.png";
const Contact = () => {
  
  const [isOpen] = useState(false);
  return (
    <div >
     <div className='hero'>
       <div className="Nav">
       <img id="changed" src={Logo} alt="" className="logo"></img>
       
      
      
       <div className={`nav-items ${isOpen && "open"}`}>
       
             
               <Link to='/Gallary' >
                 Gallary
               </Link>
             
         <Link to="/Service">Price for the services</Link>
         
               <Link to='/about' >
                 About us
               </Link>
             
         
         <Link to="/Contact">Contact</Link>
     
       </div>
       </div>
       </div>
      <div className='ct'>Contact</div>
     <div className='call1'> <img  src={call} alt="" className='call'></img>
        <div className='ph'>+420 000 000 </div></div>
      <img src={MAP} alt="" className="map"></img>
      <img   id='changed' src={location} alt="" className='loc'></img>
      
       <div className='address1'>Na Plzeňce 1166/0 150 00</div>
       
       <div className='form'>
        <img id="changed" src={Logo} alt="" className="logo"></img>
        <img  src={call} alt="" className='call'></img>
        <div className='ph'>+420 000 000 </div>
      <div className='footer'> Privacy Policy</div>
      <div>
      <img  id='changed' src={location} alt="" className='location'></img>
      <div className='address'>Na Plzeňce 1166/0
150 00</div>
      </div>
      </div>
    </div>
  )
}

export default Contact
