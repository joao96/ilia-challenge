import { render, waitFor } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import NavbarItem from '../../components/Navbar/components/NavbarItem';

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

describe('NavBarItem Component', () => {
  const mockOnClick = jest.fn();

  it('should render a NavbarItem', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavbarItem
          href="/"
          text="fake-item"
          click={mockOnClick}
          key={'test'}
        />
      </ThemeProvider>,
    );

    const item = getByText('fake-item');

    expect(item).toBeInTheDocument();
  });

  it('should handle click on NavBarItem', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <NavbarItem
          href="/"
          text="fake-item"
          click={mockOnClick}
          key={'test'}
        />
      </ThemeProvider>,
    );

    const itemLink = getByText('fake-item');
    userEvent.click(itemLink);

    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
