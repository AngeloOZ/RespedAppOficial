import { GridSumary } from "../../components/ComponentsAdmin/GridSumary"
import { AdminLayout } from "../../components/layouts/AdminLayout"
import GridUsuario from "../../components/ComponentsAdmin/GridUsuario";
import { Paper } from "@mui/material";


export default function Admin() {
  var currentdate = new Date();
  var fecha = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + "  ";
  
   

  return (
    <AdminLayout>
      <GridUsuario fecha={fecha} />
      <Paper sx={{ margin: 1 , bgcolor: '#ffb74d'}}>
        
        <GridSumary/>
      </Paper>


    </AdminLayout>
  )
}