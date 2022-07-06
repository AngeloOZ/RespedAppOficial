import axios from "axios";
import Cookies from "js-cookie";
import { SweetAlert } from "../helpers";

export const useUpdateCliente = (loader) => {

   const updateClient = async (user) => {
      try {
         loader(true);
         const { data } = await axios.put('/usuario', user);
         const token = data.data.token;
         if (token) {
            Cookies.set("SESSION_ID", token, { expires: 1 });
         }
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
