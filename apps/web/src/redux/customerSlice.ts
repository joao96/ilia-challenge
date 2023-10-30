import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { Order } from '../shared/modules/Order';

export interface CustomerState {
  data: { name?: string; email?: string; orders?: Order[] };
}

const initialState: CustomerState = {
  data: {},
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCustomer } = customerSlice.actions;
export const getCustomer = (state: AppState) => state.customer.data;

export default customerSlice.reducer;
