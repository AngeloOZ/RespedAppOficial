import { useContext } from "react";
import { Card, CardHeader, Grid } from "@mui/material";

import { AdminLayout } from "../../components/layouts/AdminLayout";
import { usePedidos } from "../../Hooks";
import { OrdenList } from "../../components/ComponentsAdmin/ordenesActivas";

export default function OrdenesActivas() {
  const { isLoading, pedidos } = usePedidos();

  return (
    <AdminLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="En proceso" />
            <OrdenList status={1} orders={pedidos || []} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Confirmado" />
            <OrdenList status={2} orders={pedidos || []} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Preparando" />
            <OrdenList status={3} orders={pedidos || []} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Completado" />
            <OrdenList status={4} orders={pedidos || []} />
          </Card>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}
