import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

// Action
export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products/');
  return response.json();
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      console.log('Error', action.payload);
    });
  },
});

export const getProducts = (state: AppState) => state.products.data;

export default productsSlice.reducer;
