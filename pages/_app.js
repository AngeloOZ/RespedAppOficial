import Head from 'next/head';

import '../styles/globals.css';
import "../styles/globalsAdmin.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (<>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <Component {...pageProps} />
  </>)
}

export default MyApp
