import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const confiSwal = {
   title: "title", 
   text: "text",
   confirmButtonText: "Ok",
   showCloseButton: true,
   timer: 0,
   onClose: () =>{}
}

export function success(config = confiSwal) {
   const defultConfigAlert = {...confiSwal, ...config}
   return MySwal.fire({
      title: defultConfigAlert.title,
      text: defultConfigAlert.text,
      icon: "success",
      timer: defultConfigAlert.timer,
      showCloseButton: defultConfigAlert.showCloseButton,
      confirmButtonText: defultConfigAlert.confirmButtonText,
      didClose: () => {
         console.log('Se cerró');
         defultConfigAlert.onClose();
      }
   })
}
export function error(config = confiSwal) {
   const defultConfigAlert = {...confiSwal, ...config}
   return MySwal.fire({
      title: defultConfigAlert.title,
      text: defultConfigAlert.text,
      icon: "error",
      timer: defultConfigAlert.timer,
      showCloseButton: defultConfigAlert.showCloseButton,
      confirmButtonText: defultConfigAlert.confirmButtonText,
      didClose: () => {
         console.log('Se cerró');
         defultConfigAlert.onClose();
      }
   })
}