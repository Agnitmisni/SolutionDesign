import React from 'react';
import './Header.css';
import Slider from '../assets/slider.png'

const Header = () => {
  return (
    <div className="Header-frist">
      <div className='head-back'>
        <img src={Slider} alt='' />
    
      </div>
    </div>
  );
}

export default Header;