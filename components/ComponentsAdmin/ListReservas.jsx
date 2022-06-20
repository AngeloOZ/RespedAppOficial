
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import DataTableReserva from "./DataTableReservas";

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

 const  ListReservas = ({reservas,tipo}) => {
   const styles= useStyles();
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
   let nombreTipo;
   if(tipo==1){
      nombreTipo = "Ver Reservas Pendientes";
   }
   if(tipo==2){
      nombreTipo = "Ver Reservas Confirmadas";
   }
   if(tipo==3){
      nombreTipo = "Ver Reservas Finalizadas";
   }
   if(tipo==4){
      nombreTipo = "Ver Reservas Rechazadas";
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
         <DataTableReserva reservas={reservas} tipo ={tipo}/>
         </List>
         </Collapse>
         </List>
         
        
         
    </div>
  )
}

export default ListReservas;