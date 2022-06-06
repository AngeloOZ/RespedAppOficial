import { Box, Typography } from "@mui/material";
import { obtenerCategorias } from "../../backend/controllers/categoriasController";
import { obtenerProductos } from "../../backend/controllers/productsController";

import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";

export default function index({ products, categories }) {
  return (
    <ShopLayout categories={categories}>
      <Box textAlign="center" component="div" paddingY={2}>
        <Typography variant="h1" component="h1">
          Todos los productos
        </Typography>
      </Box>
      <ProductList products={products} />
    </ShopLayout>
  );
}

export async function getServerSideProps() {
  let categories = [];
  let products = [];
  try {
    categories = await obtenerCategorias();
    products = await obtenerProductos();
    return {
      props: {
        categories,
        products,
      },
    };
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
    } else {
      console.error(error);
    }
    return {
      props: {
        categories,
        products,
      },
      // redirect:{
      //   destination: '/',
      //   permanent: false
      // }
    };
  }
}
