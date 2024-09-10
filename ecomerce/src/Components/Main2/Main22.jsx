import React from 'react'
import './Main22.css'
import ImazhiCam from '../assets/cam1.png';
import Imazhi3 from '../assets/image3.png';
import Imazhi4 from '../assets/images4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Imazhi5 from '../assets/Imazhi0.png';
import Imazhi6 from '../assets/Imazhi01.png';
import Sv1 from '../assets/svg2.png';
import Sv2 from '../assets/svg3.png';
import Sv3 from '../assets/svg4.png';
import Yllat from '../assets/Stars.png';



const Main22 = () => {
  return (
    <>
        <div className="BacSales">
            <div className="ContinerBac">
                    <span className="tex">Best Sellers</span>
                    <span className="tex">On Sale</span>
                    <span className="tex">New Arriwals</span>
            </div>
            
        </div>
        <div className="mainforImgg">
                <FontAwesomeIcon icon={faChevronLeft} className="sliderr-icon leftt" />
                <div className="img-containerr">
                    <div className="img-wrapperr">
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
                    <div className="img-wrapperr">
                        <img src={Imazhi3} alt="Product 3" />
                        <div className="sale-banner new">NEW</div>
                        <div className="heart-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="img-text">Biker-Style Leggings<br />
                            <span className="price">$68.00</span>
                        </div>
                    </div>
                    <div className="img-wrapperr">
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
                    <div className="img-wrapperr">
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
                <FontAwesomeIcon icon={faChevronRight} className="sliderr-icon rightt" />
            </div>
            <div className="Section3">
            <div className="section-3">
                <div className="image-container">
                    <img src={Imazhi5} alt="Image 5" />
                    <div className="overlay">
                        <h2>Best Sellers</h2>
                        <button className="shop-button">Shop Now</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Imazhi6} alt="Image 6" />
                    <div className="overlay">
                        <h2>New Arrivals</h2>
                        <button className="shop-button">Shop Now</button>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="Section4">
            <div className="section-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                    <rect width="80" height="80" fill="none"/>
                    <g>
                        <path d="M38.811,0a4.733,4.733,0,0,1,4.745,4.711V30.305a4.733,4.733,0,0,1-4.745,4.711h-3.6l-8.151,5.862a1.008,1.008,0,0,1-1.042.08.993.993,0,0,1-.546-.885V35.016H4.745A4.733,4.733,0,0,1,0,30.305V4.711A4.733,4.733,0,0,1,4.745,0H9.874a.994.994,0,1,1,0,1.988H4.745A2.736,2.736,0,0,0,2,4.711V30.305a2.736,2.736,0,0,0,2.743,2.723H26.472a1,1,0,0,1,1,.994v4.1L34.3,33.217a1,1,0,0,1,.587-.189h3.925a2.736,2.736,0,0,0,2.743-2.723V4.711a2.736,2.736,0,0,0-2.743-2.723H14.236a.994.994,0,1,1,0-1.988H38.811Z" transform="translate(33.775 6.667)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.4"/>
                        <path d="M63.522,52.181c0,.021.006.041.008.062a5.1,5.1,0,0,1-1.54,4.364L59.607,58.9a17.234,17.234,0,0,1-19.86,2.9A86.373,86.373,0,0,1,9.026,35.957a1.094,1.094,0,1,1,1.77-1.285A84.2,84.2,0,0,0,40.752,59.849a15.052,15.052,0,0,0,17.34-2.531l.018-.018L40.063,47.146,39,48.084a5.071,5.071,0,0,1-6.274.349C25.038,43.05,19.445,37.1,15.622,30.256a5.061,5.061,0,0,1,.749-5.964l.33-.349L6.838,5.477A15.1,15.1,0,0,0,3.731,22.948l.017.035c1.018,2.057,2.118,4.069,3.269,5.978.193.323.4.661.615,1.009a1.094,1.094,0,0,1-1.859,1.154c-.222-.358-.435-.706-.632-1.036-1.182-1.96-2.313-4.028-3.358-6.142l-.02-.04A16.976,16.976,0,0,1,.3,13.167a17.178,17.178,0,0,1,5.263-9.5l2.488-2.3a5.147,5.147,0,0,1,8.1,1.48l6.55,13.1a5.069,5.069,0,0,1-.847,5.729l-3.892,4.117a2.883,2.883,0,0,0-.429,3.4c3.658,6.554,9.037,12.262,16.444,17.451a2.889,2.889,0,0,0,3.575-.2l4.917-4.325a5.065,5.065,0,0,1,5.754-.642l3.034,1.653a1.094,1.094,0,1,1-1.047,1.921l-3.035-1.654a2.87,2.87,0,0,0-3.262.364L41.8,45.615l17.955,10.1.717-.688a2.932,2.932,0,0,0,.883-2.53l0-.018A2.931,2.931,0,0,0,59.84,50.3l-4.863-2.65a1.094,1.094,0,1,1,1.046-1.921l4.864,2.65a5.1,5.1,0,0,1,2.635,3.8Z" transform="translate(2.666 8.736)" fill="#1f1f1f" stroke="#1f1f1f" stroke-width="0.4"/>
                    </g>
                </svg>
                <p>24/7 Customer Service</p>
                <p className="sub-text">We're here to help you with any questions or <br />concerns you have, 24/7</p> 
            </div>
            <div className="section-4">
                <img src={Sv2} alt="SVG 1" />
                <p>14-Day Money Back</p>
                <p className="sub-text">If you're not satisfied with your purchase, simply <br />return it within 14 days for a refund.</p> 
            </div>
            <div className="section-4">
                <img src={Sv1} alt="SVG 2" />
                <p>Our Guarantee</p>
                <p className="sub-text">We stand behind our products and services and <br />guarantee your satisfaction.</p>
            </div>
            <div className="section-4">
                <img src={Sv3} alt="SVG 3" />
                <p>Shipping Worldwide</p>
                <p className="sub-text">We ship our products worldwide, making them <br /> accessible to customers everywhere.</p> 
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="dark-background-section">
    <div className="Section5">
        <div className="Sect5Text">
            <span className="tex5">What People Are Saying</span>
        </div>
        <div className="section-5-wrapper">
            <div className="sectioYlli">
                <img src={Yllat} alt="" className="Yjet" />
                <p className="seText">Variety Of Styles!</p>
                <p className="setExt1">
                    "Fantastic shop! Great selection, fair prices, and <br />
                    friendly staff. Highly recommended. The quality <br />
                    of the products is exceptional, and the prices are <br />
                    very reasonable!"
                </p>
                <p className="setExt2">Lisa K.</p>
                <p className="setExt3">August 13, 2023</p>
            </div>
            <div className="sectioYlli">
                <img src={Yllat} alt="" className="Yjet" />
                <p className="seText">Quality Of Clothing!</p>
                <p className="setExt1">
                "I absolutely love this shop! The products are <br/> high-quality and the customer service is<br /> excellent. I always leave with exactly what I need <br />and a smile on my face."
                </p>
                <p className="setExt2">Mark G.</p>
                <p className="setExt3">August 13, 2023</p>
            </div>
            <div className="sectioYlli">
                <img src={Yllat} alt="" className="Yjet" />
                <p className="seText">Customer Service!</p>
                <p className="setExt1">
                "I love this shop! The products are always top-<br />quality, and the staff is incredibly friendly and <br />helpful. They go out of their way to make sure <br />that I'm satisfied with my purchase.
                </p>
                <p className="setExt2">Emily S.</p>
                <p className="setExt3">August 13, 2023</p>
            </div>
        </div>
            <div className="sectionForRrath">
                <div className="rreth-wrapper">
                    <div className="rrethh">
                        <div className="rreth-brenda"></div>
                    </div>
                    <div className="rreth">
                       
                    </div>
                    <div className="rreth">
                        
                    </div>
                    <div className="rreth">
                        
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    </div>
</>
  )
}

export default Main22;
