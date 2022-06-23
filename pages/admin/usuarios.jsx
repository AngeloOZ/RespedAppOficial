
import React from "react";
import { AdminLayout } from "../../components/layouts/AdminLayout";
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
         <ListUsuarios users = {usersAdmin?usersAdmin:[]} tipo={1} />
         <ListUsuarios users = {usersMeseros?usersMeseros:[]} tipo={2} />
         <ListUsuarios users = {usersClient?usersClient:[]} tipo={3} />
    </div>
    </AdminLayout>
  )
}
