import { DefaultTheme, ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../tests/store';
import { Login } from '../../containers/Login';

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

describe('Login Component', () => {
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

  it('should render Login with Sign In', () => {
    const { getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );

    const titleElement = getByText('Sign In');

    expect(titleElement).toBeInTheDocument();
  });

  it('should toggle once - New customer?', async () => {
    const { getByTestId, getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );

    const enterButton = getByTestId('toggle-button');
    userEvent.click(enterButton);

    await waitFor(() => {
      expect(getByText('New customer?')).toBeInTheDocument();
    });
  });

  it('should toggle twice - New Here?', async () => {
    const { getByTestId, getByText } = renderWithProviders(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>,
    );

    const enterButton1 = getByTestId('toggle-button');
    userEvent.click(enterButton1);

    const enterButton2 = getByTestId('toggle-button');
    userEvent.click(enterButton2);

    await waitFor(() => {
      expect(getByText('New Here?')).toBeInTheDocument();
    });
  });
});
