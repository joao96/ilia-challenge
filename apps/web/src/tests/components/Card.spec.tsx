import { DefaultTheme, ThemeProvider } from 'styled-components';

import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import { Product } from '../../shared/types';
import { Card } from '../../components/Card';
import { renderWithProviders } from '../../tests/store';

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

describe('Card Component', () => {
  let mockProduct: Product;
  const addToCart = jest.fn();
  const amountInCart = jest.fn(() => 0);

  beforeAll(() => {
    mockProduct = {
      id: 123,
      category: 'fake-category',
      description: 'fake-description',
      image: 'fake-image',
      price: 10,
      quantity: 1,
      title: 'fake-title',
    };
  });

  it('should render a Card', () => {
    const { getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Card
          product={mockProduct}
          addToCart={addToCart}
          amountInCart={amountInCart}
        />
      </ThemeProvider>,
    );

    const titleElement = getByText('fake-title');
    const priceElement = getByText('R$ 10,00');
    const stockElement = getByText('In Stock: 1');

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(stockElement).toBeInTheDocument();
  });

  it('should call handleAddToCart', async () => {
    const { getByRole } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Card
          product={mockProduct}
          addToCart={addToCart}
          amountInCart={amountInCart}
        />
      </ThemeProvider>,
    );
    const addToCartButton = getByRole('button', { name: /ADD TO CART/i });
    userEvent.click(addToCartButton);

    await waitFor(() => {
      expect(addToCart).toHaveBeenCalled();
    });
  });
});
