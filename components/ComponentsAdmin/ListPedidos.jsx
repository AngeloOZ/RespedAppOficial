
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTablePedidos from "./DataTablePedidos";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  listItemAfter: {
    backgroundColor: '#f57c00',
    cursor: 'pointer',
    color: 'white'
  },
  listItemBefore: {
   cursor: 'pointer'
 }
}));

 const  ListPedidos = ({pedidos,tipo}) => {
   const styles= useStyles();
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
   let nombreTipo;
   if(tipo==1){
      nombreTipo = "Ver Pedidos Locales";
   }
   if(tipo==2){
      nombreTipo = "Ver Pedidos Domicilio";
   }
   if(tipo==3){
      nombreTipo = "Ver Pedidos Reserva";
   }
  return (
        <div>
         <List>
         {
               (open==false) ? 
               <ListItem className={styles.listItemAfter}  onClick={handleClick}> <ListItemText primary={nombreTipo} />
               </ListItem>
               : <ListItem  className={styles.listItemBefore} onClick={handleClick}><ListItemText primary={nombreTipo} />
               </ListItem>
            }
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         <DataTablePedidos pedidos={pedidos} tipo ={tipo}/>
         </List>
         </Collapse>
         </List>
         
        
         
    </div>
  )
}

export default ListPedidos;