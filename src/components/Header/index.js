import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';

const Header = () => {
  const { hidden } = useSelector((state) => state.cart)
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">Home</Link>
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        <CartIcon />
      </div>
      {
        hidden ?
          null :
          <CartDropdown />
      }
    </div>
  )
};





export default Header;