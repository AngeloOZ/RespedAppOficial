import axios from "axios";
import { SweetAlert } from "../helpers";
import Cookies from "js-cookie";

export const useReservation = (displayLoading) => {

   const registerReservation = async (data) => {
      displayLoading(true);
      const { personas, notas, hora, fecha } = data;
      const body = {
         PEOPLE: personas,
         NOTE: notas,
         RESERVATIONDATE: fecha,
         RESERVATIONTIME: hora
      }
      try {
         // const { data } = await axios.post('/reserva', body);
         displayLoading(false);
         await SweetAlert.success({
            title: "Reservación realizada con exito",
            text: "En unos momentos recibira un correo de confirmación",
            confirmButtonText: "OK"
         });
         const response = await SweetAlert.successConfirm({
            title: "¿Desea agregar un pedido a su reserva?",
            text: "Este pedido se lo tendrá listo para la hora seleccionada",
            icon: "question",
            cancelButtonColor: "#d32f2f",
            confirmButtonColor: "#2e7d32"
         })
         if (response.isConfirmed) {
            Cookies.set('reservation', JSON.stringify(body), { expires: 0.2, secure: true })
            console.log('Agregando pedido');
         }
      } catch (error) {
         console.error(error)
      }
   }


   return { registerReservation }
}
