
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useReservasClient = (config = {}) => {
   const { data, error } = useSWR('/reserva/usuario', fetcher, config);
   return {
      reservas: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}

