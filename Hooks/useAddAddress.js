import axios from "axios";
import { SweetAlert } from "../helpers";
import { mutate } from "swr"

export const useAddAddress = (setLoader) => {

   const addAddress = async (data) => {
      try {
         setLoader(true);
         await axios.post('/direccion', data);
         setLoader(false);
         mutate();
         SweetAlert.success({
            title: "Dirección Agregada",
            text: `La direccion: ${data.NAME} se registro con exito`,
            confirmButtonText: "OK",
            timer: 3500
         });
      } catch (error) {
         setLoader(false);
         console.error(error);
         SweetAlert.error({
            title: "Oppss",
            text: `La direccion: '${data.NAME}' no pudo registrarse intentalo de nuevo`,
            confirmButtonText: "OK",
            timer: 3500
         });
      }
   }

   const editAddress = async (data) => {
      try {
         setLoader(true);
         await axios.put('/direccion', data);
         mutate();
         setLoader(false);
         SweetAlert.success({
            title: "Dirección actualizada",
            text: `La direccion: ${data.NAME} se actualizo con exito`,
            confirmButtonText: "OK",
            timer: 3500
         });
      } catch (error) {
         setLoader(false);
         console.error(error);
         SweetAlert.error({
            title: "Oppss",
            text: `La direccion: '${data.NAME}' no pudo actualizarse, intentalo de nuevo`,
            confirmButtonText: "OK",
            timer: 3500
         });
      }
   }

   const deleteAddress = async ({ id, name }) => {
      try {
         setLoader(true);
         await axios.delete(`/direccion/${id}`);
         setLoader(false);
         mutate();
         SweetAlert.success({
            title: "Dirección eliminada",
            text: `La direccion: ${name} se elimino`,
            confirmButtonText: "OK",
            timer: 3500
         });
      } catch (error) {
         setLoader(false);
         console.error(error);
         SweetAlert.error({
            title: "Oppss",
            text: `La direccion: '${name}' no pudo eliminarse, intentalo de nuevo`,
            confirmButtonText: "OK",
            timer: 3500
         });
      }
   }
   return { addAddress, editAddress, deleteAddress }
}
