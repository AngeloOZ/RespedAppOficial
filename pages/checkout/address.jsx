import { Grid } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { AddAddress } from "../../components/checkout/AddAddress";
import { ListAddress } from "../../components/checkout";
import { useAddress } from "../../Hooks";
import { ListAddressSkeleton } from "../../components/checkout/ListAddressSkeleton";

const AddressPage = () => {
  const { addresses, isLoading } = useAddress();

  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección del destino"
      imageFullUrl=""
    >
      <Grid container columnSpacing={2}>
        {isLoading ? (
          <ListAddressSkeleton />
        ) : (
          <ListAddress addresses={addresses?.data || []} />
        )}
        <AddAddress />
      </Grid>
    </ShopLayout>
  );
};

export default AddressPage;
