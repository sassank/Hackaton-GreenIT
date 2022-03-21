import React from 'react';
import './index.css';

const Header = () => (
  <div className="header">
    <img className="logo" src={process.env.PUBLIC_URL+"INR-logo-s.jpg"} alt='logo' />
    <h1 className='title'>L'indice de fragilité numérique</h1>
  </div>
)
export default Header;