import React from "react";
import './Work.css';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import {Link} from "react-router-dom";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import k1 from "./img/stair.png";
function Work(){
    return (
    <div>
        <div className="work">our work
</div>
<div>
<AliceCarousel >
  <img src={img1} alt="" className="sliderimg1"></img>
     
        <img src={img2} alt="" className="sliderimg1"></img>
        <img src={img3} alt="" className="sliderimg1"></img>
        </AliceCarousel>
        </div>
        <div className="work1"> Advantages
working with us</div>
<div>
        <img src={k1} alt="" className="k1"></img>
        </div>
        <div className="s1">

       <li>In-house carpentry production</li>
        <li>We only treat wood with environmentally friendly and safe products</li>
        <li>Prices from the manufacturer, no extra charges</li>
        </div>
        < div className="bt1">
        <Link to='/consultation'>
                <button className='con'>Receive a consultation</button>
              </Link>
        </div>
        </div>
    )
}
export default Work;