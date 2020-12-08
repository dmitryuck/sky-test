import React from 'react';
import store from '../redux/store';

import '../public/css/reset.css';
import '../public/css/main.css';


const MyApp = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
}

export default store.withRedux(MyApp);