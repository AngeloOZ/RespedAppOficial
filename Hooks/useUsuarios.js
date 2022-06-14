import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useUsuarios = (config = []) => {
   const { data, error } = useSWR("/usuario", fetcher, config);
   return {
      users: data,
      isLoading: !error && !data,
      isError: error
   }
}
