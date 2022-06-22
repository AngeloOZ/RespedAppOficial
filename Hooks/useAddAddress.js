import axios from "axios";
import { SweetAlert } from "../helpers";

export const useAddAddress = () => {

   const addAddress = async (data) => {
      try {
         await axios.post('/direccion', data);
         SweetAlert.success({
            title: "Dirección Agregada",
            text: `La direccion: ${data.NAME} se registro con exito`,
            confirmButtonText: "OK",
            timer: 3500
         });
      } catch (error) {
         console.error(error);
         SweetAlert.error({
            title: "Oppss",
            text: `La direccion: '${data.NAME}' no pudo registrarse intentalo de nuevo`,
            confirmButtonText: "OK",
            timer: 3500
         });
      }
   }
   return { addAddress }
}
