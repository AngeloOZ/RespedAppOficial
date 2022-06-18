
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTableCategorias from "../../components/ComponentsAdmin/DataTableCategorias";
import  DataTableProducts from "../../components/ComponentsAdmin/DataTableProducts";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useCategories, useProducts } from "../../Hooks";


export default function Admin() {
   const {categories} = useCategories()
   const {products} = useProducts()
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
        <h1>Productos</h1>
        <div>
         <List>
         <ListItem button onClick={handleClick}>
			<ListItemText primary="Ver Categorías" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTableCategorias categories ={categories}/>

         </List>
         </Collapse>
         </List>
         <List>
         <ListItem button onClick={handleClick1}>
			<ListItemText primary="Ver Productos" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={!open1} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         
         <DataTableProducts products ={products}/>

         </List>
         </Collapse>
         </List>
         
       
        
         
    </div>
    </AdminLayout>
  )
}
