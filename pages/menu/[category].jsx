import { useRouter } from "next/router";

import { Box, Typography } from "@mui/material";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { useProducts } from "../../Hooks";
import { ProductPlaceHolder } from "../../components/products/ProductPlaceHolder";
import { ProductList } from "../../components/products";

export default function MenuIndex() {
  const { query } = useRouter();
  const { products, isLoading } = useProducts(query.category);
  return (
    <ShopLayout title={query.name}>
      <Box textAlign="center" component="div" paddingY={2}>
        <Typography variant="h1" component="h1" textTransform="capitalize">
          Categoria <span className="toLowerCase">de</span> {query.name}
        </Typography>
        {isLoading ? (
          <ProductPlaceHolder />
        ) : (
          <ProductList products={products || []} />
        )}
      </Box>
    </ShopLayout>
  );
}

export const getServerSideProps = async ({ req }) => {
  console.log(req.params);
  return {
    props: {},
  };
};
