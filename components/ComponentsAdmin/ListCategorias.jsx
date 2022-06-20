
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import DataTableUsuario from "./DataTableUsuario";
import { makeStyles } from '@mui/styles';
import DataTableCategorias from "./DataTableCategorias";

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

 const  ListCategorias = ({categories}) => {
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
               <ListItem className={styles.listItemAfter}  onClick={handleClick}> <ListItemText primary="Ver Categorías" />
               </ListItem>
               : <ListItem className={styles.listItemBefore}  onClick={handleClick}><ListItemText primary="Ver Categorías" />
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