import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UIContext } from "../../../context";

export const OrdenCard = ({ order }) => {
  const { isDragging, setIsDragginOrder } = useContext(UIContext);

  const onDragStart = (event) => {
    event.dataTransfer.setData("text", order.IDPEDIDOTOTAL);
    setIsDragginOrder(true);
  };

  const onDragEnd = () => {
    setIsDragginOrder(false);
  };

  return (
    <Card
      sx={{ marginBottom: 1, backgroundColor: "#f3f3f3" }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>order</Typography>
          <ol>
            {order.PRODUCTOS.map((pro, i) => (<li key={i}>{pro}</li>))}
          </ol>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
