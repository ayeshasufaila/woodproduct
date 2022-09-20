import React, { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "../img/Logo.png"
import Aboutus from '../Aboutus'
import Question from '../Question/Question'
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png"


const About = () => {
  
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
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
    <div className='set2'>
      <div>
    <Aboutus/>
    
    <div className='ques1'><Question/></div>
    </div>
    
    </div>
    <div className='ow1'>Our work</div>
     <div >
     
     <AliceCarousel >
  
     <img src={img1} alt="" className="sliderimg2"></img>
    <img src={img2} alt="" className="sliderimg2"></img>
    <img src={img3} alt="" className="sliderimg2"></img>
    </AliceCarousel>
    </div>
    <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default About
