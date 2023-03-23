import React from 'react';

import { toggleCartHidden } from './../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  const {itemCount}=useSelector((state)=>state.cart);
  const dispatch =useDispatch();

  const toggleCartHiddenHandler =() =>{
    dispatch(toggleCartHidden())
  }

  return(
  <div className="cart-icon" onClick={toggleCartHiddenHandler} data-testid="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ itemCount }</span>
  </div>
)}

export default CartIcon;