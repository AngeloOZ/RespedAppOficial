import axios from "axios";
import { useReducer } from "react";
import { CategoryContext, categoryReducer } from "./";

const getCategories = async () => {
  const request = await axios.get("http://localhost:3000/api/categorias");
  return request.data
};

const CATEGORY_INITIAL_STATE = {
  categories: getCategories(),
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, CATEGORY_INITIAL_STATE);

  return (
    <CategoryContext.Provider value={{ ...state }}>
      {children}
    </CategoryContext.Provider>
  );
};
