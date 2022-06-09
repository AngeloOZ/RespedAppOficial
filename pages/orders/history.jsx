import NextLink from "next/link";
import { Typography, Grid, Chip, Link } from "@mui/material
import { ShopLayout } from "../../components/layouts/ShopLayout";


const HistoryPage = () => {
  return (
    <ShopLayout
      title={"Historial de ordenes"}
      pageDescription={"Historial de ordenes del cliente"}
      categories={[]}
      imageFullUrl={null}
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>

        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
