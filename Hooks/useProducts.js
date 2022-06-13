import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useProducts = (url = "", config = []) => {
   const newUrl = (url === "")? "/producto":`/producto/categoria/${url}`
   const { data, error } = useSWR(newUrl, fetcher, config);
   return {
      products: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}