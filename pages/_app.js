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
    <Component {...pageProps} />
  </>)
}

export default MyApp
