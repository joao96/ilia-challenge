import { wrapper } from '../redux/store';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global.styles';
import { AppPropsWithLayout } from '../shared/types/page';
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

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
export default wrapper.withRedux(App);
