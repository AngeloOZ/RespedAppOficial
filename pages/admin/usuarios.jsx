
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTableUsuario from "../../components/ComponentsAdmin/DataTableUsuario";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useUsuarios } from "../../Hooks";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
   listItem: {
     backgroundColor: '#f57c00',
     cursor: 'pointer',
     color: 'white'
   }
 }));

export default function Admin() {
   const styles= useStyles();
   const usersAdmin = useUsuarios(1).users;
   const usersMeseros = useUsuarios(2).users;
   const usersClient = useUsuarios(3).users;
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
        <h1>Usuarios</h1>
        <div>
         <List >
            {
               (open==false) ? 
               <ListItem className={styles.listItem}  onClick={handleClick}> <ListItemText primary="Ver Administradores" />
               </ListItem>
               : <ListItem   onClick={handleClick}><ListItemText primary="Ver Administradores" />
               </ListItem>
            }
			
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTableUsuario users ={usersAdmin}  tipo ={1}/>

         </List>
         </Collapse>
         </List>
         <List>
         {
               (open1==false) ? 
               <ListItem className={styles.listItem}  onClick={handleClick1}> <ListItemText primary="Ver Meseros" />
               </ListItem>
               : <ListItem   onClick={handleClick1}><ListItemText primary="Ver Meseros" />
               </ListItem>
            }
         <Collapse in={!open1} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTableUsuario users ={usersMeseros}  tipo ={2}/>

         </List>
         </Collapse>
         </List>
         <List>
         {
               (open2==false) ? 
               <ListItem className={styles.listItem}  onClick={handleClick2}> <ListItemText primary="Ver Clientes" />
               </ListItem>
               : <ListItem   onClick={handleClick2}><ListItemText primary="Ver Clientes" />
               </ListItem>
            }
         <Collapse in={!open2} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTableUsuario users ={usersClient}  tipo ={3}/>

         </List>
         </Collapse>
         </List>
         
       
        
         
    </div>
    </AdminLayout>
  )
}
