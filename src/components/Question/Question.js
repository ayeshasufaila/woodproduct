import React from 'react'
import './Question.css'
import wood from '../img/wood.png'
import Logo from "../img/Logo.png";
import call from "../img/call.png"
import location from "../img/location.png"
const Question = () => {
  
  return (

    <div>
       <div className='contact'>Any questions?</div>
    <div className='text'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</div>
    <div>
    <input type="text" className='name' placeholder='your name' id='Name'/></div>
    <div ><input type="text" className='Rectangle43' placeholder='Your telephone number'/></div>
    <div><textarea id="msg" className="message"  placeholder='your question'/></div>
    <div className=''><button className='send' id='send' type='submit'>send</button></div>
  

<div>
        <img src={wood} alt="" className="wood"></img>
        </div>
        <div className='Rectangle21'>
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

export default Question
