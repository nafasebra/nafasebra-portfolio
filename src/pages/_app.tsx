import { useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(typeof window !== undefined) {
      const loading = document.getElementById('splashScreen');
      if(loading) {
        loading.style.opacity = "0";
        loading.style.visibility = "hidden";
        loading.style.zIndex = "-100";
      }
    }
  }, []);


  return <Component {...pageProps} />;
}

export default App;
