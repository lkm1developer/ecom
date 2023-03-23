import React from 'react';

import './cart-dropdown.styles.scss';
import CartItem from './../cart-item/cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from './../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useNavigate } from 'react-router';

const Cart = () => {
  const navigate =useNavigate()
  const dispatch =useDispatch()
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
    <CustomButton onClick={() => {
      
        dispatch(toggleCartHidden());
        navigate('/checkout');
      }
    } type='button'>GO TO CHECKOUT</CustomButton>
    
  </div>
)}

export default Cart;