import NextLink from "next/link";

import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { checkout } from "../../functions";

const EmptyPage = () => {
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
        <RemoveShoppingCartOutlined color="primary" sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Su carrito está vació</Typography>
          <NextLink href="/menu" passHref>
            <Link typography="h4" color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;

export const getServerSideProps = async ({ req }) => {
  const items = checkout.getItemsCart(req);
  if(items){
    return {
      redirect: {
        destination: "/cart",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  };
};
