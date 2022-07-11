
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { useReservas } from "../../Hooks/useReservas";
import ListReservas from "../../components/ComponentsAdmin/ListReservas";


export default function Admin() {
   const reservasPendiente = useReservas("estado/1").reservas;
   const reservasConfirmada = useReservas("estado/2").reservas;
   const reservasFinalizada = useReservas("estado/3").reservas;
   const reservasRechazada = useReservas("estado/4").reservas;
  return (
    <AdminLayout>
        <h1>Reservas</h1>
        <div>
        <ListReservas reservas ={reservasPendiente?reservasPendiente:[]} tipo ={1}/>
        <ListReservas reservas ={reservasConfirmada?reservasConfirmada:[]} tipo ={2}/>
        <ListReservas reservas ={reservasFinalizada?reservasFinalizada:[]} tipo ={3}/>
        <ListReservas reservas ={reservasRechazada?reservasRechazada:[]} tipo ={4}/>
         
    </div>
    </AdminLayout>
  )
}
