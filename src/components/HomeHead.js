       
       
import React, { useState } from "react";
import {Link} from "react-router-dom";


import "./Home.css";
import Bg from "./img/Bg.png";
import f1 from "./img/f1.png";
import f2 from "./img/f2.png";
import f3 from "./img/f3.png";
import Logo from "./img/Logo.png";
const HomeHead = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="home">
    
    <div className="Navbar">
  
    <div className="i-bg"></div>
        <img src={Bg} alt="" className="h-img"></img>
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
      <div className="Rectangle-39">
        <div className="r-left">
        <div className="r-left-wrapper">
          <div className="h1"> SOLID WOOD PRODUCTS</div>
          <div className="h2">Oak, beech, ash from 1700 CZK per m3</div>
        </div>
        </div>
        <div className="line-1"></div>
        <div> <img src={f1} alt="" className="f1"></img>
        </div>
        <img src={f2} alt="" className="f2"></img>
        </div>
        <div>
        <img src={f3} alt="" className="f3"></img>
        </div>
        < div className="bt">
        <Link to='/order'>
                <button className='primary-btn'>Order</button>
              </Link>
        </div>
      </div>
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

  );
};

export default HomeHead;