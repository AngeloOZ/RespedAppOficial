import { useContext } from "react";

import { useRouter } from "next/router";

import axios from "axios";
import Cookies from "js-cookie";
import { SweetAlert } from "../helpers";
import { CartContext } from "../context";

const dataOrder = {
   IDPEDIDOTOTAL: undefined,
   IDRELACIONUD: undefined,
   NOTE: "",
};

export const useHandleOrders = (order = dataOrder, setDisplay) => {
   const { emptyCart } = useContext(CartContext)
   const router = useRouter();

   const handleCloseRegisterOrder = () => {
      setDisplay(true);
      emptyCart();
      Cookies.remove('reservation');
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
            text: "Parece que hubo un error al registrar su pedido",
         });
      }
   }
   const registerOrderRerservation = async () => {
      setDisplay(true);
      console.log(order);
      try {
         const { data } = await axios.post('pedido/reserva', order);
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
   const registerOrderLocal = async () => {
      setDisplay(true);
      try {
         const { data } = await axios.post('pedido/local', order);
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

   const cancelOrder = async (idOrder) => {
      const confirm = await SweetAlert.deleteConfirm({
         title: "¿Está seguro de cancelar la orden?",
         text: "Esta acción no puede revertirse",
         confirmButtonText: "Cancelar orden",
         cancelButtonText: "No cancelar",
      });
      if (confirm.isConfirmed) {
         try {
            setDisplay(true);
            const { data } = await axios.delete(`pedido/${idOrder}`);
            setDisplay(false);
            SweetAlert.success({
               title: "Orden cancelada",
               text: "La orde fue cancelada con exito",
               onClose: () => {
                  setDisplay(true);
                  emptyCart();
                  Cookies.remove('reservation');
                  router.push('/menu');
               }
            });
         } catch (error) {
            setDisplay(false);
            console.log(error);
            SweetAlert.error({
               title: "Oppss hubo un error",
               text: "Parece que hubo un error al cancelar la orden"
            });
         }
      }
   }

   return { registerOrder, cancelOrder, registerOrderRerservation, registerOrderLocal }
}
