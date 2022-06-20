
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTableReservas from "../../components/ComponentsAdmin/DataTableReservas";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useReservas } from "../../Hooks/useReservas";
import ListReservas from "../../components/ComponentsAdmin/ListReservas";


export default function Admin() {
   const reservasPendiente = useReservas(1).reservas;
   const reservasConfirmada = useReservas(2).reservas;
   const reservasFinalizada = useReservas(3).reservas;
   const reservasRechazada = useReservas(4).reservas;
  return (
    <AdminLayout>
        <h1>Reservas</h1>
        <div>
        <ListReservas reservas ={reservasPendiente} tipo ={1}/>
        <ListReservas reservas ={reservasConfirmada} tipo ={2}/>
        <ListReservas reservas ={reservasFinalizada} tipo ={3}/>
        <ListReservas reservas ={reservasRechazada} tipo ={4}/>
         
    </div>
    </AdminLayout>
  )
}
