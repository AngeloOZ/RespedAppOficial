import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { SideMenuClient } from "../Cliente";
import { NavbarTop } from "../ComponentsAdmin/NavbarTop";
import { lightTheme2 } from "../../themes";


export const ClienteLayout = ({
  title = "Fogón de COZ",
  desc = "",
  children,
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <ThemeProvider theme={lightTheme2}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        {/* <link rel="shortcut icon" href="favicon.ico"/> */}
      </Head>
      <div className="admin-container">
        <SideMenuClient showSide={openSidebar} />
        <div className={`admin-main ${openSidebar ? "active" : ""}`}>
          <NavbarTop setOpenSidebar={setOpenSidebar} />
          <div className="container-content">{children}</div>
        </div>
      </div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </ThemeProvider>
  );
};
