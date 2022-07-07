import { useReducer } from "react";
import { OrdersContext, ordersReducer } from "./";
import axios from "axios";

const ORDERS_INITIAL_STATE = {
  orders: [],
};

export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, ORDERS_INITIAL_STATE);

  const loadAllOrders = (orders_) => {
    console.log(orders_);
    dispatch({ type: "load_orders", payload: orders_ });
  };

  const updateStateOrder = async (order) => {
    try {
      // await axios.put('');
      dispatch({ type: "update_orders", payload: order });
    } catch (error) {}
  };

  return (
    <OrdersContext.Provider
      value={{ ...state, loadAllOrders, updateStateOrder }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
