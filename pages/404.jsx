import { useState } from "react";
import NextLink from "next/link";
import Head from "next/head";

import CloudOffIcon from "@mui/icons-material/CloudOff";
import { Box, Button, Link, Typography } from "@mui/material";
import { FullScreenloader } from "../components/Components";
import { MaterialUILayout } from "../components/layouts/MaterialUILayout";
import css from "../styles/LoadeerPage.module.scss";

export default function PageError404() {
  const [loader, setLoader] = useState(false);
  return (
    <MaterialUILayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ flexDirection: { xs: "column", sm: "row" }, background: "#222" }}
      >
        <Head>
          <title>Página no encontrada - 404</title>
        </Head>
        <FullScreenloader display={loader} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            component={"div"}
            display="flex"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center" },
            }}
          >
            <span className={css.loader}></span>
            <Typography color="#fff" textAlign={"center"} mt={1}>
              Página no encontrada
              <Typography
                typography="h4"
                color="#fff"
                fontSize={50}
                sx={{ textDecoration: "none" }}
                onClick={() => setLoader(true)}
              >
                404
              </Typography>
            </Typography>
          </Box>
          <NextLink href="/" passHref>
            <Link>
              <Button color="secondary" size="large" sx={{ marginTop: "15px" }}>
                Regresar al inicio
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Box>
    </MaterialUILayout>
  );
}
