
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
import  DataTableUsuario from "../../components/ComponentsAdmin/DataTableUsuario";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Collapse } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useUsuarios } from "../../Hooks";
import ListUsuarios from "../../components/ComponentsAdmin/ListUsuarios";

export default function Admin() {
   const usersAdmin = useUsuarios(1).users;
   const usersMeseros = useUsuarios(2).users;
   const usersClient = useUsuarios(3).users;
  return (
    <AdminLayout>
        <h1>Usuarios</h1>
        <div>
         <ListUsuarios users = {usersAdmin} tipo={1} />
         <ListUsuarios users = {usersMeseros} tipo={2} />
         <ListUsuarios users = {usersClient} tipo={3} />
    </div>
    </AdminLayout>
  )
}
