import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from './../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch =useDispatch()
  const {name, imageUrl, price, quantity} = cartItem;

  const removeItemHandler =()=>{
    dispatch(removeItem(cartItem))
  }
  const addItemHandler =()=>{
    dispatch(addItem(cartItem))
  }
  const clearItemHandler =()=>{
    dispatch(clearItemFromCart(cartItem))
  }
  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemHandler(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemHandler(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemHandler(cartItem)} >&#10005;</div>
    </div>
  );
}

export default CheckoutItem;