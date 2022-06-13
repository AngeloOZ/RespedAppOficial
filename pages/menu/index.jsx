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
      {isLoading ? <ProductPlaceHolder /> : <ProductList products={products} />}
    </ShopLayout>
  );
}

// export async function getServerSideProps() {
//   let categories = [];
//   let products = [];
//   try {
//     categories = await obtenerCategorias();
//     products = await obtenerProductos();
//     return {
//       props: {
//         categories,
//         products,
//       },
//     };
//   } catch (error) {
//     if (error.response) {
//       console.error(error.response.data);
//     } else {
//       console.error(error);
//     }
//     return {
//       props: {
//         categories,
//         products,
//       },
//     };
//   }
// }
