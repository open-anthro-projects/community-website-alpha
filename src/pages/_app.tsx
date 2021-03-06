import React from 'react';
import AppLayout from '../../src/components/layouts/applayout';
import PropTypes from 'prop-types';
import { AppTheme } from '../components/base/theme'
import Head from '../components/base/head'
import { ThemeProvider } from '@material-ui/core/styles';
import DefaultLayout from '../components/layouts/defaultlayout';
import { AppProps } from 'next/app';
//@ts-ignore
import { Provider } from 'next-auth/client';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  const [appTheme, toggleDarkTheme] = AppTheme();
  //@ts-ignore
  const PageLayout = Component.Layout || DefaultLayout;


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);


  return (
    <CookiesProvider>
      <ThemeProvider theme={appTheme}>
        <Head theme={appTheme}></Head>
        <Provider session={pageProps.session}>
          <AppLayout themeSwitch={toggleDarkTheme}>
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </AppLayout>
        </Provider>
      </ThemeProvider>
    </CookiesProvider>
  );

}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

/*export default MyApp;

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. *//*}
<CssBaseline />
<Component {...pageProps} />
</ThemeProvider>
</React.Fragment>
);
}

MyApp.propTypes = {
Component: PropTypes.elementType.isRequired,
pageProps: PropTypes.object.isRequired,
};*/