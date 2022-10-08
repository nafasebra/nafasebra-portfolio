import { useState } from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import SplashScreen from "../components/common/SplashScreen";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashScreen />
      <Component {...pageProps} />
    </>
  );
}

export default App;
