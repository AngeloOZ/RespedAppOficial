import { useReducer } from "react";
import { CategoryContext, categoryReducer } from "./";

const CATEGORY_INITIAL_STATE = {
  categories: [],
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, CATEGORY_INITIAL_STATE);

  function setCategories(data) {
    dispatch({
      type: "SET_CATEGORIES",
      payload: data,
    });
  }

  return (
    <CategoryContext.Provider value={{ ...state, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
