
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import { usePedidos } from "../../Hooks";
import ListPedidos from "../../components/ComponentsAdmin/ListPedidos";

export default function Admin() {
   const pedidosLocales = usePedidos("local").pedidos;
   const pedidosDomicilio = usePedidos("domicilio").pedidos;
   const pedidosReserva = usePedidos("reserva").pedidos;
  return (
    <AdminLayout>
        <h1>Pedidos</h1>
        <div>
         <ListPedidos pedidos={pedidosLocales?pedidosLocales:[]} tipo={1} />
         <ListPedidos pedidos={pedidosDomicilio?pedidosDomicilio:[]} tipo={2} />
         <ListPedidos pedidos={pedidosReserva?pedidosReserva:[]} tipo={3} />
    </div>
    </AdminLayout>
  )
}
