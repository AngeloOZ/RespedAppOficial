import { Grid } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { AddAddress } from "../../components/checkout/AddAddress";
import { ListAddress } from "../../components/checkout";

const addressPage = () => {
  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección del destino"
      imageFullUrl=""
    >
      <Grid container columnSpacing={2} sx={{ mt: 3 }}>
        <ListAddress />
        <AddAddress />
      </Grid>
    </ShopLayout>
  );
};

export default addressPage;
