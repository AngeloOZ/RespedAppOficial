import { useEffect } from "react";

import axios from 'axios';
import { SWRConfig } from "swr";

import '../styles/globals.css';
import "../styles/globalsAdmin.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = 'https://respedapp.onrender.com/api';

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp
