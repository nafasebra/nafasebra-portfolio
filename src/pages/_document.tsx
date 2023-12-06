import React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Document from "next/document";
import SplashScreen from "../components/common/SplashScreen";

function _document() {
  return (
    <Html lang="IR-fa" dir="rtl">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        {/* <meta property="og:image"  content="http://···" /> */}
        <meta property='og:title'  content='nafasebrahimi' />
        <meta property='og:site_name' content='Nafas Ebrahimi website' />
        <meta property='og:type' content='website' />
        <meta
          name="keywords"
          content="nafasebra, nafasebrahimi, nafas ebrahimi, Nafas Ebrahimi, Frontend, Front-end, frontend dev, frontend developer, نفس ابراهیمی, برنامه نویس, برنامه نویس فرانت اند, فرانت اند, برنامه نویسی سمت کلاینت"
        />
        <meta
          name="description"
          content="سلام به همگی. بنده نفس ابراهیمی هستم و درحوزه برنامه نویسی فرانت اند کار میکنم. خوشحال میشم یک سری به سایتم بزنی. :)"
        />
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
