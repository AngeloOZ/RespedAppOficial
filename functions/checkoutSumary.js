import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function getItemsCart(request) {
   const { cart } = request.cookies;
   if (cart) {
      try {
         const products = JSON.parse(cart);
         const arrayProducts = products.map((product) => product.idProduct);
         if (arrayProducts.length !== 0) {
            return arrayProducts;
         }
         return undefined;
      } catch (error) {
         Cookies.remove('cart')
         return undefined;
      }
   }
   return undefined;
}
export function getSummaryOrderCookie(request) {
   const { summary_order } = request.cookies;
   if (summary_order) {
      try {
         const summary = JSON.parse(summary_order);
         if (summary.IDPEDIDOTOTAL) {
            return summary;
         } else {
            return undefined;
         }
      } catch (error) {
         Cookies.remove('summary_order')
         console.error(error);
         return undefined;
      }
   }
   return undefined;
}
export function getReservationCookies(request) {
   const { reservation } = request.cookies;
   if (reservation) {
      try {
         const reservationJSON = JSON.parse(reservation);
         return reservationJSON;
      } catch (error) {
         Cookies.remove('reservation');
         return undefined;
      }
   }
   return undefined;
}
export function existSummaryOrder(request) {
   const { summary_order } = request.cookies;
   if (summary_order) {
      try {
         const sumamry = JSON.parse(summary_order);
         return true;
      } catch (error) {
         return false;
      }
   }
   return false;
}
export function getToken(request) {
   const { SESSION_ID } = request.cookies;
   if (SESSION_ID) {
      return SESSION_ID;
   }
   return undefined;
}
export function getInformationAddres(query) {
   const addressB64 = atob(query.dir);
   try {
      const address = JSON.parse(addressB64);
      return address;
   } catch (error) {
      return undefined
   }
}
export async function getAddressUserByID(id, token) {
   try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data } = await axios.get(`/direccion/${id}`);
      return data.data;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
export async function postCurrentOrder(arrayId, token) {
   try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data } = await axios.post(`/pedido`, arrayId);
      return data.data;
   } catch (error) {
      console.error(error);
      return undefined
   }
}
