import { useRouter } from "next/router";

import axios from "axios";
import { SweetAlert } from "../helpers";
import Cookies from "js-cookie";

export const useReservation = (displayLoading) => {
   const router = useRouter();

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
         const { data } = await axios.post('/reserva', body);
         body.IDRESERVA = data.data;
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
            displayLoading(true);
            Cookies.set('reservation', JSON.stringify(body), { expires: 0.2, secure: true })
            router.push('/menu');
         }
      } catch (error) {
         console.error(error)
      }
   }


   return { registerReservation }
}
