import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const usePedidos = (url = "") => {
   const newUrl = (url === "")? "/pedido":`/pedido/${url}`
   const { data, error } = useSWR(newUrl, fetcher, { refreshInterval: 1000, revalidateIfStale: true });

   return {
      pedidos: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}
