import { customerSlice } from './customerSlice';

export const saveCustomerToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === customerSlice.actions.setCustomer.type ||
    action.type === customerSlice.actions.emptyCustomer.type
  ) {
    const customerState = store.getState()[customerSlice.name];

    localStorage.setItem('customer', JSON.stringify(customerState));
  }

  return result;
};

export const loadCustomerFromLocalStorage = () => {
  try {
    const customerState = localStorage.getItem('customer');
    if (customerState) {
      const parsedCustomerState = JSON.parse(customerState);
      return parsedCustomerState;
    }
  } catch (error) {}
  return null;
};
