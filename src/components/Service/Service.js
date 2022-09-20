import React, { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../img/Logo.png"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import price from "../img/price.png"
import price1 from "../img/price1.png"
import price2 from "../img/price2.png"
import Question from '../Question/Question';


const Service = () => {
  const [isOpen] = useState(false);
  return (
    <div classname="n">
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
     <div className='ow'>PRICE LIST</div>
     <div >
     <AliceCarousel>
     <img src={price} alt="" className="sliderimg"></img>
    <img src={price1} alt="" className="sliderimg"></img>
    <img src={price2} alt="" className="sliderimg"></img>
    </AliceCarousel>
    </div>
    <div className='ques'><div><Question/></div></div>
  
  
    </div>
  )
}

export default Service
