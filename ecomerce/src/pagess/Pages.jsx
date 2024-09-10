import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar';
import imaazzhhi1 from '../Components/assets/im1.png';
import imaazzhhi2 from '../Components/assets/im2.png';
import imaazzhhi3 from '../Components/assets/im3.png';
import imaazzhi4 from '../Components/assets/im4.png';
import str from '../Components/assets/stars4.png';
import Footer from '../Components/Footer/Footer';
import ImazhiCam from '../Components/assets/cam1.png';
import Imazh2 from '../Components/assets/imagee.png';
import Imazhi3 from '../Components/assets/image3.png';
import Imazhi4 from '../Components/assets/images4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Pages = () => {
  return (
    <>
        <div className="ContanierForPage">
            <Navbar />
            <div className="breadcrumbs">
            <a href="/">Homepage</a>
                <span> > </span>
                <a href="/women">Women</a>
                <span> > </span>
                <span className="active">Leather boots with tall leg</span>
            </div>
                <div className="product-page">
                    <div className="image-gallery">
                        <div className="thumbnail">
                        
                        <img src={imaazzhi4} alt="Product Thumbnail" />
                        </div>
                        <div className="thumbnail">
                        <img src={imaazzhhi3 } alt="Product Thumbnail" />
                        </div>
                        <div className="thumbnail">
                        <img src={imaazzhhi2} alt="Product Thumbnail" />
                        </div>
                        <div className="thumbnail">
                        <img src={imaazzhhi1} alt="Product Thumbnail" />
                        </div>
                    </div>

                    <div className="product-details">
                        <h1>Ribbed Short-Sleeved T-Shirt</h1>
                         <img src={str} alt='' className='star' />
                        <p className="pricce">$68.00</p>
                        <p className="product-description">
                        The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.
                        </p>

                        <div className="color-options">
                        <p>Colors: Blue</p>
                        <div className="color-squares">
                            <div className="color white"></div>
                            <div className="color blue"></div>
                            <div className="color pink"></div>
                            <div className="color black"></div>
                        </div>
                        </div>

                        <div className="size-options">
                        <p className='si'>Size:</p>
                            <select name="size" id="size-select">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>

                    <div className="quantity-options">
                        <p className='quan'>Quantity:</p>
                        <input type="number" min="1" defaultValue="1" />
                        </div>

                        <button className="purchase-button">Purchase on Amazon</button>
                    </div>
                  
                </div>
                <div className="additional-info">
                <div className="tabs">
                    <span className="tab">Description</span>
                    <span className="tab active">Specifications</span>
                    <span className="tab">Reviews</span>
                </div>

          <div className="content">
            <div className="specifications">
              <div className="spec-column">
                <h2 className='descrip'>Description</h2>
                <p className="keep">
                    Keep your home organized, yet elegant with storage cabinets by Onita Patio Furniture.<br /> These cabinets not only make a great storage units, but also bring a great decorative<br /> accent to your decor. Traditionally designed, they are perfect to be used in the hallway,<br /> living room, bedroom, office or any place where you need to store or display things. Made<br /> of high quality materials, they are sturdy and durable for years. Bring one-of-a-kind look<br /> to your interior with furniture from Onita Furniture!
                </p>
              </div>
              <div className="spec-column">
                <h2 className='abou'>About This Product</h2>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nulla luctus libero quis mauris vestibulum dapibus.<br />Maecenas ullamcorper erat mi, vel consequat enim suscipit at.<br />Quisque consectetur nibh ac urna molestie scelerisque.<br />Mauris in nisl scelerisque massa consectetur pretium sed et mauris.</p>
              </div>
            </div>

            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
                    <defs>
                        <clipPath id="clip-path">
                        <rect width="40" height="40" fill="none"/>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#clip-path)">
                        <rect width="40" height="40" fill="none"/>
                        <path d="M10.321.228a.851.851,0,0,1,1.192.033.83.83,0,0,1-.033,1.176L4.87,7.671a.847.847,0,0,1-1.175-.025L.235,4.1A.831.831,0,1,1,1.427,2.937L4.311,5.9,10.321.228Z" transform="translate(14.201 16.057)" fill="#1f1f1f"/>
                        <path d="M12.454,0A12.454,12.454,0,1,1,0,12.454,12.466,12.466,0,0,1,12.454,0Zm0,23.241A10.787,10.787,0,1,0,1.667,12.454,10.787,10.787,0,0,0,12.454,23.241Z" transform="translate(7.611 7.548)" fill="#1f1f1f"/>
                        <path d="M39.842,19.544a.833.833,0,0,1,0,.917l-2.726,4.126.275,4.943a.846.846,0,0,1-.458.792l-4.4,2.226-2.226,4.4a.832.832,0,0,1-.792.458l-4.943-.275-4.126,2.726a.812.812,0,0,1-.917,0L15.4,37.132l-4.943.275a.845.845,0,0,1-.792-.458l-2.226-4.4-4.4-2.226a.831.831,0,0,1-.458-.792l.275-4.943L.137,20.452a.833.833,0,0,1,0-.917l2.726-4.126-.275-4.943a.845.845,0,0,1,.458-.792l4.4-2.226,2.226-4.4a.83.83,0,0,1,.792-.458l4.943.275L19.535.138a.833.833,0,0,1,.917,0l4.126,2.726L29.53,2.6a.846.846,0,0,1,.792.458l2.226,4.4,4.4,2.226a.832.832,0,0,1,.458.792l-.275,4.943ZM38.158,20l-2.576-3.9a.913.913,0,0,1-.133-.508l.258-4.677-4.16-2.1a.822.822,0,0,1-.367-.367l-2.1-4.16L24.4,4.547a.782.782,0,0,1-.509-.134l-3.9-2.576-3.9,2.576a.915.915,0,0,1-.509.134l-4.677-.259-2.1,4.16a.822.822,0,0,1-.367.367l-4.16,2.1.259,4.677a.78.78,0,0,1-.134.508L1.83,20l2.576,3.9a.911.911,0,0,1,.134.509L4.28,29.088l4.168,2.092a.821.821,0,0,1,.367.367l2.1,4.16,4.677-.259h.042a.825.825,0,0,1,.458.142l3.9,2.576,3.9-2.576a.911.911,0,0,1,.509-.133l4.676.258,2.1-4.16a.823.823,0,0,1,.367-.367l4.16-2.1-.258-4.676a.783.783,0,0,1,.133-.509Z" transform="translate(0.07)" fill="#1f1f1f"/>
                    </g>
                </svg>

                </div>
                <h3>Shipping Faster</h3>
                <p>Use on walls, furniture, doors, and many more surfaces. The possibilities are endless.</p>
              </div>

              <div className="feature">
                <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <g id="Icon" transform="translate(0)">
                        <rect id="Icon_Frame_Background_" data-name="Icon [Frame Background]" width="40" height="40" fill="none"/>
                        <path id="Vector" d="M4.167,1.667H.833A.833.833,0,0,1,.833,0H4.167a.833.833,0,1,1,0,1.667Z" transform="translate(6.666 30)" fill="#1f1f1f"/>
                        <path id="Vector-2" data-name="Vector" d="M15.418,15H13.334a.833.833,0,0,1,0-1.667h1.392l1.123-5.987A5.833,5.833,0,0,0,10,1.667H4.529L1.878,13.333h4.79a.833.833,0,0,1,0,1.667H.834a.833.833,0,0,1-.813-1.017L3.051.65A.833.833,0,0,1,3.864,0H10a7.509,7.509,0,0,1,7.5,7.5l-1.265,6.82a.831.831,0,0,1-.818.68Z" transform="translate(22.498 16.667)" fill="#1f1f1f"/>
                        <path id="Vector-3" data-name="Vector" d="M4.167,8.333A4.167,4.167,0,1,1,8.333,4.167,4.171,4.171,0,0,1,4.167,8.333Zm0-6.667a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z" transform="translate(28.334 26.667)" fill="#1f1f1f"/>
                        <path id="Vector-4" data-name="Vector" d="M4.167,8.333A4.167,4.167,0,1,1,8.333,4.167,4.171,4.171,0,0,1,4.167,8.333Zm0-6.667a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z" transform="translate(10 26.667)" fill="#1f1f1f"/>
                        <path id="Vector-5" data-name="Vector" d="M7.5,1.667H.833A.833.833,0,0,1,.833,0H7.5a.833.833,0,0,1,0,1.667Z" transform="translate(3.334 15)" fill="#1f1f1f"/>
                        <path id="Vector-6" data-name="Vector" d="M9.167,1.667H.833A.833.833,0,0,1,.833,0H9.167a.833.833,0,1,1,0,1.667Z" transform="translate(1.666 20)" fill="#1f1f1f"/>
                        <path id="Vector-7" data-name="Vector" d="M10.833,1.667h-10A.833.833,0,0,1,.833,0h10a.833.833,0,1,1,0,1.667Z" transform="translate(0 25)" fill="#1f1f1f"/>
                        <path id="Vector-8" data-name="Vector" d="M16.667,20H10.833a.833.833,0,1,1,0-1.667H16L19.788,1.667H.833A.833.833,0,0,1,.833,0h20a.833.833,0,0,1,.813,1.017L17.48,19.35a.834.834,0,0,1-.813.65Z" transform="translate(6.666 11.667)" fill="#1f1f1f"/>
                    </g>
                </svg>

                </div>
                <h3>Cotton Material</h3>
                <p>Use on walls, furniture, doors, and many more surfaces. The possibilities are endless.</p>
              </div>

              <div className="feature">
                <div className="feature-icon">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        >
                        <defs>
                            <clipPath id="clip-path">
                            <rect
                                id="Icon_Frame_Clip_Content_Mask_"
                                data-name="Icon [Frame Clip Content Mask]"
                                width="40"
                                height="40"
                                fill="none"
                            />
                            </clipPath>
                        </defs>
                        <g
                            id="Icon_Clip_Content_"
                            data-name="Icon (Clip Content)"
                            clipPath="url(#clip-path)"
                        >
                            <rect
                            id="Icon_Frame_Background_"
                            data-name="Icon [Frame Background]"
                            width="40"
                            height="40"
                            fill="none"
                            />
                            <path
                            id="Vector"
                            d="M10.321.228a.851.851,0,0,1,1.192.033.83.83,0,0,1-.033,1.176L4.87,7.671a.847.847,0,0,1-1.175-.025L.235,4.1A.831.831,0,1,1,1.427,2.937L4.311,5.9,10.321.228Z"
                            transform="translate(14.201 16.057)"
                            fill="#1f1f1f"
                            />
                            <path
                            id="Vector-2"
                            data-name="Vector"
                            d="M12.454,0A12.454,12.454,0,1,1,0,12.454,12.466,12.466,0,0,1,12.454,0Zm0,23.241A10.787,10.787,0,1,0,1.667,12.454,10.787,10.787,0,0,0,12.454,23.241Z"
                            transform="translate(7.611 7.548)"
                            fill="#1f1f1f"
                            />
                            <path
                            id="Vector-3"
                            data-name="Vector"
                            d="M39.842,19.544a.833.833,0,0,1,0,.917l-2.726,4.126.275,4.943a.846.846,0,0,1-.458.792l-4.4,2.226-2.226,4.4a.832.832,0,0,1-.792.458l-4.943-.275-4.126,2.726a.812.812,0,0,1-.917,0L15.4,37.132l-4.943.275a.845.845,0,0,1-.792-.458l-2.226-4.4-4.4-2.226a.831.831,0,0,1-.458-.792l.275-4.943L.137,20.452a.833.833,0,0,1,0-.917l2.726-4.126-.275-4.943a.845.845,0,0,1,.458-.792l4.4-2.226,2.226-4.4a.83.83,0,0,1,.792-.458l4.943.275L19.535.138a.833.833,0,0,1,.917,0l4.126,2.726L29.53,2.6a.846.846,0,0,1,.792.458l2.226,4.4,4.4,2.226a.832.832,0,0,1,.458.792l-.275,4.943ZM38.158,20l-2.576-3.9a.913.913,0,0,1-.133-.508l.258-4.677-4.16-2.1a.822.822,0,0,1-.367-.367l-2.1-4.16L24.4,4.547a.782.782,0,0,1-.509-.134l-3.9-2.576-3.9,2.576a.915.915,0,0,1-.509.134l-4.677-.259-2.1,4.16a.822.822,0,0,1-.367.367l-4.16,2.1.259,4.677a.78.78,0,0,1-.134.508L1.83,20l2.576,3.9a.911.911,0,0,1,.134.509L4.28,29.088l4.168,2.092a.821.821,0,0,1,.367.367l2.1,4.16,4.677-.259h.042a.825.825,0,0,1,.458.142l3.9,2.576,3.9-2.576a.911.911,0,0,1,.509-.133l4.676.258,2.1-4.16a.823.823,0,0,1,.367-.367l4.16-2.1-.258-4.676a.783.783,0,0,1,.133-.509Z"
                            transform="translate(0.07)"
                            fill="#1f1f1f"
                            />
                        </g>
                  </svg>

                </div>
                <h3>High Quality</h3>
                <p>Use on walls, furniture, doors, and many more surfaces. The possibilities are endless.</p>
              </div>

              <div className="feature">
                <div className="feature-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        >
                        <defs>
                            <clipPath id="clip-path">
                            <rect
                                id="Icon_Frame_Clip_Content_Mask_"
                                data-name="Icon [Frame Clip Content Mask]"
                                width="40"
                                height="40"
                                fill="none"
                            />
                            </clipPath>
                        </defs>
                        <g
                            id="Icon_Clip_Content_"
                            data-name="Icon (Clip Content)"
                            clipPath="url(#clip-path)"
                        >
                            <rect
                            id="Icon_Frame_Background_"
                            data-name="Icon [Frame Background]"
                            width="40"
                            height="40"
                            fill="none"
                            />
                            <path
                            id="XMLID_38_"
                            d="M.009,0C.042,0-.023,0,.009,0Z"
                            transform="translate(7.055 24.493)"
                            fill="#1f1f1f"
                            />
                            <path
                            id="XMLID_39_"
                            d="M37.745,35.315a.781.781,0,0,1,0,1.563A38.429,38.429,0,0,1,29.1,35.89a9.091,9.091,0,0,1-1.386,1.831l-.021.023-.026.024A8.277,8.277,0,0,1,22.005,40a7.819,7.819,0,0,1-2.08-.278A27.2,27.2,0,0,1,3.368.4.781.781,0,0,1,4.828.683,26.263,26.263,0,0,0,9.114,12.065a.781.781,0,1,1-1.294.876A27.82,27.82,0,0,1,3.691,3.285a25.747,25.747,0,0,0-.762,18.421,8.91,8.91,0,0,0,3.543,1.233.781.781,0,0,1,.678.872.829.829,0,0,1-.823.681,10.9,10.9,0,0,1-2.57-.641,25.418,25.418,0,0,0,5.31,7.786,25.672,25.672,0,0,0,1.941,1.752,8.911,8.911,0,0,0,3.829-.35.781.781,0,0,1,.472,1.49,10.541,10.541,0,0,1-2.14.441,25.506,25.506,0,0,0,7.172,3.245,6.656,6.656,0,0,0,6.252-1.585,7.627,7.627,0,0,0,.921-1.143,38.009,38.009,0,0,1-7.778-3.1A38.6,38.6,0,0,1,6.307,20.448a.781.781,0,0,1,1.282-.893A36.8,36.8,0,0,0,28.249,34.063a7.408,7.408,0,0,0-4.007-9.61,10.58,10.58,0,0,1,.8,3.558.781.781,0,0,1-.743.818h-.038a.781.781,0,0,1-.78-.744,9.045,9.045,0,0,0-1.339-4.309A27.5,27.5,0,0,1,18.124,22.1a10.649,10.649,0,0,1,.4,3.242.781.781,0,0,1-.781.758h-.024a.781.781,0,0,1-.757-.8,9.068,9.068,0,0,0-1.008-4.439,27.918,27.918,0,0,1-3.413-2.563.781.781,0,1,1,1.03-1.175,25.923,25.923,0,0,0,10.186,5.521l.039.01A9.021,9.021,0,0,1,27.78,25a8.877,8.877,0,0,1,2.537,6.374,9.317,9.317,0,0,1-.545,3.063,36.643,36.643,0,0,0,7.974.879Z"
                            transform="translate(0.736 0.001)"
                            fill="#1f1f1f"
                            />
                            <path
                            id="XMLID_397_"
                            d="M.229,1.334a.781.781,0,0,1,0-1.1.781.781,0,0,1,1.1,0,.781.781,0,0,1,0,1.1.781.781,0,0,1-1.1,0Z"
                            transform="translate(10.58 14.498)"
                            fill="#1f1f1f"
                            />
                        </g>
                    </svg>

                </div>
                <h3>Highly Compatible</h3>
                <p>Use on walls, furniture, doors, and many more surfaces. The possibilities are endless.</p>
              </div>
            </div>
          </div>
          <div className='ForRelated'>
                <span className="related">
                    Related Products
                </span>
          </div>
          <div className="mainforImmg">
                <FontAwesomeIcon icon={faChevronLeft} className="slider-icoon leftt" />
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
                <FontAwesomeIcon icon={faChevronRight} className="slider-icoon rightt" />
            </div>
            <Footer />
        </div>
                
        </div>
    </>
  )
}
export default Pages
  