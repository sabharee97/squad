// src/Header.js

import React from 'react';
import "../style.css";

const Header = ({instagramProfileLink}) => {
  const openInstagram = () => {
    window.open(instagramProfileLink, '_blank')
  };

  return (
    <div className="header-container">
      <img
        src="/assets/images/logo1.png"
        alt="squad..."
        className="centered-image"
        onClick={openInstagram}
      />
      <h1 className='squadtext'>Squad...</h1>
      <p  className='smallText squadtext'><u>Under development </u></p>
    </div>
  );
};
 
export default Header;
