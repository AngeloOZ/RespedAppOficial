
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTableCategorias from "./DataTableCategorias";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

 const  ListCategorias = ({categories}) => {
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
  return (
        <div>
         <List >
         {
               (open==false) ? 
               <ListItem sx={{backgroundColor: '#f57c00',
               color: 'white', cursor:'pointer'}} onClick={handleClick}> <ListItemText primary="Ver Categorías" /><KeyboardArrowUpIcon/>
               </ListItem>
               : <ListItem sx={{backgroundColor: '#D6D6D6', cursor:'pointer'}}  onClick={handleClick}><ListItemText primary="Ver Categorías" /><KeyboardArrowDownIcon/>
               </ListItem>
            }
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         <DataTableCategorias categories ={categories} />
         </List>
         </Collapse>
         </List>
         
    </div>
  )
}

export default ListCategorias;