import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { renderWithProviders } from '../../tests/store';
import { Navbar } from '../../components/Navbar';
import { setCustomer } from '../../redux/customerSlice';

const theme: DefaultTheme = {
  text: {
    primary: '#333333',
    secondary: '#ffffff',
  },
  button: {
    primary: '#0054a6',
    darkPrimary: '#00366c',
    secondary: '#ea4335',
  },
  main: {
    primary: '#212121',
    secondary: '#44c8f5',
  },
};

const mockCustomer = {
  name: 'Test Customer',
  email: 'test@customer.com',
};

describe('Navbar Component', () => {
  it('should render the Navbar with welcome message', async () => {
    const { store } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>,
    );

    const { dispatch } = store;
    act(() => {
      dispatch(
        setCustomer({ name: mockCustomer.name, email: mockCustomer.email }),
      );
    });

    await waitFor(() => {
      expect(screen.getByText(/Test Customer/)).toBeInTheDocument();
    });
  });
});
