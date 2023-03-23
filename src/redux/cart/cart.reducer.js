import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart,itemCount } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  itemCount:0
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      const cartItems =addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems,
        itemCount:itemCount(cartItems)
      };
    case CartActionTypes.REMOVE_ITEM:
      const items =removeItemFromCart(state.cartItems, action.payload)
      return {
        ...state,
        cartItems:items ,
        itemCount:itemCount(items)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      const cartItemss=state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      return {
        ...state,
        cartItems: cartItemss,
        itemCount:itemCount(cartItemss)
      };
    default:
      return state;
  }
}

export default cartReducer;