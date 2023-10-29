import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global.styles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
