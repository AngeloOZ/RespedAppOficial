import { createContext } from "react";

const ORDERS_INITIAL_STATE = {
  orders: [],
  loadAllOrders: (orders) => {},
  updateStateOrder: (order) => {},
};

export const OrdersContext = createContext(({}));
