import { createContext } from "react";

const UI_INITIAL_STATE = {
  isMenuOpen: false,
  isDragging: false,
  setIsDragginOrder: () => {},
};

export const UIContext = createContext(({} = UI_INITIAL_STATE));
