import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTable from "../../components/ComponentsAdmin/DataTableUsuario";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';


export default function Admin() {
  return (
    <AdminLayout>
        <h1>Usuarios</h1>
        <div>
         <List>
         <ListItem button onClick={handleClick}>
			<ListItemText primary="Ver Usuarios" />
			{/*code to open and closed list*/}
		</ListItem>
         <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
         <DataTable />

         </List>
         </Collapse>
         </List>
        
         
       
        
         
    </div>
    </AdminLayout>
  )
}
