import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);


export const useAddress = (config = []) => {
   const { data, error } = useSWR("/direccion", fetcher, config);
   
   return {
      addresses: data,
      isLoading: !error && !data,
      isError: error
   }
}

