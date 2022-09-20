import React from 'react'
import './Aboutus.css';

import as1 from "./img/as1.png";
import as2 from "./img/as2.png";
import as3 from "./img/as3.png";

const Aboutus = () => {
  return (
    <div>
    <div className='Rectangle40'>
      <div className="about">
      About us
      </div>
      <div className='discri'>
      <p>BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
    </div>
    <div>
    <img src={as1} alt="" className="a1"></img>
    <img src={as2} alt="" className="a2"></img>
    <img src={as3} alt="" className="a3"></img>
    </div>
    </div>
    
       
    </div>

  )
}

export default Aboutus
