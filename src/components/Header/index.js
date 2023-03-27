import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import logo from './../../assets/logo.png';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
     <img src={logo} alt="logo" width="100px" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
  </div>
  </div>
);


export default Header;