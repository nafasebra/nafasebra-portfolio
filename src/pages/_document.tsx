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

function _document() {
  return (
    <Html lang="IR-fa" dir="rtl">
      <Head>
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <body>
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
