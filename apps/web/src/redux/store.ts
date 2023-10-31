import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';
import { createWrapper } from 'next-redux-wrapper';
import { productsSlice } from './productsSlice';
import { customerSlice, initialCustomerState } from './customerSlice';
import {
  loadCustomerFromLocalStorage,
  saveCustomerToLocalStorage,
} from './middleware';

const customerFromStorage = loadCustomerFromLocalStorage();

export const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
      [productsSlice.name]: productsSlice.reducer,
      [customerSlice.name]: customerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(saveCustomerToLocalStorage),
    preloadedState: {
      [customerSlice.name]: customerFromStorage || initialCustomerState,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore);
