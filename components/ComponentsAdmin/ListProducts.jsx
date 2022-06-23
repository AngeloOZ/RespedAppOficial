
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTableProducts from "./DataTableProducts";



 const  ListProductos = ({products,categories}) => {
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
  return (
        <div>
         <List>
          {
               (open==false) ? 
               <ListItem sx={{backgroundColor: '#f57c00',
               color: 'white', cursor:'pointer'}}  onClick={handleClick}> <ListItemText primary="Ver Productos" />
               </ListItem>
               : <ListItem sx={{cursor:'pointer'}} onClick={handleClick}><ListItemText primary="Ver Productos" />
               </ListItem>
            }         
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         <div>
         <DataTableProducts products ={products} categories ={categories}/>
         </div>
         </List>
         </Collapse>
         </List>
         
    </div>
  )
}

export default ListProductos;