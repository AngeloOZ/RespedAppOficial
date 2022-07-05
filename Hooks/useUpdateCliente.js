import axios from "axios";
import { SweetAlert } from "../helpers";

export const useUpdateCliente = (loader) => {

   const updateClient = (user) => {
      try {
         loader(true);
         const { data } = axios.put('/usuario', user);
         console.log(data);
         loader(false);
         SweetAlert.success({
            title: "Perfil actializado",
            text: "La información del perfil se ha actualizado",
            confirmButtonText: "Cerrar"
         })
      } catch (error) {
         console.error(error);
         SweetAlert.error({
            title: "Oops...",
            text: "No se pudo actualizar el perfil",
            confirmButtonText: "Cerrar",
            confirmButtonColor: "#dc3545",
         })
      }
   }
   return { updateClient }
}
