import { render } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Button } from '../../components/Button';

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

describe('Button Component', () => {
  it('should render Button', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Register</Button>
      </ThemeProvider>,
    );

    expect(getByText('Register')).toBeInTheDocument();
  });

  it('should render Button with outlined style', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button isOutlined>Register</Button>
      </ThemeProvider>,
    );

    expect(getByText('Register')).toHaveAttribute(
      'class',
      expect.stringMatching(/outlined/),
    );
  });

  it('should render Button with cancel style', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button isCancel>Register</Button>
      </ThemeProvider>,
    );

    expect(getByText('Register')).toHaveAttribute(
      'class',
      expect.stringMatching(/cancel/),
    );
  });

  it('should render Button with terminate style', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button isTerminate>Register</Button>
      </ThemeProvider>,
    );

    expect(getByText('Register')).toHaveAttribute(
      'class',
      expect.stringMatching(/terminate/),
    );
  });
});
