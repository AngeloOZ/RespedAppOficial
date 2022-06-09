import NextLink from "next/link";
import { Typography, Grid, Chip, Link } from "@mui/material";
import {  } from "@mui/x";
import { ShopLayout } from "../../components/layouts/ShopLayout";


const rows = [
  { id: 1, paid: true, fullname: "Fernando Herrera" },
  { id: 2, paid: false, fullname: "Melissa Flores" },
  { id: 3, paid: true, fullname: "Hernando Vallejo" },
  { id: 4, paid: false, fullname: "Emin Reyes" },
  { id: 5, paid: false, fullname: "Eduardo Rios" },
  { id: 6, paid: true, fullname: "Natalia Herrera" },
];

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
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
