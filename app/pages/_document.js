import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Welcome to the best Travel Agency in the world! The only one that can take you to Mars with an one-way trip for the promotional price of $1.5 millions" />

          <meta itemProp="name" content="Travel A: From anywhere to everywhere" />
          <meta itemProp="description" content="Welcome to the best Travel Agency in the world! The only one that can take you to Mars with an one-way trip for the promotional price of $1.5 millions" />
          <meta itemProp="image" content="https://i.imgur.com/HhQYMZq.png" />

          <meta property="og:url" content="https://www.travela.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Travel A: From anywhere to everywhere" />
          <meta property="og:description" content="Welcome to the best Travel Agency in the world! The only one that can take you to Mars with an one-way trip for the promotional price of $1.5 millions" />
          <meta property="og:image" content="https://i.imgur.com/HhQYMZq.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Travel A: From anywhere to everywhere" />
          <meta name="twitter:description" content="Welcome to the best Travel Agency in the world! The only one that can take you to Mars with an one-way trip for the promotional price of $1.5 millions" />
          <meta name="twitter:image" content="https://i.imgur.com/HhQYMZq.png" />

          <link
            rel="preload"
            href="/fonts/righteous-regular-webfont.woff2"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/montserratalternates-regular-webfont.woff2"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/robotocondensed-regular-webfont.woff2"
            as="font"
            crossOrigin=""
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

export default MyDocument;
