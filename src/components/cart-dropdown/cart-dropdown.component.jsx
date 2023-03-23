import React from 'react';

import './cart-dropdown.styles.scss';
import CartItem from './../cart-item/cart-item.component';
import { useSelector } from 'react-redux';

const Cart = () => {
  const {cartItems}=useSelector((state)=>state.cart);
  return(
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
        <span className="empty-message">Your cart is empty.</span>
      }
    </div>
    
  </div>
)}

export default Cart;