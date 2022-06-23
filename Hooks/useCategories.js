import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useCategories = (config = {}) => {
   const { data, error } = useSWR("/categoria", fetcher, config);
   return {
      categories: data?.data,
      isLoading: !error && !data,
      isError: error
   }
}
