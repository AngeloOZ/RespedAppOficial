import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE = {
  isMenuOpen: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI_MenuToggle" });
  };

  return (
    <UIContext.Provider 
      value={{ ...state, toggleSideMenu }}
      >
      {children}
    </UIContext.Provider>
  );
};
