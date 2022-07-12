import axios from "axios"
import { mutate, } from "swr";

export async function setStateOrder(order, orders) {
   try {
      const { IDPEDIDOTOTAL, IDSTATE } = order;
      await axios.put('/pedido', { IDPEDIDOTOTAL, IDSTATE });
      mutate('/pedido');
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}