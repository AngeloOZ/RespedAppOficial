
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTablePedidos from "../../components/ComponentsAdmin/DataTablePedidos";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { usePedidos } from "../../Hooks";


export default function Admin() {
   const pedidosLocales = usePedidos("local").pedidos;
   const pedidosDomicilio = usePedidos("domicilio").pedidos;
   const pedidosReserva = usePedidos("reserva").pedidos;
   console.log(pedidosLocales)
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
   const [open1, setOpen1] = React.useState(true);
   const handleClick1 = () => {
      setOpen1(!open1);
   };
   const [open2, setOpen2] = React.useState(true);
   const handleClick2 = () => {
      setOpen2(!open2);
   };
  return (
    <AdminLayout>
        <h1>Pedidos</h1>
        <div>
         <List>
         <ListItem button onClick={handleClick}>
			<ListItemText primary="Ver Pedidos Locales" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTablePedidos pedidos={pedidosLocales} tipo ={1}/>

         </List>
         </Collapse>
         </List>
         <List>
         <ListItem button onClick={handleClick1}>
			<ListItemText primary="Ver Pedidos a Domicilio" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open1} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTablePedidos pedidos ={pedidosDomicilio} tipo ={2}/>

         </List>
         </Collapse>
         </List>
         <List>
         <ListItem button onClick={handleClick2}>
			<ListItemText primary="Ver Pedidos de Reserva" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open2} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTablePedidos pedidos ={pedidosReserva} tipo ={3}/>

         </List>
         </Collapse>
         </List>
         
       
        
         
    </div>
    </AdminLayout>
  )
}
