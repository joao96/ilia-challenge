import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { Order } from '../shared/modules/Order';

export interface CustomerState {
  data: { name?: string; email?: string; orders?: Order[] };
}

export const initialCustomerState: CustomerState = {
  data: { orders: [] },
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState: initialCustomerState,
  reducers: {
    setCustomer(state, action) {
      state.data = action.payload;
    },
    setOrders(state, action) {
      state.data.orders.push(action.payload);
    },
    emptyCustomer(state) {
      state.data = { orders: [] };
    },
  },
});

export const { setCustomer, setOrders, emptyCustomer } = customerSlice.actions;
export const getCustomer = (state: AppState) => state.customer.data;

export default customerSlice.reducer;
