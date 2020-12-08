import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextSite extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <title>Test</title>

        <Head>
          <meta name='description' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <meta name='theme-color' content='#fafafa' />

          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
            crossOrigin='anonymous'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextSite;
