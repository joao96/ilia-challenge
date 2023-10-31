import { DefaultTheme, ThemeProvider } from 'styled-components';
import { renderWithProviders } from '../../tests/store';
import { Order } from '../../shared/modules/Order';
import { OrderList } from '../../components/OrderList';

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

describe('OrderList Component', () => {
  const mockOrdes: Order[] = [
    {
      props: {
        id: 'fb7e41e9-1b2e-4d63-9b93-8d7ae96ee491',
        createdAt: '2023-10-28T21:18:05.273Z',
        items: ['fake-item-1', 'fake-item-2'],
        paymentMethod: 'credit_card',
        shippingAddress: 'fake-address',
        status: 'pending',
        value: 50,
      },
    },
  ];

  it('should render a OrderList with orders', () => {
    const { getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <OrderList orders={mockOrdes} />
      </ThemeProvider>,
    );

    const titleElement = getByText('credit_card');
    const priceElement = getByText('fake-address');
    const stockElement = getByText('pending');

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(stockElement).toBeInTheDocument();
  });

  it('should render a OrderList without orders', () => {
    const { queryByTestId, getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <OrderList orders={[]} />
      </ThemeProvider>,
    );

    expect(queryByTestId('order-component')).not.toBeInTheDocument();

    const notFound = getByText('No orders found.');

    expect(notFound).toBeInTheDocument();
  });
});
