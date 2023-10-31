import { render, waitFor } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import { Product } from '../../shared/types';
import { CartList } from '../../components/Cart';

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

describe('CartList Component', () => {
  const mockProducts: Product[] = [
    {
      id: 123,
      category: 'fake-category',
      description: 'fake-description',
      image: 'fake-image',
      price: 10,
      quantity: 1,
      title: 'fake-title',
    },
  ];

  const mockAdd = jest.fn();
  const mockRemove = jest.fn();
  const mockDeleteItem = jest.fn();
  const mockPurchase = jest.fn();

  it('should render CartList with products', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CartList
          cart={mockProducts}
          add={mockAdd}
          remove={mockRemove}
          deleteItem={mockDeleteItem}
          purchase={mockPurchase}
        />
      </ThemeProvider>,
    );

    const titleElement = getByText('fake-title');

    expect(titleElement).toBeInTheDocument();
  });

  it('should handle add, remove, deleteItem and purchase actions', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <CartList
          cart={mockProducts}
          add={mockAdd}
          remove={mockRemove}
          deleteItem={mockDeleteItem}
          purchase={mockPurchase}
        />
      </ThemeProvider>,
    );

    const addButton = await findByTestId('add-button');
    userEvent.click(addButton);

    const removeButton = await findByTestId('remove-button');
    userEvent.click(removeButton);

    const deleteButton = await findByTestId('delete-button');
    userEvent.click(deleteButton);

    const purchaseButton = await findByTestId('purchase-button');
    userEvent.click(purchaseButton);

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalled();
      expect(mockRemove).toHaveBeenCalled();
      expect(mockDeleteItem).toHaveBeenCalled();
      expect(mockPurchase).toHaveBeenCalled();
    });
  });

  it('should render a CartList without products', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <CartList
          cart={[]}
          add={mockAdd}
          remove={mockRemove}
          deleteItem={mockDeleteItem}
          purchase={mockPurchase}
        />
      </ThemeProvider>,
    );

    expect(queryByTestId('table-row')).not.toBeInTheDocument();
  });
});
