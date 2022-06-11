/**
 * START
 */

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import smoothscroll from 'smoothscroll-polyfill';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import theme from '../themes';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <title>NEXDI-WEB</title>
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
};

CustomApp.getInitialProps = async (appContext) => {
  const vmInitialData = {};
  let appProps;

  try {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    appProps = await App.getInitialProps(appContext);
  } catch (err) {
    appProps.error = err;
  }

  return {
    ...appProps,
    pageProps: appProps.pageProps,
    initialData: vmInitialData,
  };
};

export default appWithTranslation(CustomApp);
