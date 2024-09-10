import React from 'react'
import './Main.css';
import ImazhiCam from '../assets/cam1.png';
import Imazh2 from '../assets/imagee.png';
import Imazhi3 from '../assets/image3.png';
import Imazhi4 from '../assets/images4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <div className="Main-head">
        <div className="main-tex1">
            <span className="forNew">What's New</span>
            <div className="forBac1">
                <div className="formaintex">
                    <span className="text-item">TOP</span>
                    <span className="text-item">ACCESSORIES</span>
                    <span className="text-item">DRESS</span>
                    <span className="text-item">SHORT</span>
                    <span className="text-item">SHIRT</span>
                </div>
            </div>
            <div className="mainforImg">
                <FontAwesomeIcon icon={faChevronLeft} className="slider-icon left" />
                <div className="img-container">
                    <div className="img-wrapper">
                        <img src={ImazhiCam} alt="Product 1" />
                        <div className="sale-banner">Sale</div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="img-text">
                            Satin Trousers With Elastic <br />
                            <span className="price">$68.00</span>
                            <span className="pric">$98.00</span>
                            <span className="pricSal">-25%</span>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src={Imazh2} alt="Product 2" />
                        <div className="sale-banner new">NEW</div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="img-text">Straight Trousers <br />
                            <span className="price">$68.00</span>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src={Imazhi3} alt="Product 3" />
                        <div className="sale-banner">Sale</div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="img-text">Biker-Style Leggings<br />
                            <span className="price">$68.00</span>
                            <span className="pric">$98.00</span>
                            <span className="pricSal">-25%</span>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src={Imazhi4} alt="Product 4" />
                        <div className="sale-banner new">NEW</div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="img-text">Jacquard Fluid Trousers <br />
                            <span className="price">$68.00</span>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="slider-icon right" />
            </div>
        </div>
    </div>
    );
  }
  
  export default Main;