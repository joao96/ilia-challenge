import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';
import { createWrapper } from 'next-redux-wrapper';
import { productsSlice } from './productsSlice';
import { customerSlice } from './customerSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
      [productsSlice.name]: productsSlice.reducer,
      [customerSlice.name]: customerSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore);
