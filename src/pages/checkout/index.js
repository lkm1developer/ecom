import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component';
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
      <div>TOTAL: $ <span data-testid="cart-total">{ total }</span></div>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
   
  </div>
)};

export default CheckoutPage