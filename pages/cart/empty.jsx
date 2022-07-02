import { useState } from "react";
import NextLink from "next/link";

import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { FullScreenloader } from "../../components/Components";

const EmptyPage = () => {
  const [loader, setLoader] = useState(false);
  return (
    <ShopLayout
      title="Carrito vació"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <FullScreenloader display={loader} />
        <RemoveShoppingCartOutlined color="primary" sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito está vació</Typography>
          <NextLink href="/menu" passHref>
            <Link
              typography="h4"
              color="secondary"
              onClick={() => setLoader(true)}
            >
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
