import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const SWRConfig = {
   revalidateOnFocus: true,
   refreshInterval: 3000,
   revalidateOnMount: true,
}

export const useGetOrders = (config = SWRConfig) => {

   const GetOrdersLocal = () => {
      const { data, error } = useSWR("/pedido/usuario/local", fetcher, config);

      return {
         ordersLocal: data?.data,
         isLoading: !error && !data,
         isError: error
      }
   }
   const GetOrdersDelivery = () => {
      const { data, error } = useSWR("/pedido/usuario/domicilio", fetcher, config);
      let dataSanitize = [];

      if (data?.data) {
         data?.data.forEach(pedido1 => {
            pedido1.PEDIDOS.forEach(pedido2 => {
               dataSanitize = [...dataSanitize, { ...pedido2, DIRECCION: pedido1.DIRECCION }]
            })
         });
      }

      return {
         ordersDelivery: dataSanitize,
         isLoading: !error && !data,
         isError: error
      }
   }
   const GetOrdersReservation = () => {
      const { data, error } = useSWR("/pedido/usuario/reserva", fetcher, config);

      return {
         ordersReserva: data?.data,
         isLoading: !error && !data,
         isError: error
      }
   }
   return { GetOrdersLocal, GetOrdersDelivery, GetOrdersReservation }
}
