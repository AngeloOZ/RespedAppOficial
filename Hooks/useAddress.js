import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useAddress = (config = {}) => {
   const { data, error } = useSWR("/direccion", fetcher, { revalidateOnFocus: true, refreshInterval: 3000 });

   return {
      addresses: data,
      isLoading: !error && !data,
      isError: error
   }
}

