import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../shared/types';
import { AppState } from './store';

export interface ProductsState {
  data: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  data: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      if (action.payload) {
        const withQuantity = action.payload.map((product) => ({
          ...product,
          quantity: Math.floor(Math.random() * 10) + 1,
        }));
        state.data = withQuantity;
      }
    },
  },
});
export const { setProducts } = productsSlice.actions;
export const getProducts = (state: AppState) => state.products.data;

export default productsSlice.reducer;
