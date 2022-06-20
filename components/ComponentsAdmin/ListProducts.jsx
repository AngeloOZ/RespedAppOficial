
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTableUsuario from "./DataTableUsuario";
import { makeStyles } from '@mui/styles';
import DataTableProducts from "./DataTableProducts";

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

 const  ListProductos = ({products,categories}) => {
     const styles= useStyles();
   const [open, setOpen] = React.useState(true);
   const handleClick = () => {
      setOpen(!open);
   };
  return (
        <div>
         <List >
         {
               (open==false) ? 
               <ListItem className={styles.listItemAfter}  onClick={handleClick}> <ListItemText primary="Ver Productos" />
               </ListItem>
               : <ListItem className={styles.listItemBefore}  onClick={handleClick}><ListItemText primary="Ver Productos" />
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