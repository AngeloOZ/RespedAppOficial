
import { usePedidos, useReservas } from "../../Hooks";
import { ItemSumary } from "./ItemSumary";

export const GridSumary = () => {
  const pedidos = usePedidos().pedidos;
  const reservasPendientes = useReservas("1").reservas;
  const reservasConfirmadas = useReservas("2").reservas;
  let numactivos = 0;
  let numactivosres = 0;
  let numactivosdom = 0;
  let numproceso= 0;
  let numconfir= 0;
  let numcocina= 0;
  let numcomp= 0;
  let numpend= 0;
  let numpagado =0;
  let numnopagado =0;
  let numreservas1 =0;
  let numreservas2 =0;
  if(pedidos){
    pedidos.forEach(pedido => {
      if(pedido.TIPO==1){
        if(pedido.IDSTATE!=1){
          numactivos++;
        }
      }
      if(pedido.TIPO==2){
        if(pedido.IDSTATE!=1){
          numactivosdom++;
        }
      }
      if(pedido.TIPO==3){
        if(pedido.IDSTATE!=1){
          numactivosres++;
        }
      }
      if(pedido.IDSTATE==1){
        numproceso++;
      }
      if(pedido.IDSTATE==2){
        numconfir++;
      }
      if(pedido.IDSTATE==3){
        numcocina++;
      }
      if(pedido.IDSTATE==4){
        numcomp++;
      }
      if(pedido.TIPO==3){
        if(pedido.IDSTATE==6){
          numpend++;
        }
      }
      if(pedido.PAGADO == 1){
        numpagado++;
      }
      else{
        numnopagado++;
      }
    });
  }
  if(reservasPendientes){
    numreservas1++;
  }
  if(reservasConfirmadas){
    numreservas2++;
  }
  return (
    <div className="dash-cardBox">
      <ItemSumary number={numactivos} name="Pedidos en Local Activos" icon="restaurant-outline" />
      <ItemSumary number={numactivosres} name="Pedidos por Reserva Activos" icon="calendar-outline" />
      <ItemSumary number={numactivosdom} name="Pedidos a Domicilio Activos" icon="home-outline" />
      <ItemSumary number={numproceso} name="Pedidos en Proceso" icon="warning-outline" />
      <ItemSumary number={numconfir} name="Pedidos  Confirmados" icon="checkmark-circle-outline" />
      <ItemSumary number={numcocina} name="Pedidos en Cocina" icon="sync-outline" />
      <ItemSumary number={numcomp} name="Pedidos Completados" icon="thumbs-up-outline" />
      <ItemSumary number={numpend} name="Pedidos Pendientes (Reserva)" icon="hourglass-outline" />
      <ItemSumary number={numpagado} name="Pedidos Pagados" icon="cash-outline" />
      <ItemSumary number={numnopagado} name="Pedidos No Pagados" icon="close-outline" />
      <ItemSumary number={numreservas1} name="Reservas Pendientes" icon="hourglass-outline" />
      <ItemSumary number={numreservas2} name="Reservas Confirmadas" icon="checkmark-circle-outline" />
      
    </div>
  );
};
