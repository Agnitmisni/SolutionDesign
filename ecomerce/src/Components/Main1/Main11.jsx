import React from 'react'
import './Main11.css'
import Imazhi5 from '../assets/images5.png';
import Imazhi6 from '../assets/beauty.png';
import Imazhi7 from '../assets/imagesclothes.png';
import Imazhi8 from '../assets/image2.png';


const Main11 = () => {
  return (
    <div className="Main11-head">
        <div className="main-tex1">
            <span className="forExplo">Explore Collections</span>
        </div>
        <div className="Main1For1">
            <div className="imgContanier1">
                <div className="img-Wrapper1">
                   <img src={Imazhi6} alt='' />
                   
                </div>
                <div className="img-Wrapper1">
                   <img src={Imazhi7} alt='' />
                   
                </div>
                <div className="img-Wrapper1">
                   <img src={Imazhi5} alt='' />
                   
                </div>
                <div className="img-Wrapper1">
                   <img src={Imazhi8} alt='' />
                   
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Main11
