import React from "react"
import "./Empty.css"
import  { useState } from "react";
import {Link} from "react-router-dom"
import Bg from '../img/Bg.png'
import Logo from "../img/Logo.png";
const Empty = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="home">
    
    <div className="Navbar">
  
    <div className="i-bg"></div>
        <img src={Bg} alt="" className="h-img"></img>
        <img id="changed" src={Logo} alt="" className="logo"></img>
       
      
      
      <div className={`nav-items1 ${isOpen && "open"}`}>
      
       <Link to='/Gallary'>Gallary</Link>
       <Link to='/Service'>Price for the services</Link>
        <Link to='/about'> About us</Link>
        <Link to='/Contact'>Contact</Link>
        <div>
          <h1 className="num1">4</h1>
          <h1 className="num2">0</h1>
          <h1 className="num3">4</h1>
      
    </div>
   <div> <h1 className="txt">Woops</h1>
    <h2 className="txt1">Oh, you must be lost,
there is no such page.</h2>
< div className="bt">
        <Link to='/Home'>
                <button className='secondary-btn'>Go to the home page</button>
              </Link>
              <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
</div>
</div>
      </div>
      </div>

</div>
  )
}

export default Empty;