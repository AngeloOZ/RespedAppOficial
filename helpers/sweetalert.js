import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const confiSwal = {
   title: "title",
   text: "text",
   confirmButtonText: "Ok",
   showCloseButton: true,
   cancelButtonText: "Cancelar",
   confirmButtonColor: "#EC4D20",
   timer: 0,
   onClose: () => { }
}

export function success(config = confiSwal) {
   const defultConfigAlert = { ...confiSwal, ...config }
   return MySwal.fire({
      title: defultConfigAlert.title,
      text: defultConfigAlert.text,
      icon: "success",
      timer: defultConfigAlert.timer,
      showCloseButton: defultConfigAlert.showCloseButton,
      confirmButtonColor: defultConfigAlert.confirmButtonColor,
      confirmButtonText: defultConfigAlert.confirmButtonText,
      didClose: () => {
         defultConfigAlert.onClose();
      }
   })
}
export function error(config = confiSwal) {
   const defultConfigAlert = { ...confiSwal, ...config }
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

export function deleteConfirm(config = confiSwal) {

   const defultConfigAlert = { ...confiSwal, ...config }
   return MySwal.fire({
      title: defultConfigAlert.title,
      text: defultConfigAlert.text,
      icon: "warning",
      timer: defultConfigAlert.timer,
      confirmButtonText: defultConfigAlert.confirmButtonText,
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: defultConfigAlert.cancelButtonText,
      didClose: () => {
         console.log('Se cerró');
         defultConfigAlert.onClose();
      }
   })
}