import axios from "axios"
import { mutate } from "swr";

export async function setStateOrder(order, orders) {
   try {
      const { IDPEDIDOTOTAL, IDSTATE } = order;
      let ordersAux = orders.filter(ord => ord.IDPEDIDOTOTAL != order.IDPEDIDOTOTAL);
      ordersAux = [...ordersAux, order]
      const data = await axios.put('/pedido', { IDPEDIDOTOTAL, IDSTATE });
      mutate('/pedido');
      console.log(data);
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}