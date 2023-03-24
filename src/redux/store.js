import { configureStore } from '@reduxjs/toolkit'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

export const store = configureStore({
  reducer: {
    directory: directoryReducer,
    shop: shopReducer,
    cart: cartReducer,
    user: userReducer
  }
})