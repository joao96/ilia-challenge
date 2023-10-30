import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { Product } from '../shared/types';

export interface CartState {
  itemsInCart: Product[];
}

const initialState: CartState = {
  itemsInCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.itemsInCart.push(action.payload);
    },
    removeFromCart(state, action) {
      const itemIndex = state.itemsInCart.findIndex(
        (item) => (item.id = action.payload),
      );
      if (itemIndex >= 0) {
        state.itemsInCart.splice(itemIndex, 1);
      }
    },
    deleteFromCart(state, action) {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload,
      );
    },
    emptyCart(state) {
      state.itemsInCart = [];
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, emptyCart } =
  cartSlice.actions;
export const getItemsInCart = (state: AppState) => state.cart.itemsInCart;

export default cartSlice.reducer;
