import React from "react";
import './Material.css';
import w1 from "./img/w1.png";
import w2 from "./img/w2.png";
import w3 from "./img/w3.png";
function Material(){
    return (
        <div>
        <div className="Material">
        THE WOOD WE WORK WITH 
        </div>
        <div>
        <img src={w1} alt="" className="w1"></img>
        </div>
        <div>
        <img src={w2} alt="" className="w2"></img>
        </div>
        <div>
        <img src={w3} alt="" className="w3"></img>
        </div>
        <div>
            <span className="oak">oak</span>
            <span className="buk">Buk</span>
            <span className="ash">Ash</span>
        </div>
        <div className="q">
        <ul>
        <li className="done" >Durability</li>
        <li className="done">Beautiful texture</li>
        <li class="done">Water resistance</li>
        <li>Expensive</li>
        </ul>
         </div>
         <div className="q1">
         <ul>
        <li class="done">Durability</li>
        <li>Hard to handle</li>
        </ul>  
         </div>
         <div className="q2">
         <ul>
        <li className="done">Durability</li>
        <li>Hard to handle</li>
        </ul>  
         </div>
         </div>
    )
}
export default Material