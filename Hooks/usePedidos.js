import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const usePedidos = () => {

   const { data, error } = useSWR('/pedido', fetcher, { refreshInterval: 1000, revalidateIfStale: true });

   return {
      pedidos: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}
