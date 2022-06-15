import { useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";

const CART_INITIAL_STATE = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const localProducts = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      dispatch({
        type: "LOAD_CART_FROM_LOCALSTORAGE",
        payload: localProducts,
      });
    } catch (error) {
      dispatch({
        type: "LOAD_CART_FROM_LOCALSTORAGE",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (state.cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.length;
    const subTotal = state.cart
      .reduce((prev, current) => Number(prev) + Number(current.price), 0)
      .toFixed(2);
    const orderSummary = {
      numberOfItems,
      subTotal,
    };
    dispatch({ type: "UPDATE_ORDER_CART_SUMMARY", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product) => {
    dispatch({ type: "ADD_CART_PRODUCT", payload: product });
  };

  const removeCartProduct = (productID) => {
    dispatch({ type: "REMOVE_CART_PRODUCT", payload: productID });
    if(state.cart.length === 1){
      localStorage.setItem("cart", JSON.stringify([]));
    }
  };

  return (
    <CartContext.Provider
      value={{ ...state, addProductToCart, removeCartProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
