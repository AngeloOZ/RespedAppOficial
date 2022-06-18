
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTable from "../../components/ComponentsAdmin/DataTableUsuario";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useUsuarios } from "../../Hooks/useUsuarios";


export default function Admin() {
   const {users} = useUsuarios()
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
        <h1>Reservas</h1>
        <div>
        <List>
         <ListItem button onClick={handleClick}>
			<ListItemText primary="Ver Reservas Pendientes" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTable users ={users}/>

         </List>
         </Collapse>
         </List>
         <List>
         <ListItem button onClick={handleClick1}>
			<ListItemText primary="Ver Reservas Confirmadas" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open1} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTable users ={users}/>

         </List>
         </Collapse>
         </List>
         <List>
         <ListItem button onClick={handleClick2}>
			<ListItemText primary="Ver Reservas Finalizadas" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open2} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTable users ={users}/>

         </List>
         </Collapse>
         </List>
         
       
        
         
    </div>
    </AdminLayout>
  )
}
