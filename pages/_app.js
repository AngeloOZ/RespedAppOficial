import { useEffect } from "react";
import axios from 'axios';
import Cookies from "js-cookie";

import { AuthProvider, CartProvider } from "../context";

import '../styles/globals.css';
import "../styles/globalsAdmin.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  if (Cookies.get('SESSION_ID')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('SESSION_ID')}`;
  }

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp
