import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import HomeIcon from '@mui/icons-material/Home';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
      sx={{ marginBottom: 1, backgroundColor: "#FBFBFB"  }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <div align="center">
          {order.TIPO==1?<RestaurantMenuIcon/>:
          order.TIPO==2?<HomeIcon/>:
          <CalendarMonthIcon/>}
          {order.PAGADO==1?<AttachMoneyIcon/>:<MoneyOffIcon/>}
          </div>
          
          <ol>
            {order.PRODUCTOS.map((pro, i) => (<li key={i}>{pro}</li>))}
          </ol>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
