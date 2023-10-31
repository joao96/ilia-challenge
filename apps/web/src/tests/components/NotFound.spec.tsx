import { render } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import NotFound from '../../components/NotFound';

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

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NotFound Component', () => {
  it('should render NotFound', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NotFound description="description-test" message="message-test" />
      </ThemeProvider>,
    );

    const item = getByText('description-test');

    expect(item).toBeInTheDocument();
  });
});
