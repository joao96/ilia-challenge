import { DefaultTheme, ThemeProvider } from 'styled-components';
import { renderWithProviders } from '../../tests/store';
import Orders from '../../pages/orders';

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

describe('Orders Page', () => {
  beforeAll(() => {
    const push = jest.fn();
    const mockUseRouter = {
      push,
    };
    jest.spyOn(mockUseRouter, 'push');
    jest
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .spyOn(require('next/router'), 'useRouter')
      .mockReturnValue(mockUseRouter);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render all Orders components', () => {
    const { getByTestId } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Orders />
      </ThemeProvider>,
    );

    const orderListComponent = getByTestId('order-list-component');

    expect(orderListComponent).toBeInTheDocument();
  });
});
