import { GridSumary } from "../../components/ComponentsAdmin/GridSumary"
import { AdminLayout } from "../../components/layouts/AdminLayout"
import GridUsuario from "../../components/ComponentsAdmin/GridUsuario";
import { Grid, Paper,List, Typography } from "@mui/material";
import { usePedidos } from "../../Hooks";
import ListPedidosProceso from "../../components/ComponentsAdmin/ListPedidosProceso";
import ListPedidosConfirmado from "../../components/ComponentsAdmin/ListPedidosConfirmado";
import ListPedidosPreparando from "../../components/ComponentsAdmin/ListPedidosPreparando";
import ListPedidosCompletado from "../../components/ComponentsAdmin/ListPedidosCompletado";


export default function Admin() {
  const pedidosLocales = usePedidos("local").pedidos;
  const pedidosDomicilio = usePedidos("domicilio").pedidos;
  const pedidosReserva = usePedidos("reserva").pedidos;
  var currentdate = new Date();
  var fecha = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + "  ";
 

  return (
    <AdminLayout>
      <GridUsuario fecha={fecha} />
      <Paper sx={{ margin: 1 }} align={"center"}>
        <Grid container>
        <Grid item xs={3}>
        <Paper sx={{bgcolor: '#29b6f6'}}>
        <Typography color={"#ffff"}>En proceso</Typography>
        </Paper >
        <ListPedidosProceso pedidosLocales={pedidosLocales?pedidosLocales:[]} pedidosDomicilio={pedidosDomicilio?pedidosDomicilio:[]} pedidosReserva={pedidosReserva?pedidosReserva:[]}/>
        </Grid>
        <Grid item xs={3}>
        <Paper sx={{bgcolor: '#66bb6a'}}>
        <Typography color="#ffff">Confirmado</Typography>
        </Paper>
        <ListPedidosConfirmado pedidosLocales={pedidosLocales?pedidosLocales:[]} pedidosDomicilio={pedidosDomicilio?pedidosDomicilio:[]} pedidosReserva={pedidosReserva?pedidosReserva:[]}/>
        </Grid>
        <Grid item xs={3}>
        <Paper sx={{bgcolor: '#ce93d8'}}>
        <Typography color="#ffff">Preparando</Typography>
        </Paper>
        <ListPedidosPreparando pedidosLocales={pedidosLocales?pedidosLocales:[]} pedidosDomicilio={pedidosDomicilio?pedidosDomicilio:[]} pedidosReserva={pedidosReserva?pedidosReserva:[]}/>
        </Grid>
        <Grid item xs={3}>
        <Paper sx={{bgcolor: '#ffa726'}}>
        <Typography color="#ffff">Completado</Typography>
        </Paper>
        <ListPedidosCompletado pedidosLocales={pedidosLocales?pedidosLocales:[]} pedidosDomicilio={pedidosDomicilio?pedidosDomicilio:[]} pedidosReserva={pedidosReserva?pedidosReserva:[]}/>
        </Grid>
        </Grid>
        
      </Paper>


      <GridSumary />

    </AdminLayout>
  )
}