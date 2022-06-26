
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTableReserva from "./DataTableReservas";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

 const  ListReservas = ({reservas,tipo}) => {
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
               <ListItem sx={{backgroundColor: '#f57c00',
               color: 'white', cursor:'pointer'}}  onClick={handleClick}> <ListItemText primary={nombreTipo} /><KeyboardArrowUpIcon/>
               </ListItem>
               : <ListItem  sx={{backgroundColor: '#D6D6D6',cursor:'pointer'}}  onClick={handleClick}><ListItemText primary={nombreTipo} /><KeyboardArrowDownIcon/>
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