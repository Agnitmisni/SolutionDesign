import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';  
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar-header">
        <div className="navba-text">
            <p className="anvo">Anvogue</p>
            <ul className="tex1">
                <li> 
                    <Link to="/">FEATURES</Link>
                </li>
                <li className="tex1">SHOP</li>
                <li className="tex1">PRODUCT</li>
                <li className="tex1">BLOG</li>
                <li> 
                  <Link  to="/pages">PAGES</Link>
                </li>
            </ul>
        </div>
        <div className="tex2">
            <FontAwesomeIcon className="magnify-icon" icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUserRegular} />
            <FontAwesomeIcon icon={faHeart} />
            <div className="icon-wrapper">
                <FontAwesomeIcon icon={faShoppingBag} />
                <div className="notification-bubble">1</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;