import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const ProductList = ({products}) => {
  return (
    <Grid container spacing={4} justifyContent={{md:"center"}}>
      {products.map((product) => (
        <ProductCard key={product.IDPRODUCTO} product={product} />
      ))}
    </Grid>
  );
};
