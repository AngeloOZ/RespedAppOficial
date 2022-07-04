
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse, Button,Paper,Divider } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTablePedidos from "./DataTablePedidos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ListPedidosCompletado = ({ pedidosLocales, pedidosDomicilio, pedidosReserva }) => {

   return (
      <div>
         {
            pedidosLocales.map(pedido => (
               (pedido.IDSTATE == 4) ? <><Paper sx={{margin:2}}> <ListItem key={pedido.IDPEDIDO}>
                  <LocalDiningIcon />
                  <ListItemText sx={{ padding: 2 }}>{
                      pedido.PRODUCTOS.map((pedido,index) => (
                        <div>{pedido}<Divider/></div>
                      ))}</ListItemText>
               </ListItem> <div align='center'>
                     <Button variant="outlined" color="error" sx={{margin:1}} >Finalizar</Button>
                     </div></Paper> </>: null
            ))
         }
         {
            pedidosDomicilio.map(pedido => (
               (pedido.IDSTATE == 4) ? <><Paper sx={{margin:2}}> <ListItem key={pedido.IDPEDIDO}>
                  <DeliveryDiningIcon />
                  <ListItemText sx={{ padding: 2 }}>{
                      pedido.PRODUCTOS.map((pedido,index) => (
                        <div>{pedido}<Divider/></div>
                      ))}</ListItemText>
               </ListItem> <div align='center'>
                     <Button variant="outlined" color="error" sx={{margin:1}}>Finalizar</Button>
                     </div></Paper> </>: null
            ))
         }
         {
            pedidosReserva.map(pedido => (
               (pedido.IDSTATE == 4) ? <><Paper sx={{margin:2}}> <ListItem key={pedido.IDPEDIDO}>
                  <CalendarMonthIcon />
                  <ListItemText sx={{ padding: 2 }}>{
                      pedido.PRODUCTOS.map((pedido,index) => (
                        <div>{pedido}<Divider/></div>
                      ))}</ListItemText>
               </ListItem> <div align='center'>
                     <Button variant="outlined" color="error" sx={{margin:1}}>Finalizar</Button>
                     </div></Paper> </>: null
            ))
         }
      </div>
   )
}

export default ListPedidosCompletado;