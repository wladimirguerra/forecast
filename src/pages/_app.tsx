import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../theme/defaultTheme";
import Head from "next/head";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
