import React from 'react';
import './Footer.css';
import discofoto from '../assets/discover.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Anvogue</h3>
          <p>Mail: <a href="mailto:hi.avitex@gmail.com">hi.avitex@gmail.com</a></p>
          <p>Phone: 1-333-345-6868</p>
          <p>Address: 549 Oak St. Crystal Lake, IL 60014</p>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order & Returns</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Shop</h3>
          <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Clothes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#">Orders FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter and get 10% off your first purchase</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail" />
            <button type="submit">→</button>
          </form>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.255" height="19.2" viewBox="0 0 9.255 19.2">
                    <g id="facebook-f" transform="translate(-6.48 -2.4)">
                        <path id="Vector" d="M6.128,10.8v8.4H2.747V10.8H0V7.325H2.747V4.677C2.747,1.664,4.362,0,6.833,0A15.025,15.025,0,0,1,9.255.235V3.193H7.891A1.658,1.658,0,0,0,6.128,5.07V7.325h3L8.648,10.8Z" transform="translate(6.48 2.4)" fill="#1f1f1f"/>
                    </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.196" viewBox="0 0 19.2 19.196">
                    <g id="instagram" transform="translate(-2.4 -2.4)">
                        <path id="Vector" d="M14.524,9.6A4.922,4.922,0,1,1,9.6,4.676,4.914,4.914,0,0,1,14.524,9.6ZM9.6,12.8A3.2,3.2,0,1,0,6.4,9.6,3.205,3.205,0,0,0,9.6,12.8Zm6.271-8.322a1.148,1.148,0,1,1-1.148-1.148A1.145,1.145,0,0,1,15.873,4.475Zm3.26,1.165c.09,1.585.09,6.331,0,7.916a5.718,5.718,0,0,1-1.551,4.022,5.681,5.681,0,0,1-4.022,1.551c-1.585.09-6.335.09-7.92,0a5.725,5.725,0,0,1-4.022-1.551A5.681,5.681,0,0,1,.067,13.556c-.09-1.585-.09-6.335,0-7.92A5.7,5.7,0,0,1,1.618,1.614,5.71,5.71,0,0,1,5.64.067c1.585-.09,6.335-.09,7.92,0a5.718,5.718,0,0,1,4.022,1.551A5.681,5.681,0,0,1,19.133,5.64ZM17.471,9.6c0-1.4.116-4.395-.385-5.658A3.239,3.239,0,0,0,15.26,2.115C14,1.618,11,1.729,9.6,1.729s-4.395-.116-5.658.385A3.239,3.239,0,0,0,2.119,3.94C1.622,5.2,1.734,8.2,1.734,9.6s-.116,4.395.385,5.658a3.239,3.239,0,0,0,1.825,1.825c1.259.5,4.262.385,5.658.385s4.395.116,5.658-.385a3.239,3.239,0,0,0,1.825-1.825c.5-1.259.385-4.262.385-5.658Z" transform="translate(2.4 2.4)" fill="#1f1f1f"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="13.5" viewBox="0 0 19.2 13.5">
                    <g id="youtube" transform="translate(-2.4 -4.801)">
                        <path id="Vector" d="M18.8,2.112a25.308,25.308,0,0,1,.4,4.651,25.308,25.308,0,0,1-.4,4.651A2.377,2.377,0,0,1,17.1,13.1c-1.5.4-7.5.4-7.5.4s-6,0-7.5-.4A2.377,2.377,0,0,1,.4,11.415,25.308,25.308,0,0,1,0,6.764,25.308,25.308,0,0,1,.4,2.112,2.413,2.413,0,0,1,2.1.4C3.6,0,9.6,0,9.6,0s6,0,7.5.4a2.412,2.412,0,0,1,1.7,1.708ZM7.636,9.618l5.018-2.855L7.636,3.909v5.71Z" transform="translate(2.4 4.801)" fill="#1f1f1f"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.2" height="15.594" viewBox="0 0 19.2 15.594">
                    <g id="twitter" transform="translate(-2.4 -4.801)">
                        <path id="Vector" d="M17.226,3.886c.012.171.012.341.012.512a11.119,11.119,0,0,1-11.2,11.2A11.12,11.12,0,0,1,0,13.827a8.139,8.139,0,0,0,.95.049,7.881,7.881,0,0,0,4.885-1.681A3.942,3.942,0,0,1,2.156,9.466a4.962,4.962,0,0,0,.743.061,4.162,4.162,0,0,0,1.036-.134A3.936,3.936,0,0,1,.78,5.531V5.482a3.963,3.963,0,0,0,1.779.5A3.941,3.941,0,0,1,1.34.719,11.185,11.185,0,0,0,9.454,4.837a4.442,4.442,0,0,1-.1-.9,3.939,3.939,0,0,1,6.81-2.692,7.747,7.747,0,0,0,2.5-.95,3.924,3.924,0,0,1-1.73,2.169A7.889,7.889,0,0,0,19.2,1.852a8.459,8.459,0,0,1-1.974,2.034Z" transform="translate(2.4 4.801)" fill="#1f1f1f"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.772" height="19.2" viewBox="0 0 14.772 19.2">
                    <g id="pinterest-p" transform="translate(-4.801 -2.4)">
                        <path id="Vector" d="M14.772,6.313c0,3.589-1.835,7.571-5.92,7.571A3.12,3.12,0,0,1,6.186,12.5c-.877,3.474-.808,3.993-2.747,6.647-.2.073-.135.088-.265-.058C3.1,18.361,3,17.646,3,16.919c0-2.354,1.085-5.759,1.616-8.044a4.519,4.519,0,0,1-.369-1.95c0-3.077,3.612-3.539,3.612-.992,0,1.5-1.016,2.908-1.016,4.362a1.708,1.708,0,0,0,1.777,1.685c2.654,0,3.474-3.831,3.474-5.874,0-2.735-1.939-4.224-4.559-4.224a5.2,5.2,0,0,0-5.4,5.286c0,1.489.912,2.25.912,2.608,0,.3-.219,1.362-.6,1.362C1.523,11.137,0,9.6,0,6.89,0,2.631,3.9,0,7.848,0c3.624,0,6.924,2.493,6.924,6.313Z" transform="translate(4.801 2.4)" fill="#1f1f1f"/>
                    </g>
                </svg>
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2023 Anvogue. All Rights Reserved.</p>
         <span className="Paym">Payment:</span>
        <div className="payment-methods">
            <svg id="Frame" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24">
                <rect id="Frame_Frame_Background_" data-name="Frame [Frame Background]" width="38" height="24" fill="none"/>
                <path id="Vector" d="M38,3V21a2.946,2.946,0,0,1-3,3H3a3.009,3.009,0,0,1-3-3V3A2.946,2.946,0,0,1,3,0H35A3.009,3.009,0,0,1,38,3Z" fill="#1f1f1f" opacity="0.07"/>
                <path id="Vector-2" data-name="Vector" d="M34,0a2.006,2.006,0,0,1,2,2V20a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z" transform="translate(1 1)" fill="#fff"/>
                <path id="Vector-3" data-name="Vector" d="M23.3,2.1H23a13.079,13.079,0,0,0-1,3h1.9A22.11,22.11,0,0,0,23.3,2.1ZM26.2,8H24.5c-.1,0-.1,0-.2-.1L24.1,7,24,6.8H21.6c-.1,0-.2,0-.2.2l-.3.9A.1.1,0,0,1,21,8H18.9l.2-.5L22,.7c0-.5.3-.7.8-.7h1.5c.1,0,.2,0,.2.2l1.4,6.5a4.253,4.253,0,0,1,.2,1.1c.1.1.1.1.1.2ZM12.8,7.7l.4-1.8a.349.349,0,0,1,.2.1,3.948,3.948,0,0,0,2.1.4,1.854,1.854,0,0,0,.7-.2c.5-.2.5-.7.1-1.1a5.582,5.582,0,0,0-.8-.5,4.129,4.129,0,0,1-1.1-.7A2.043,2.043,0,0,1,14.3.8c.6-.4.9-.8,1.7-.8a13.28,13.28,0,0,1,3.1.2h.1a10.462,10.462,0,0,1-.4,1.7,4.191,4.191,0,0,0-1.5-.4,2.769,2.769,0,0,0-.9.1.52.52,0,0,0-.4.2.483.483,0,0,0,0,.7l.5.4a10.908,10.908,0,0,1,1.1.6,2.208,2.208,0,0,1,1.1,1.4,2.148,2.148,0,0,1-.9,2.3,1.816,1.816,0,0,1-1.4.6A11.689,11.689,0,0,1,13,7.6c-.1.2-.1.2-.2.1ZM9.3,8a4.069,4.069,0,0,1,.2-1c.5-2.2,1-4.5,1.4-6.7.1-.2.1-.3.3-.3H13a30.054,30.054,0,0,1-.7,3.2c-.3,1.5-.6,3-1,4.5,0,.2-.1.2-.3.2M0,.2C0,.1.2,0,.3,0H3.7a.974.974,0,0,1,1,.8l.9,4.4c0,.1,0,.1.1.2a.1.1,0,0,1,.1-.1L7.9.2C7.8.1,7.9,0,8,0h2.1c0,.1,0,.1-.1.2L6.9,7.5c-.1.2-.1.3-.2.4s-.3,0-.5,0H4.7c-.1,0-.2,0-.2-.2L2.9,1.5A2.034,2.034,0,0,0,2,.9,6.656,6.656,0,0,0,.1.4Z" transform="translate(5 8)" fill="#142688"/>
            </svg>
            <svg id="Frame" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24">
                <rect id="Frame_Frame_Background_" data-name="Frame [Frame Background]" width="38" height="24" fill="none"/>
                <path id="Vector" d="M38,3V21a2.946,2.946,0,0,1-3,3H3a3.009,3.009,0,0,1-3-3V3A2.946,2.946,0,0,1,3,0H35A3.009,3.009,0,0,1,38,3Z" fill="#1f1f1f" opacity="0.07"/>
                <path id="Vector-2" data-name="Vector" d="M34,0a2.006,2.006,0,0,1,2,2V20a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z" transform="translate(1 1)" fill="#fff"/>
                <path id="Vector-3" data-name="Vector" d="M14,7A7,7,0,1,1,7,0,7,7,0,0,1,14,7Z" transform="translate(8 5)" fill="#eb001b"/>
                <path id="Vector-4" data-name="Vector" d="M14,7A7,7,0,1,1,7,0,7,7,0,0,1,14,7Z" transform="translate(16 5)" fill="#f79e1b"/>
                <path id="Vector-5" data-name="Vector" d="M3,11.4A6.963,6.963,0,0,1,0,5.7,7.1,7.1,0,0,1,3,0,6.827,6.827,0,0,1,6,5.7,6.827,6.827,0,0,1,3,11.4Z" transform="translate(16 6.301)" fill="#ff5f00"/>
            </svg>
            <svg id="Frame" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24">
                <rect id="Frame_Frame_Background_" data-name="Frame [Frame Background]" width="38" height="24" fill="none"/>
                <g id="Group">
                    <path id="Vector" d="M38,3V21a2.946,2.946,0,0,1-3,3H3a3.009,3.009,0,0,1-3-3V3A2.946,2.946,0,0,1,3,0H35A3.009,3.009,0,0,1,38,3Z" fill="#1f1f1f" opacity="0.07"/>
                    <path id="Vector-2" data-name="Vector" d="M34,0a2.006,2.006,0,0,1,2,2V20a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z" transform="translate(1 1)" fill="#006fcf"/>
                    <path id="Vector-3" data-name="Vector" d="M4.971,2.268l.774,1.876H4.2Zm16.081-.78,2.077,2.34L21.052,6.073V5.334H18.075V4.412H21V3.173H18.069V2.346h2.977ZM6.983.006h3.995l.887,1.935L12.687,0h10.37l1.078,1.19L25.25,0h4.763L26.494,3.852,29.977,7.68H25.143L24.065,6.49,22.94,7.68H6.03L5.536,6.49H4.406L3.911,7.68H0L3.286,0h3.43Zm8.663,1.078H13.407l-1.5,3.536L10.282,1.084H8.06v4.81L6,1.084H4.007L1.625,6.6H3.18l.494-1.19h2.6L6.764,6.6h2.72V2.661L11.235,6.6h1.19l1.74-3.929V6.6h1.458l.024-5.52Zm9.34,2.768,2.531-2.768H25.695l-1.6,1.726L22.546,1.084H16.652V6.6h5.81l1.614-1.738L25.624,6.6H27.5Z" transform="translate(4 8)" fill="#fff"/>
                </g>
            </svg>
            <svg id="Frame" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24">
                <rect id="Frame_Frame_Background_" data-name="Frame [Frame Background]" width="38" height="24" fill="none"/>
                <path id="Vector" d="M38,3V21a2.946,2.946,0,0,1-3,3H3a3.009,3.009,0,0,1-3-3V3A2.946,2.946,0,0,1,3,0H35A3.009,3.009,0,0,1,38,3Z" fill="#1f1f1f" opacity="0.07"/>
                <path id="Vector-2" data-name="Vector" d="M34,0a2.006,2.006,0,0,1,2,2V20a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z" transform="translate(1 1)" fill="#fff"/>
                <path id="Vector-3" data-name="Vector" d="M5.2,5.4,3.4,7.6,3,11H.3c-.2,0-.3-.2-.3-.4L1.5.5A.634.634,0,0,1,2.1,0H6.2A3.994,3.994,0,0,1,9.3,1a2.31,2.31,0,0,1,.6,2.3Z" transform="translate(14 5)" fill="#003087"/>
                <path id="Vector-4" data-name="Vector" d="M7.8.8a2.734,2.734,0,0,1,.4,2.4c-.4,2.4-2,3.2-4.1,3.2H3.8c-.2,0-.5.2-.5.4v.1L2.9,9.3v.1a.458.458,0,0,1-.5.4H.3c-.2,0-.3-.2-.3-.4l.2-1L.8,4.5A.634.634,0,0,1,1.4,4H2.5C4.9,4,6.6,3,7.1.2L7.3,0a1.009,1.009,0,0,1,.5.8Z" transform="translate(16.6 8.301)" fill="#3086c8"/>
                <path id="Vector-5" data-name="Vector" d="M6,.3a.764.764,0,0,1,.5.2V.7C6,3.5,4.4,4.5,1.9,4.5H.6A.56.56,0,0,0,0,5V4.9L.7.5C.7.3.8.2,1,.1c0-.1.1-.1.2-.1h3A3.75,3.75,0,0,1,5.3.1a.367.367,0,0,0,.3.1.367.367,0,0,1,.3.1Z" transform="translate(17.4 7.801)" fill="#012169"/>
            </svg>
            <svg id="Frame" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24">
                <rect id="Frame_Frame_Background_" data-name="Frame [Frame Background]" width="38" height="24" fill="none"/>
                <path id="Vector" d="M38,3V21a2.946,2.946,0,0,1-3,3H3a3.009,3.009,0,0,1-3-3V3A2.946,2.946,0,0,1,3,0H35A3.009,3.009,0,0,1,38,3Z" fill="#1f1f1f" opacity="0.07"/>
                <path id="Vector-2" data-name="Vector" d="M34,0a2.006,2.006,0,0,1,2,2V20a2.006,2.006,0,0,1-2,2H2a2.006,2.006,0,0,1-2-2V2A2.006,2.006,0,0,1,2,0Z" transform="translate(1 1)" fill="#fff"/>
                <path id="Vector-3" data-name="Vector" d="M3.012,7v3.7c0,.3-.2.3-.5.2a4.5,4.5,0,0,1-2.3-5.4,3.907,3.907,0,0,1,2.3-2.4c.4-.2.5-.1.5.2Zm2,0V3.3c0-.3,0-.3.3-.2a4.259,4.259,0,0,1,2.4,5.4,3.907,3.907,0,0,1-2.3,2.4c-.4.2-.4.1-.4-.2Zm14,0a6.852,6.852,0,0,1-6.8,7h-8.2a6.852,6.852,0,0,0,6.8-7,6.852,6.852,0,0,0-6.8-7h8.2A6.852,6.852,0,0,1,19.012,7Z" transform="translate(8.988 5)" fill="#3086c8"/>
            </svg>
            <img src={discofoto} alt=""  className="dsconect"/>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;
