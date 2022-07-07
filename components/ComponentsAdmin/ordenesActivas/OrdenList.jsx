import { useContext, useMemo } from "react";

import { List, Paper } from "@mui/material";
import { UIContext } from "../../../context";
import styles from './OrdenList.module.css';
import { OrdenCard } from "./OrdenCard";
import { setStateOrder } from "../../../functions";

export const OrdenList = ({ status, orders }) => {
  const { isDragging, setIsDragginOrder } = useContext(UIContext);

  const ordersByStatus = useMemo(
    () => orders.filter((order) => order.IDSTATE === status),
    [orders]
  );

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const onDropEntry = async (event) => {
    const id = event.dataTransfer.getData("text");
    const order = orders.find((order) => order.IDPEDIDOTOTAL == id);
    order.IDSTATE = status;
    setStateOrder(order, orders);
    setIsDragginOrder(true);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 170px)",
          overflowY: "scroll",
          border: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
          padding: "3px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {ordersByStatus.map((order) => (
            <OrdenCard key={order.IDPEDIDOTOTAL} order={order}/>
          ))}
        </List>
      </Paper>
    </div>
  );
};
