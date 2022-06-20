import { useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";
import Cookies from "js-cookie";

const CART_INITIAL_STATE = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const localProducts = Cookies.get("cart")
        ? JSON.parse(Cookies.get("cart"))
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
      Cookies.set("cart", JSON.stringify(state.cart));
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
    if (state.cart.length === 1) {
      Cookies.set("cart", JSON.stringify([]));
    }
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART_PRODUCTS" });
    Cookies.remove("cart");
    Cookies.remove("summary_order");
    Cookies.set("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        removeCartProduct,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
