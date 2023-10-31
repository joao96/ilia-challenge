import { DefaultTheme, ThemeProvider } from 'styled-components';
import Home from '../../pages';
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

describe('Index Page', () => {
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

  it('should render all Home components', () => {
    const { getByText, getByTestId } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );

    const welcomeMessage = getByText('Welcome to FashionHub');
    const newHereLoginButton = getByTestId('toggle-button');

    expect(welcomeMessage).toBeInTheDocument();
    expect(newHereLoginButton).toBeInTheDocument();
  });
});
