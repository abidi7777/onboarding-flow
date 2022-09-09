import {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="./vercel-icon-dark.svg" type="image/svg" sizes="16x16 32x32 96x96 180x180 300x300 512x512" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
