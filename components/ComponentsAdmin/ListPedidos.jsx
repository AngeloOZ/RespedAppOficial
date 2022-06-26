
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse, Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTablePedidos from "./DataTablePedidos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

 const  ListPedidos = ({pedidos,tipo}) => {
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
   if(tipo==4){
      nombreTipo = "Ver Pedidos Finalizados";
   }
  return (
        <div>

         <List>
         {
               (open==false) ? 
               <ListItem sx={{backgroundColor: '#f57c00',
               color: 'white', cursor:'pointer'}}  onClick={handleClick}> <ListItemText primary={nombreTipo} /><KeyboardArrowUpIcon/>
               </ListItem>
               : <ListItem sx={{backgroundColor: '#D6D6D6', cursor:'pointer'}}  onClick={handleClick}><ListItemText primary={nombreTipo} /><KeyboardArrowDownIcon/>
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