import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

const UI_INITIAL_STATE = {
  isMenuOpen: false,
  isDragging: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI_MenuToggle" });
  };

  const setIsDragginOrder = (isDrag) => {
    dispatch({ type: "UI_isDraggin", payload: isDrag });
  };

  return (
    <UIContext.Provider
      value={{ ...state, toggleSideMenu, setIsDragginOrder }}
    >
      {children}
    </UIContext.Provider>
  );
};
