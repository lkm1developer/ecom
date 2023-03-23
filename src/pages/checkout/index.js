import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const {cartItems, total}=useSelector((s)=>s.cart)
  return(
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span>Product</span>
      </div>
      <div className="header-blocks">
        <span>Description</span>
      </div>
      <div className="header-blocks">
        <span>Quantity</span>
      </div>
      <div className="header-blocks">
        <span>Price</span>
      </div>
      <div className="header-blocks">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    }

    <div className="total">
      <span>TOTAL: ${ total }</span>
    </div>
   
  </div>
)};

export default CheckoutPage