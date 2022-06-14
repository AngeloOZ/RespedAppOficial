import { AdminLayout } from "../../components/layouts/AdminLayout"
import { useUsuarios } from "../../Hooks/useUsuarios";

export default function Admin() {
   const users = JSON.stringify(useUsuarios());
   console.log(users)
  return (
    <AdminLayout>
        <h1>Usuarios</h1>
        <p>{users}</p>
    </AdminLayout>
  )
}
