import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Product } from '../../shared/types';
import { CardList } from '../../components/CardList';
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

describe('CardList Component', () => {
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
    {
      id: 456,
      category: 'fake-category-2',
      description: 'fake-description-2',
      image: 'fake-image-2',
      price: 15,
      quantity: 2,
      title: 'fake-title-2',
    },
  ];

  it('should render a CardList with products', () => {
    const { getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <CardList products={mockProducts} />
      </ThemeProvider>,
    );

    const titleElement1 = getByText('fake-title');
    const priceElement1 = getByText('R$ 10,00');
    const stockElement1 = getByText('In Stock: 1');

    expect(titleElement1).toBeInTheDocument();
    expect(priceElement1).toBeInTheDocument();
    expect(stockElement1).toBeInTheDocument();

    const titleElement2 = getByText('fake-title-2');
    const priceElement2 = getByText('R$ 15,00');
    const stockElement2 = getByText('In Stock: 2');

    expect(titleElement2).toBeInTheDocument();
    expect(priceElement2).toBeInTheDocument();
    expect(stockElement2).toBeInTheDocument();
  });

  it('should render a CardList without products', () => {
    const { queryByTestId } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <CardList products={[]} />
      </ThemeProvider>,
    );

    expect(queryByTestId('card-component')).not.toBeInTheDocument();
  });
});
