import { wrapper } from '../redux/store';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global.styles';
import { AppPropsWithLayout } from '../shared/types/page';
import { MyToaster } from '../components/Toaster';
import { Provider } from 'react-redux';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

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

function App({ Component, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {getLayout(
          <main className={roboto.className}>
            <Component {...props.pageProps} />
          </main>,
        )}
        <GlobalStyle />
        <MyToaster />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
