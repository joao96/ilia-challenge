import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';
import { createWrapper } from 'next-redux-wrapper';
import { productsSlice } from './productsSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
      [productsSlice.name]: productsSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(makeStore);