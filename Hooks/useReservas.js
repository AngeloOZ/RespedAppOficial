import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useReservas = (url = "", config = []) => {
   const newUrl = (url === "")? "/reserva":`/reserva/estado/${url}`
   const { data, error } = useSWR(newUrl, fetcher, config);
   return {
      reservas: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}
