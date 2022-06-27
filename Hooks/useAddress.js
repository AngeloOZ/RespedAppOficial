import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
const SWRConfig = {
   revalidateOnFocus: true,
   refreshInterval: 1000,
   revalidateOnMount: true,
}

export const useAddress = () => {
   const { data, error } = useSWR("/direccion", fetcher, {refreshInterval: 500});

   return {
      addresses: data,
      isLoading: !error && !data,
      isError: error
   }
}

