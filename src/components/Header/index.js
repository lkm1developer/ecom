import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/user.actions';

const Header = () => {
  const { hidden } = useSelector((state) => state.cart)
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleLogout =()=>{
    dispatch(logout())
  }
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
      {currentUser ? <h5>Hi, {currentUser.name}</h5>: null}
        <Link className="option" to="/">Home</Link>
        <Link className="option" to="/shop">SHOP</Link>
        {
          currentUser ? <Link className="option" to="#" onClick={handleLogout}>Sign Out</Link>: <Link className="option" to="/signin">Sign In</Link>
        }
       
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