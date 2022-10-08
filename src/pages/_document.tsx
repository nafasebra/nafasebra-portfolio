import React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Document from 'next/document'
import SplashScreen from "../components/common/SplashScreen";

function _document() {
  return (
    <Html lang="IR-fa" dir="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// enable server-side rendering
Document.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return initialProps;
};

export default _document;
