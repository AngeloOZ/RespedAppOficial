import { useContext } from "react";

import { useRouter } from "next/router";
import { SweetAlert } from "../helpers";

import axios from "axios";
import { CartContext } from "../context";

const dataOrder = {
   IDPEDIDOTOTAL: undefined,
   IDRELACIONUD: undefined,
   NOTE: "",
};

export const useHandleOrders = (order = dataOrder, setDisplay) => {
   const {emptyCart} = useContext(CartContext)
   const router = useRouter();

   const handleCloseRegisterOrder = () => {
      setDisplay(false);
      emptyCart();
      router.push('/');
   }

   const registerOrder = async () => {
      setDisplay(true);
      try {
         const { data } = await axios.post('pedido/domicilio', order);
         setDisplay(false);
         SweetAlert.success({
            title: "La orden ha sido registrada",
            text: "Su orden será procesada pronto por el personal del restaurante",
            confirmButtonText: "Cerrar",
            onClose: handleCloseRegisterOrder,
         });
      } catch (error) {
         setDisplay(false);
         console.error(error);
         SweetAlert.error({
            title: "Oppss hubo un error",
            text: "Parece que hubo un error al registrar su pedido"
         });
      }
   }

   const cancelOrder = async () => {
      SweetAlert.deleteConfirm({
         title: "¿Está seguro de cancelar la orden?",
         text: "Esta acción no puede revertirse",
         confirmButtonText: "Cancelar orden",
         cancelButtonText: "No cancelar",
      });
   }

   return { registerOrder, cancelOrder }
}
