// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/img/icons/site.webmanifest" />
        <meta name="theme-color" content="#F3F4F6" />
        <meta name="msapplication-TileColor" content="#F3F4F6" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/assets/css/app.css" />
        <link rel="stylesheet" href="/assets/css/pages/contact.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
