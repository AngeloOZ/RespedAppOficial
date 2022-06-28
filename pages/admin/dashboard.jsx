import { GridSumary } from "../../components/ComponentsAdmin/GridSumary"
import { AdminLayout } from "../../components/layouts/AdminLayout"
import { useCookies } from 'react-cookie';
import GridUsuario from "../../components/ComponentsAdmin/GridUsuario";
import DragList from "../../components/ComponentsAdmin/DragAndDrop";
import { Paper } from "@mui/material";

export default function Admin() {
const [cookies] = useCookies(['SESSION_ID']);
var currentdate = new Date(); 
var fecha = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  ";
  
  return (
    <AdminLayout>
      <GridUsuario token = {cookies.SESSION_ID?cookies.SESSION_ID:""} fecha={fecha} />
      <Paper sx={{margin:1}}>
        <DragList/>
      </Paper>
      
        
      <GridSumary />
        
    </AdminLayout>
  )
}