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
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader
              style={{ backgroundColor: "#42a5f5", color: "white" }}
              title="En proceso"
            />
            <OrdenList status={1} orders={pedidos || []} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader
              style={{ backgroundColor: "#66bb6a", color: "white" }}
              title="Confirmado"
            />
            <OrdenList status={2} orders={pedidos || []} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader
              style={{ backgroundColor: "#ce93d8", color: "white" }}
              title="Preparando"
            />
            <OrdenList status={3} orders={pedidos || []} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader
              style={{ backgroundColor: "#ffa726", color: "white" }}
              title="Completado"
            />
            <OrdenList status={4} orders={pedidos || []} />
          </Card>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}
