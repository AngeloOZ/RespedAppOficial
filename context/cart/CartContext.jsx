import { createContext } from "react";

const CART_INITIAL_STATE = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  addProductToCart: () => {},
  removeCartProduct: () => {},
  emptyCart: () => {},
};

export const CartContext = createContext(({} = CART_INITIAL_STATE));
