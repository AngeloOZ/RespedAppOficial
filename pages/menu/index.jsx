import { Box, Typography } from "@mui/material";

import { useProducts } from "../../Hooks";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";
import { ProductPlaceHolder } from "../../components/products/ProductPlaceHolder";

export default function Index() {
  const { products, isLoading } = useProducts();

  return (
    <ShopLayout title="Todos los productos">
      <Box textAlign="center" component="div" paddingY={2}>
        <Typography variant="h1" component="h1" className="toCapitalize">
          Todos <span className="toLowerCase">los</span> productos
        </Typography>
      </Box>
      {isLoading ? <ProductPlaceHolder /> : <ProductList products={products || []} />}
    </ShopLayout>
  );
}

export const getServerSideProps = async ({ req }) => {

  return {
    props: {},
  };
};