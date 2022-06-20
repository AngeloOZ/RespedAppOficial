
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTablePedidos from "../../components/ComponentsAdmin/DataTablePedidos";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { usePedidos } from "../../Hooks";
import ListPedidos from "../../components/ComponentsAdmin/ListPedidos";
import { makeStyles } from '@mui/styles'

export default function Admin() {
   const pedidosLocales = usePedidos("local").pedidos;
   const pedidosDomicilio = usePedidos("domicilio").pedidos;
   const pedidosReserva = usePedidos("reserva").pedidos;
  return (
    <AdminLayout>
        <h1>Pedidos</h1>
        <div>
         <ListPedidos pedidos={pedidosLocales} tipo={1} />
         <ListPedidos pedidos={pedidosDomicilio} tipo={2} />
         <ListPedidos pedidos={pedidosReserva} tipo={3} />
    </div>
    </AdminLayout>
  )
}
