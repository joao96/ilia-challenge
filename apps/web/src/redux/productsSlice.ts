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
      state.data = action.payload;
    },
  },
});
export const { setProducts } = productsSlice.actions;
export const getProducts = (state: AppState) => state.products.data;

export default productsSlice.reducer;
